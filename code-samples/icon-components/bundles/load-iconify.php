<?php

use \Iconify\JSONTools\Collection;

$collection = new Collection();
if (!$collection->loadIconifyCollection('mdi')) {
    throw new \Exception('Failed to load Material Design Icons');
}

?>