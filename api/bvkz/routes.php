<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->get('/previous-concerts', function (Request $request, Response $response, array $args) {

  $qry = "select * from previous_concerts";
  $rs = $this->db->query($qry);


  while ($row = $rs->fetch_assoc()) {
    $previousConcerts[] = $row;
  }


  $json = json_encode($previousConcerts, JSON_NUMERIC_CHECK);
  echo $json;
});
