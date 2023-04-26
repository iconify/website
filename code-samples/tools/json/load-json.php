<?php

$collection = new Collection();
if (!$collection->loadJSON($data)) {
    throw new \Exception('Failed to load JSON data');
}

?>