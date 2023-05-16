SVG do not behave like other images. When you set a wrong width/height ratio for other image formats, images get stretched. When you do that for SVG, bounding box is changed and the image is aligned inside that bounding box.

In an example above, one icon is too wide and another icon is too tall. The browser will move icons to center instead of stretching icon.
