// Import Collection and SVG classes
const { SVG, Collection } = require('@iconify/json-tools');

// Create Collection instance and load Material Design Icons
let collection = new Collection();
collection.loadIconifyCollection('mdi');

// Create SVG instance with 'mdi:home' icon data
let svg = new SVG(collection.getIconData('home'));

// Generate and echo <svg>
console.log(svg.getSVG({}));
