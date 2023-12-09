<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$settings = require __DIR__ . '/settings.php';

$app = new \Slim\App($settings);

// Get container
$container = $app->getContainer();

$conn;

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


function delete($container, $table, $where)
{
  $response = [];

  try {
    $a = array();
    $w = "";
    foreach ($where as $key => $value) {
      $w .= " and " . $key . " = :" . $key;
      $a[":" . $key] = $value;
    }

    $pdo = $container->get('pdo'); // Az adatbázis-kapcsolat objektumának lekérése a konténerből
    $stmt = $pdo->prepare("DELETE FROM $table WHERE 1=1 " . $w);
    $stmt->execute($a);
    $affected_rows = $stmt->rowCount();

    if ($affected_rows <= 0) {
      $response["status"] = "warning";
      $response["message"] = "Már törölt játék.";
    } else {
      $response["status"] = "success";
      $response["message"] = $affected_rows . " sor(ok) törölve az adatbázisból.";
    }
  } catch (PDOException $e) {
    $response["status"] = "error";
    $response["message"] = 'Törlés sikertelen: ' . $e->getMessage();
  }

  return $response;
}



$app->run();
