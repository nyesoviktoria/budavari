<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$settings = require __DIR__ . '/settings.php';

$app = new \Slim\App($settings);

// Get container
$container = $app->getContainer();

$container['db'] = function ($container) {
  $getSettings = $container->get('settings')['db'];
  $mysqli = new mysqli($getSettings['host'], $getSettings['user'], $getSettings['password'], $getSettings['database']);
  $mysqli->set_charset("utf8");
  return $mysqli;
};

$container['notFoundHandler'] = function ($c) {
  return function ($request, $response) use ($c) {
    return $c['view']->render($response->withStatus(404), '404.php', [
      "myError" => "Error"
    ]);
  };
};

// Register routes
require __DIR__ . '/routes.php';

$app->run();
