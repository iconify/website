<?php

require('./vendor/autoload.php');

// Source file
$source = 'mdi.json';

// Target directory
$target = 'output';

// Load collection
$collection = new \Iconify\JSONTools\Collection();
if (!$collection->loadFromFile($source)) {
    echo "Error loading JSON file.\n";
    return;
}

// Create directory for export
@mkdir($target);

// Export each icon
$icons = $collection->listIcons(true);
foreach ($icons as $name) {
    // Get icon data
    $data = $collection->getIconData($name);

    // Create new SVG object
    $svg = new \Iconify\JSONTools\SVG($data);

    // Generate SVG code
    $code = $svg->getSVG([
        'height' => 'auto' // This will export icons with their original dimensions instead of "1em"
    ]);

    file_put_contents($target . '/' . $name . '.svg', $code);
}

echo 'Exported ', count($icons), " icons.\n";
