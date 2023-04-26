<?php

$collection = new Collection();
$collection->loadIconifyCollection('vaadin');
echo 'Available icons in vaadin collection: ', implode(', ', $collection->listIcons(true)), "\n";

?>