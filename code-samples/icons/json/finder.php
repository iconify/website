<?php
require './vendor/autoload.php';

// Installation: composer require iconify/json
use Iconify\IconsJSON\Finder;

// Get list of all icon sets
$iconSets = Finder::collections();
$prefixes = array_keys($iconSets);
echo 'Available ', count($prefixes), " icon sets\n";

// List icon sets in format: "prefix: name (total icons)"
echo implode("\n", array_map(function ($prefix) use ($iconSets) {
    $item = $iconSets[$prefix];
    return $prefix . ': ' . $item['name'] . ' (' . $item['total'] . ' icons)';
}, $prefixes)), "\n";

// Get location of Taber Icons JSON file
$tabler = Finder::locate('tabler');
echo 'Tabler icons JSON file is located at: ', $tabler, "\n";
