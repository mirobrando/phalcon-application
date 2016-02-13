<?php

ini_set('display_errors', 0);
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';

$console = new \mirolabs\phalcon\Framework\App\Console($argv, __DIR__ . '/../', true);
$console->main();