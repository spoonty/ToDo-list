<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    exit(0);
}

require 'headers.php';
require 'db_connect.php';
require 'functions.php';

$method = $_SERVER['REQUEST_METHOD'];

$formData = getFormData($method);

$url = (isset($_GET['q'])) ? $_GET['q'] : '';
$url = rtrim($url, '/');
$urls = explode('/', $url);

$router = $urls[0];
$urlData = array_slice($urls, 1);

if (file_exists(realpath(dirname(__FILE__)).'/routers/'.$router.'.php')) {
    include_once 'routers/' . $router . '.php';
    route($method, $urlData, $formData);
}
else {
    setStatus('404', "Путь '$router' не найден");
}

mysqli_close($connect);
return;
