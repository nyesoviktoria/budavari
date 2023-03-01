<?php

require_once '.././config.php';

return [
  'settings' => [
    // set to true in production
    'displayErrorDetails' => true,
    'addContentLengthHeader' => false,

    'db' => [
      'host' => DB_HOST,
      'user' => DB_USERNAME,
      'password' => DB_PASSWORD,
      'database' => DB_NAME,
    ]

  ],
];
