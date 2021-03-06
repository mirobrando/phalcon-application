<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

if (!file_exists(__DIR__ . '/' . $_SERVER['REQUEST_URI'])) {
    @list($url, $other) = explode('?', $_SERVER['REQUEST_URI']);
    $_GET['_url'] = $url;
    if ($other) {
        $params = explode('&', $other);
        foreach ($params as $param) {
            list($key, $value) = explode('=', $param);
            $_GET[$key] = $value;
        }
    }
}

require __DIR__ . '/../vendor/autoload.php';

$env = getenv('env')?getenv('env'):\mirolabs\phalcon\Framework\Application::ENVIRONMENT_DEV;

$app = new \mirolabs\phalcon\Framework\App\Web(__DIR__ . '/../', $env);
$app->main();