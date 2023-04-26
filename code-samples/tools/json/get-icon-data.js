let data = collection.getIconData('arrow-left');
let svg = new SVG(data);
containerNode.innerHTML = svg.getSVG({});
