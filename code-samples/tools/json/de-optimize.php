<?php

$data = json_decode(file_get_contents('ant-design.json'), true);
Collection::deOptimize($data);

?>