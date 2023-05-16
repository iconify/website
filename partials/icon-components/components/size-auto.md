Special keyword `[str]auto` sets size to value from `[attr]viewBox`. This makes it easy to render an icon as it was originally designed.

It is enough to set one dimension to `[str]auto`, another dimension will be set to `[str]auto` too, unless you specify otherwise.

For example, if `[attr]viewBox="0 0 24 24"` and `[prop]height` is set to `[str]auto`, `[prop]height` will be set to `[num]24`.
