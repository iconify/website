<?php

$svg->getSVG([
    'height' => '24px'
]);
$svg->getSVG([
    'height' => '24px',
    'width' => '24px',
    'align' => 'center,middle,meet',
    'color' => '#ff8000',
    'rotate' => '90deg', // same as "'rotate' =>  1" or "'rotate' => '25%'"
    'flip' => 'horizontal', // same as "'hFlip' => true"
    'box' => true
]);
$svg->getSVG([
    'height' => 'auto' // height and width will be set from viewBox attribute, using original icon's dimensions
]);

?>