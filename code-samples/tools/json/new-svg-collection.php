<?php

// Import Collection and SVG classes
use \Iconify\JSONTools\Collection;
use \Iconify\JSONTools\SVG;

// Create Collection instance and load Material Design Icons
$collection = new Collection();
$collection->loadIconifyCollection('mdi');

// Create SVG instance with 'mdi:home' icon data
$svg = new SVG($collection->getIconData('home'));

// Generate and echo <svg>
echo $svg->getSVG();