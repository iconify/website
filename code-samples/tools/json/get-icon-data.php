<?php

$data = $collection->getIconData('arrow-left');
$svg = new SVG($data);
echo $svg->getSVG();

?>