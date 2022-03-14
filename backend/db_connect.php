<?php

global $connect;
$connect = mysqli_connect('localhost', 'root', '', 'todo');

if (!$connect) {
    setStatus('500', 'Ошибка подключения базы данных: '.mysqli_connect_error());
    exit;
}