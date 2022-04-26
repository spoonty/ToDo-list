<?php

global $connect;
$connect = mysqli_connect('127.0.0.1', 'root', '', 'todo');

if (!$connect) {
    setStatus('500', 'Ошибка подключения базы данных: '.mysqli_connect_error());
    exit;
}