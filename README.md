# Harpsichord

https://ciencia-cafe.github.io/Harpsichord/
Configure a keyboard layout using harpsichord language.

```
# this is a comment

# includes a predefined layout
include 'en-us'

# key [A] writes 'p'
[A] > 'p'

# [Shift+A] writes 'P'
[A SHIFT] > 'P'

# [S] is a dead-key:
# [S] [H] writes 'š'
# [S] [C] writes 'č'
[S]: [H] > 'š'
[S]: [C] > 'č'

# using unicode in string
[#5] > 'U+2665'

# strings can be many characters long
[#3] > 'hello world'
```
