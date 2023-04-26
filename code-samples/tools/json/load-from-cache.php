<?php

$collection = new Collection();

// Locate file
$file = Collection::findIconifyCollection('mdi');

// Attempt to load cached file
if (!$collection->loadFromCache('cache/mdi.php', filemtime($file))) {

    // Failed. Attempt to load from JSON file
    if (!$collection->loadFromFile($file)) {
        throw new \Exception('Cannot load Material Design Icons');
    }

    // Store cache for next loadFromCache() call
    $collection->saveCache('cache/mdi.php', filemtime($file));
}

?>