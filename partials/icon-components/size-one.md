What happens when only one dimension is set?

- If width is not set, but height is set, width is calculated using icon's width/height ratio.
- If height is not set, but width is set, height is calculated using icon's height/width ratio.
- If no dimensions are set in attributes, height is set to `[str]1em` and width is calculated using icon's width/height ratio. Then icon behaves like text and can be resized using `[prop]font-size` in stylesheet.
