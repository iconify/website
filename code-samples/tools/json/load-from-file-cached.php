<?php

$collection = new Collection();
if (!$collection->loadFromFile('json/custom-icons.json', null, 'cache/custom-icons.php')) {
    throw new \Exception('Failed to load custom-icons.json');
}

?>