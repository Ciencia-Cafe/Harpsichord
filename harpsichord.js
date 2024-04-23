const KEY = new RegExp("\\[([^\\]]+)\\]","y");
const COMMENT = new RegExp("#[^\n]*","y");
const WS = new RegExp("[ \t\f\r\n]+","my");
const NL = new RegExp("[ \\t]*\\n","my");
const UNICODE = new RegExp("U\\+([0-9a-fA-F]{4,6})","my");
const INCLUDE = new RegExp("include", "y");
const DELETE = new RegExp("delete", "y");
const REPLACE = new RegExp("replace", "y");

RegExp.prototype.match = function(s, p) {
	this.lastIndex = p;
	const match = this.exec(s);
	if (match) match.end = match.index + match[0].length;
	return match;
}

function make_error(m, s, p) {
	const line = s.slice(0,p).split('\n').length;
	return new Error(`${m}`);
}

function ignore_ws(s, p) {
	let m;
	while (m = WS.match(s, p) ?? COMMENT.match(s, p)) { p = m.end; }
	return p;
}

function match_endline(msg, s, p) {
	let m;
	if (p == s.length) { return p; }
	if (m = NL.match(s, p)) { return m.end; }
	throw make_error(`Expected new line ${msg}`, s, p);
}

function match_char(s, p, ch) {
	if (p >= s.length) return null;
	return s[p] == ch;
}

function parse_harpsichord(s, p=0) {
	let m;
	let lines = [];
	while (true) {
		p = ignore_ws(s, p);

		if (m = INCLUDE.match(s, p)) {
			p = ignore_ws(s, p+7);
			let include;
			[include, p] = parse_string(s, p);
			if (include == null) {
				throw make_error(`Expected string at include`, s, p);
			}
			p = match_endline(`at include '${include}'`, s, p);
			lines.push({include:include})
			continue;
		}

		if (m = DELETE.match(s, p)) {
			p = ignore_ws(s, p+6);
			let key;
			if (m = KEY.match(s, p)) {
				p = m.end;
				key = m[1];
			} else {
				throw make_error(`Expected [KEYCODE] at delete`, s, p);
			}
			p = match_endline(`at delete [${key}]`, s, p);
			lines.push({delete:key})
			continue;
		}

		if (m = REPLACE.match(s, p)) {
			p = ignore_ws(s, p+7);
			let from, to;
			[from, p] = parse_string(s, p);
			if (from == null) {
				throw make_error(`Expected string at replace`, s, p);
			}
			p = ignore_ws(s, p);
			if (!match_char(s, p, '>')) {
				throw make_error(`Expected > at replace '${from}'`, s, p);
			}
			p = ignore_ws(s, p+1);
			[to, p] = parse_string(s, p);
			p = match_endline(`at replace '${from}' > '${to}'`, s, p);
			lines.push({replace:from, to:to})
			continue;
		}

		if (p >= s.length) break;
		if (s[p] == '\n') {
			p += 1;
			continue;
		}

		let def;
		[def, p] = parse_definition(s, p);
		p = match_endline(`at ${def.ctx  ? '['+def.ctx+']: ' : ''}[${def.key}]`, s, p);
		lines.push(def)
	}
	return lines;
}

function parse_string(s, p) {
	let m;
	if (m = UNICODE.match(s, p)) {
		return [String.fromCharCode(parseInt(m[1],16)), m.end];
	}
	if (p >= s.length) return [null, p];
	if (s[p] != "'") return [null, p];
	p += 1;
	let str = '';
	while (true) {
		if (m = UNICODE.match(s, p)) {
			str += String.fromCharCode(parseInt(m[1],16));
			p = m.end;
			continue;
		}

		if (p >= s.length) { throw make_error("Unterminated string", s, p) }
		if (s[p] == '\n') { throw make_error("Unterminated string", s, p) }
		if (s[p] == "'") {
			p += 1;
			break;
		}
		
		str += s[p];
		p += 1;
	}
	if (str == '') str = "'";
	return [str, p];
}

function parse_definition(s, p) {
	let m;
	let key, ctx, string, display;
	if (m = KEY.match(s, p)) {
		p = m.end;
		key = m[1];
	} else {
		throw make_error(`Expected [KEYCODE]`, s, p);
	}
	p = ignore_ws(s, p);
	if (match_char(s, p, '-')) {
		p = ignore_ws(s, p+1);
		[display, p] = parse_string(s, p);
		p = ignore_ws(s, p);
	}
	if (match_char(s, p, ':')) {
		p = ignore_ws(s, p+1);
		ctx = key;
		if (m = KEY.match(s, p)) {
			p = m.end;
			key = m[1];
		}
		p = ignore_ws(s, p);
	}
	if (!match_char(s, p, '>')) {
		throw make_error(`Expected > at ${ctx  ? '['+ctx+']: ' : ''}[${key}]`, s, p);
	}
	p = ignore_ws(s, p+1);
	[string, p] = parse_string(s, p);
	if (string == null) {
		throw make_error(`Expected string value at [${key}]`, s, p);
	}
	return [{key, ctx, string, display}, p];
}