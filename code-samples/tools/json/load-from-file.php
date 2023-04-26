<?php

$collection = new Collection();
if (!$collection->loadFromFile('json/custom-icons.json')) {
    throw new \Exception('Failed to load custom-icons.json');
}

?>