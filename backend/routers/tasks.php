<?php

function route($method, $urlData, $formData) {  
    global $connect;

    switch ($method) {
        case 'GET':
            if (!sizeof($urlData)) getTasks($connect);
            else satStatus('404', "Отсутствует путь 'tasks/$urlData[0]'");
            break;
        case 'POST':
            if (!sizeof($urlData)) addTask($connect, $formData);
            else satStatus('404', "Отсутствует путь 'tasks/$urlData[0]'");
            break;
        default:
            setStatus('403', "Вы можете отсылать только GET и POST запросы для 'tasks'");
    }

    return;
}

function getTasks($connect) {
    $tasks = $connect->query("SELECT * FROM tasks");
    $tasksList = [];

    while ($task = mysqli_fetch_assoc($tasks)) {
        $tasksList[] = [
            'id' => $task['id'],
            'name' => $task['name'],
            'completed' => $task['completed']
        ];
    }

    echo json_encode($tasksList);
}

function getTask($connect, $id) {
    $task = $connect->query("SELECT * FROM tasks WHERE id = $id")->fetch_assoc();

    echo json_encode([
        'id' => $task['id'],
        'name' => $task['name'],
        'completed' => $task['completed']
    ]);
}

function addTask($connect, $formData) {
    $name = $formData->name;

    if (!empty($name)) {
        $connect->query("INSERT INTO tasks (name, completed) VALUES ('$name', 0)");
        getTask($connect, mysqli_insert_id($connect));
    }
    else {
        setStatus('403', "Название не может быть пустым");
    }
}