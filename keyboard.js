const KEYBOARD_DATA = {
	width: 810, height: 270
}

const KEYS_DATA = [
	{"scancode":"Backquote","name":"#3","special":false,"where":[0,0,1]},
	{"scancode":"Digit1","name":"1","special":false,"where":[0,1,1]},
	{"scancode":"Digit2","name":"2","special":false,"where":[0,2,1]},
	{"scancode":"Digit3","name":"3","special":false,"where":[0,3,1]},
	{"scancode":"Digit4","name":"4","special":false,"where":[0,4,1]},
	{"scancode":"Digit5","name":"5","special":false,"where":[0,5,1]},
	{"scancode":"Digit6","name":"6","special":false,"where":[0,6,1]},
	{"scancode":"Digit7","name":"7","special":false,"where":[0,7,1]},
	{"scancode":"Digit8","name":"8","special":false,"where":[0,8,1]},
	{"scancode":"Digit9","name":"9","special":false,"where":[0,9,1]},
	{"scancode":"Digit0","name":"0","special":false,"where":[0,10,1]},
	{"scancode":"Minus","name":"-","special":false,"where":[0,11,1]},
	{"scancode":"Equal","name":"+","special":false,"where":[0,12,1]},
	{"scancode":"Backspace","name":"Backspace","special":true,"where":[0,13,2]},
	{"scancode":"Tab","name":"Tab","special":true,"where":[1,0,1.5]},
	{"scancode":"KeyQ","name":"Q","special":false,"where":[1,1.5,1]},
	{"scancode":"KeyW","name":"W","special":false,"where":[1,2.5,1]},
	{"scancode":"KeyE","name":"E","special":false,"where":[1,3.5,1]},
	{"scancode":"KeyR","name":"R","special":false,"where":[1,4.5,1]},
	{"scancode":"KeyT","name":"T","special":false,"where":[1,5.5,1]},
	{"scancode":"KeyY","name":"Y","special":false,"where":[1,6.5,1]},
	{"scancode":"KeyU","name":"U","special":false,"where":[1,7.5,1]},
	{"scancode":"KeyI","name":"I","special":false,"where":[1,8.5,1]},
	{"scancode":"KeyO","name":"O","special":false,"where":[1,9.5,1]},
	{"scancode":"KeyP","name":"P","special":false,"where":[1,10.5,1]},
	{"scancode":"BracketLeft","name":"#4","special":false,"where":[1,11.5,1]},
	{"scancode":"BracketRight","name":"#6","special":false,"where":[1,12.5,1]},
	{"scancode":"Enter","name":"Enter","special":true,"where":[1,13.5,1.5]},
	{"scancode":"CapsLock","name":"Caps","special":true,"where":[2,0,1.75]},
	{"scancode":"KeyA","name":"A","special":false,"where":[2,1.75,1]},
	{"scancode":"KeyS","name":"S","special":false,"where":[2,2.75,1]},
	{"scancode":"KeyD","name":"D","special":false,"where":[2,3.75,1]},
	{"scancode":"KeyF","name":"F","special":false,"where":[2,4.75,1]},
	{"scancode":"KeyG","name":"G","special":false,"where":[2,5.75,1]},
	{"scancode":"KeyH","name":"H","special":false,"where":[2,6.75,1]},
	{"scancode":"KeyJ","name":"J","special":false,"where":[2,7.75,1]},
	{"scancode":"KeyK","name":"K","special":false,"where":[2,8.75,1]},
	{"scancode":"KeyL","name":"L","special":false,"where":[2,9.75,1]},
	{"scancode":"Semicolon","name":"#1","special":false,"where":[2,10.75,1]},
	{"scancode":"Quote","name":"#7","special":false,"where":[2,11.75,1]},
	{"scancode":"Backslash","name":"#5","special":false,"where":[2,12.75,1]},
	{"scancode":"Enter2","name":"","special":true,"where":[2,13.75,1.25]},
	{"scancode":"ShiftLeft","name":"Shift","special":true,"where":[3,0,1.5]},
	{"scancode":"IntlBackslash","name":"#102","special":false,"where":[3,1.5,1]},
	{"scancode":"KeyZ","name":"Z","special":false,"where":[3,2.5,1]},
	{"scancode":"KeyX","name":"X","special":false,"where":[3,3.5,1]},
	{"scancode":"KeyC","name":"C","special":false,"where":[3,4.5,1]},
	{"scancode":"KeyV","name":"V","special":false,"where":[3,5.5,1]},
	{"scancode":"KeyB","name":"B","special":false,"where":[3,6.5,1]},
	{"scancode":"KeyN","name":"N","special":false,"where":[3,7.5,1]},
	{"scancode":"KeyM","name":"M","special":false,"where":[3,8.5,1]},
	{"scancode":"Comma","name":",","special":false,"where":[3,9.5,1]},
	{"scancode":"Period","name":".","special":false,"where":[3,10.5,1]},
	{"scancode":"Slash","name":"#2","special":false,"where":[3,11.5,1]},
	{"scancode":"ShiftRight","name":"Shift","special":true,"where":[3,12.5,2.5]},
	{"scancode":"ControlLeft","name":"Ctrl","special":true,"where":[4,0,1.5]},
	{"scancode":"AltLeft","name":"Alt","special":true,"where":[4,1.5,1.5]},
	{"scancode":"Space","name":"Space","special":false,"where":[4,3,9]},
	{"scancode":"AltRight","name":"Alt","special":true,"where":[4,12,1.5]},
	{"scancode":"ControlRight","name":"Ctrl","special":true,"where":[4,13.5,1.5]}
]


const KEYMAP = [
	["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
	["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Enter"],
	["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"],
	["ShiftLeft", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
	["ControlLeft", "AltLeft", "Space", "AltRight", "ControlRight"],
]

const KEYSPECIAL = ["Tab", "CapsLock", "ShiftRight", "ShiftLeft", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Enter", "Backspace"]

const KEYSIZE = [
	[1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00],
	[1.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.50],
	[1.75, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.25],
	[1.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.50      ],
	[1.50      , 1.50      , 9.00                        , 1.50            , 1.50      ],
]

const KEYNAME = [
	["#3", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "Backspace"],
	["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "#4", "#6", "Enter"],
	["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", "#1", "#7", "#5", ""],
	["Shift", "#102", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "#2", "Shift"      ],
	["Ctrl",    "Alt"      , "Space"                 , "Alt",  "Ctrl" ],
]

const DEFAULT_EN_US = `
[Space] > ' '
[Space SHIFT] > ' '

[M] > 'm'
[N] > 'n'
[B] > 'b'
[V] > 'v'
[C] > 'c'
[X] > 'x'
[Z] > 'z'
[L] > 'l'
[K] > 'k'
[J] > 'j'
[H] > 'h'
[G] > 'g'
[F] > 'f'
[D] > 'd'
[S] > 's'
[A] > 'a'
[P] > 'p'
[O] > 'o'
[I] > 'i'
[U] > 'u'
[Y] > 'y'
[T] > 't'
[R] > 'r'
[E] > 'e'
[W] > 'w'
[Q] > 'q'
[#1] > ';'

[M SHIFT] > 'M'
[N SHIFT] > 'N'
[B SHIFT] > 'B'
[V SHIFT] > 'V'
[C SHIFT] > 'C'
[X SHIFT] > 'X'
[Z SHIFT] > 'Z'
[L SHIFT] > 'L'
[K SHIFT] > 'K'
[J SHIFT] > 'J'
[H SHIFT] > 'H'
[G SHIFT] > 'G'
[F SHIFT] > 'F'
[D SHIFT] > 'D'
[S SHIFT] > 'S'
[A SHIFT] > 'A'
[P SHIFT] > 'P'
[O SHIFT] > 'O'
[I SHIFT] > 'I'
[U SHIFT] > 'U'
[Y SHIFT] > 'Y'
[T SHIFT] > 'T'
[R SHIFT] > 'R'
[E SHIFT] > 'E'
[W SHIFT] > 'W'
[Q SHIFT] > 'Q'
[#1 SHIFT] > ':'

[1] > '1'
[2] > '2'
[3] > '3'
[4] > '4'
[5] > '5'
[6] > '6'
[7] > '7'
[8] > '8'
[9] > '9'
[0] > '0'
[1 SHIFT] > '!'
[2 SHIFT] > '@'
[3 SHIFT] > '#'
[4 SHIFT] > '$'
[5 SHIFT] > '%'
[6 SHIFT] > '^'
[7 SHIFT] > '&'
[8 SHIFT] > '*'
[9 SHIFT] > '('
[0 SHIFT] > ')'

[-] > '-'
[- SHIFT] > '_'
[+] > '='
[+ SHIFT] > '+'

[,] > ','
[.] > '.'
[, SHIFT] > '<'
[. SHIFT] > '>'

[#2] > '/'
[#2 SHIFT] > '?'

[#3] > '\`'
[#3 SHIFT] > '~'

[#6] > ']'
[#4] > '['
[#6 SHIFT] > '}'
[#4 SHIFT] > '{'

[#7] > U+0027
[#7 SHIFT] > '"'

[#102] > '\\'
[#102 SHIFT] > '|'
[#5] > '\\'
[#5 SHIFT] > '|'
`

const DEFAULT_QWERTY_LOWER = `
[Space] > ' '

[M] > 'm'
[N] > 'n'
[B] > 'b'
[V] > 'v'
[C] > 'c'
[X] > 'x'
[Z] > 'z'
[L] > 'l'
[K] > 'k'
[J] > 'j'
[H] > 'h'
[G] > 'g'
[F] > 'f'
[D] > 'd'
[S] > 's'
[A] > 'a'
[P] > 'p'
[O] > 'o'
[I] > 'i'
[U] > 'u'
[Y] > 'y'
[T] > 't'
[R] > 'r'
[E] > 'e'
[W] > 'w'
[Q] > 'q'
`

const DEFAULT_QWERTY_UPPER = `
[Space] > ' '

[M SHIFT] > 'M'
[N SHIFT] > 'N'
[B SHIFT] > 'B'
[V SHIFT] > 'V'
[C SHIFT] > 'C'
[X SHIFT] > 'X'
[Z SHIFT] > 'Z'
[L SHIFT] > 'L'
[K SHIFT] > 'K'
[J SHIFT] > 'J'
[H SHIFT] > 'H'
[G SHIFT] > 'G'
[F SHIFT] > 'F'
[D SHIFT] > 'D'
[S SHIFT] > 'S'
[A SHIFT] > 'A'
[P SHIFT] > 'P'
[O SHIFT] > 'O'
[I SHIFT] > 'I'
[U SHIFT] > 'U'
[Y SHIFT] > 'Y'
[T SHIFT] > 'T'
[R SHIFT] > 'R'
[E SHIFT] > 'E'
[W SHIFT] > 'W'
[Q SHIFT] > 'Q'
`

const DEFAULT_PT_BR = `[Space] > ' '
[Space SHIFT] > ' '

[M] > 'm'
[N] > 'n'
[B] > 'b'
[V] > 'v'
[C] > 'c'
[X] > 'x'
[Z] > 'z'
[L] > 'l'
[K] > 'k'
[J] > 'j'
[H] > 'h'
[G] > 'g'
[F] > 'f'
[D] > 'd'
[S] > 's'
[A] > 'a'
[P] > 'p'
[O] > 'o'
[I] > 'i'
[U] > 'u'
[Y] > 'y'
[T] > 't'
[R] > 'r'
[E] > 'e'
[W] > 'w'
[Q] > 'q'
[#1] > 'ç'

[M SHIFT] > 'M'
[N SHIFT] > 'N'
[B SHIFT] > 'B'
[V SHIFT] > 'V'
[C SHIFT] > 'C'
[X SHIFT] > 'X'
[Z SHIFT] > 'Z'
[L SHIFT] > 'L'
[K SHIFT] > 'K'
[J SHIFT] > 'J'
[H SHIFT] > 'H'
[G SHIFT] > 'G'
[F SHIFT] > 'F'
[D SHIFT] > 'D'
[S SHIFT] > 'S'
[A SHIFT] > 'A'
[P SHIFT] > 'P'
[O SHIFT] > 'O'
[I SHIFT] > 'I'
[U SHIFT] > 'U'
[Y SHIFT] > 'Y'
[T SHIFT] > 'T'
[R SHIFT] > 'R'
[E SHIFT] > 'E'
[W SHIFT] > 'W'
[Q SHIFT] > 'Q'
[#1 SHIFT] > 'Ç'

[1] > '1'
[2] > '2'
[3] > '3'
[4] > '4'
[5] > '5'
[6] > '6'
[7] > '7'
[8] > '8'
[9] > '9'
[0] > '0'
[1 SHIFT] > '!'
[2 SHIFT] > '@'
[3 SHIFT] > '#'
[4 SHIFT] > '$'
[5 SHIFT] > '%'
[6 SHIFT] > '¨'
[7 SHIFT] > '&'
[8 SHIFT] > '*'
[9 SHIFT] > '('
[0 SHIFT] > ')'

[-] > '-'
[- SHIFT] > '_'
[+] > '='
[+ SHIFT] > '+'

[,] > ','
[.] > '.'
[, SHIFT] > '<'
[. SHIFT] > '>'

[#2] > ';'
[#2 SHIFT] > ':'

[#3] > ''
[#3 SHIFT] > '"'
[#4] > '´'
[#4 SHIFT] > '\`'
[#6] > '['
[#5] > ']'
[#6 SHIFT] > '{'
[#5 SHIFT] > '}'

[#7] > '~'
[#7 SHIFT] > '^'

[#102] > '\\'
[#102 SHIFT] > '|'

[6 SHIFT]: [A] > 'ä'
[6 SHIFT]: [E] > 'ë'
[6 SHIFT]: [I] > 'ï'
[6 SHIFT]: [O] > 'ö'
[6 SHIFT]: [U] > 'ü'
[6 SHIFT]: [Y] > 'ÿ'
[6 SHIFT]: [A SHIFT] > 'Ä'
[6 SHIFT]: [E SHIFT] > 'Ë'
[6 SHIFT]: [I SHIFT] > 'Ï'
[6 SHIFT]: [O SHIFT] > 'Ö'
[6 SHIFT]: [U SHIFT] > 'Ü'

[#4]: [A] > 'á'
[#4]: [E] > 'é'
[#4]: [I] > 'í'
[#4]: [O] > 'ó'
[#4]: [U] > 'ú'
[#4]: [Y] > 'ý'
[#4]: [A SHIFT] > 'Á'
[#4]: [E SHIFT] > 'É'
[#4]: [I SHIFT] > 'Í'
[#4]: [O SHIFT] > 'Ó'
[#4]: [U SHIFT] > 'Ú'
[#4]: [Y SHIFT] > 'Ý'

[#7]: [A] > 'ã'
[#7]: [O] > 'õ'
[#7]: [N] > 'ñ'
[#7]: [A SHIFT] > 'Ã'
[#7]: [O SHIFT] > 'Õ'
[#7]: [N SHIFT] > 'Ñ'

[#4 SHIFT]: [A] > 'à'
[#4 SHIFT]: [E] > 'è'
[#4 SHIFT]: [I] > 'ì'
[#4 SHIFT]: [O] > 'ò'
[#4 SHIFT]: [U] > 'ù'
[#4 SHIFT]: [A SHIFT] > 'À'
[#4 SHIFT]: [E SHIFT] > 'È'
[#4 SHIFT]: [I SHIFT] > 'Ì'
[#4 SHIFT]: [O SHIFT] > 'Ò'
[#4 SHIFT]: [U SHIFT] > 'Ù'

[#7 SHIFT]: [A] > 'â'
[#7 SHIFT]: [E] > 'ê'
[#7 SHIFT]: [I] > 'î'
[#7 SHIFT]: [O] > 'ô'
[#7 SHIFT]: [U] > 'û'
[#7 SHIFT]: [A SHIFT] > 'Â'
[#7 SHIFT]: [E SHIFT] > 'Ê'
[#7 SHIFT]: [I SHIFT] > 'Î'
[#7 SHIFT]: [O SHIFT] > 'Ô'
[#7 SHIFT]: [U SHIFT] > 'Û'

[1 ALT] > '¹'
[2 ALT] > '²'
[3 ALT] > '³'
[4 ALT] > '£'
[5 ALT] > '¢'
[6 ALT] > '¬'
[+ ALT] > '§'
[Q ALT] > '/'
[W ALT] > '?'
[E ALT] > '°'
[#6 ALT] > 'ª'
[#5 ALT] > 'º'
[C ALT] > '₢'
`