<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->get('/previous-concerts', function (Request $request, Response $response, array $args) {

  $qry = "SELECT * FROM previous_concerts";
  $rs = $this->db->query($qry);


  while ($row = $rs->fetch_assoc()) {
    $previousConcerts[] = $row;
  }


  $json = json_encode($previousConcerts, JSON_NUMERIC_CHECK);
  echo $json;
});

$app->get('/records-audio', function (Request $request, Response $response, array $args) {

  $qry = "SELECT a.AlbumTitle, a.CoverImageSource, a.CoverImageAltText, a.Description, a.AlbumName, r.TrackSource, r.RecordTitle, r.SoloistName FROM records r INNER JOIN albums a ON r.AlbumId = a.AlbumId";
  $rs = $this->db->query($qry);


  while ($row = $rs->fetch_assoc()) {
    $records[] = $row;
  }


  $json = json_encode($records, JSON_NUMERIC_CHECK);
  echo $json;
});

$app->get('/upcoming-concerts', function (Request $request, Response $response, array $args) {

  $qry = "SELECT `ImageDesktopSource`, `ImageMobileSource`, `ImageAltText`, `ConcertTitle`, `ConcertDate`, `ConcertDateCode`, `ConcertLengthInMinutes`, `ConcertLocation`, `ConcertDescription`, `ConcertInviteImageSource`, `ConcertLocationMapUrl`, `ConcertFacebookEventUrl` FROM `upcoming_concerts`";
  $rs = $this->db->query($qry);


  while ($row = $rs->fetch_assoc()) {
    $upcomingConcerts[] = $row;
  }


  $json = json_encode($upcomingConcerts, JSON_NUMERIC_CHECK);
  echo $json;
});


$app->get('/gallery', function (Request $request, Response $response, array $args) {

  $qry = "SELECT g.FolderId, g.FolderTitle, g.FolderDateCode, g.PhotographerName, i.ImageSource, i.IsVertical FROM images i INNER JOIN gallery_folders g ON i.FolderId = g.FolderId";
  $rs = $this->db->query($qry);


  while ($row = $rs->fetch_assoc()) {
    $gallery[] = $row;
  }


  $json = json_encode($gallery, JSON_NUMERIC_CHECK);
  echo $json;
});
