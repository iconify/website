<?php

$data = $collection->getIcons(['arrow-left', 'arrow-right', 'home']);
file_put_contents('bundle.json', json_encode($data));

?>