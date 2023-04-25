Avoid using `[prop]rgba` and `[prop]hsla` colors. Some icons have multiple layers on top of each other. Using semi-transparent color will result in both layers being visible.

Instead, use a solid color and add transparency with `[prop]opacity`. This will result in browser rendering shapes with a solid color, then applying opacity to an entire icon.
