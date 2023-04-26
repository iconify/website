<?php

// Import Collection class
use \Iconify\JSONTools\Collection;

// Load collection
$collection = new Collection();
if (!$collection->loadIconifyCollection('mdi')) {
    throw new \Exception('Cannot load Material Design Icons');
}

// Create bundle
$code = $collection->scriptify([
    'icons' => ['account', 'account-alert', 'home', 'book-open'],
    'pretty' => false,
    'optimize' => true
]);

// Save bundle
file_put_contents('bundle-mdi.js', $code);
