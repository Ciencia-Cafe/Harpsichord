const KEY = new RegExp("\\[([^\\]]+)\\]\\s*","y");
const COMMENT = new RegExp("#[^\n]*","y");
const WS = new RegExp("[ \t\f\r\n]+","my");
const NL = new RegExp("[ \\t]*\\n","my");
const UNICODE = new RegExp("U\\+([0-9a-fA-F]{4,6})","my");
const INCLUDE = new RegExp("include", "y");

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

function match_endline(s, p) {
	let m;
	if (p == s.length) { return p; }
	if (m = NL.match(s, p)) { return m.end; }
	throw make_error(`Expected new line`, s, p);
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
				throw make_error(`Expected string for include`, s, p);
			}
			p = match_endline(s, p);
			lines.push({include:include})
			continue;
		}

		if (p >= s.length) break;
		if (s[p] == '\n') {
			p += 1;
			continue;
		}

		let def;
		[def, p] = parse_definition(s, p);
		p = match_endline(s, p);
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
	return [str, p]
}

function parse_definition(s, p) {
	let m;
	let key, ctx, string;
	if (m = KEY.match(s, p)) {
		p = m.end;
		key = m[1];
	} else {
		throw make_error(`Expected [KEY]`, s, p);
	}
	if (match_char(s, p, ':')) {
		p = ignore_ws(s, p+1);
		ctx = key;
		if (m = KEY.match(s, p)) {
			p = m.end;
			key = m[1];
		}
	}
	if (!match_char(s, p, '>')) {
		throw make_error(`Expected > for [${key}]`, s, p);
	}
	p = ignore_ws(s, p+1);
	[string, p] = parse_string(s, p);
	if (string == null) {
		throw make_error(`Expected string value for [${key}]`, s, p);
	}
	return [{key, ctx, string}, p];
}