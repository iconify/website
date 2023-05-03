Important note about `[prop]color` option: you cannot use CSS variables. Color is not added to style, it is changed inside icon. Icon is not inlined in HTML, it is treated as an external resource. Elements of icon cannot be targeted or styled, just like any other image linked with `[func]url()`, therefore CSS variables are not available in icon.

If you want to use a CSS variable for color, do not use `[prop]color` option, add color to icon in your stylesheet or inline style by changing text color:
