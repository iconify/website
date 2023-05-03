These are not CSS transformations, transformations are applied inside SVG.

What's the difference from CSS transformations?

- If you rotate an icon by 90 degrees in CSS, icon's bounding box remains the same. 16x24 icon still takes space for 16x24, but might overlap elements around it.
- If you rotate an icon by 90 degrees in SVG Framework, icon's dimensions swap places. 16x24 icon becomes 24x16 icon, and it does not affect elements around it.
