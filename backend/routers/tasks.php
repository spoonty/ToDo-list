<?php

function route($method, $urlData, $formData) {  
    global $connect;
    
    switch ($method) {
        case 'GET':
            if (!sizeof($urlData)) getTasks($connect);
            else setStatus('404', 'Путь отсутствует');
            break;
        case 'POST':
            if (!sizeof($urlData)) addTask($connect, $formData);
            else if (sizeof($urlData) == 2 && $urlData[1] == 'completed') markAsCompleted($connect, $urlData[0]);
            else setStatus('404', 'Путь отсутствует');
            break;
        case 'DELETE':
            if (sizeof($urlData) == 1) deleteTask($connect, $urlData[0]);
            else setStatus('404', 'Путь отсутствует');
            break;
        default:
            setStatus('403', "Вы можете отсылать только GET, POST и DELETE запросы для 'tasks'");
    }

    return;
}

function getTasks($connect) {
    $tasks = $connect->query("SELECT * FROM tasks");
    $tasksList = [];

    while ($task = mysqli_fetch_assoc($tasks)) {
        $tasksList[] = [
            'id' => (int)$task['id'],
            'name' => $task['name'],
            'completed' => (int)$task['completed']
        ];
    }

    echo json_encode($tasksList);
}

function getTask($connect, $id) {
    $task = $connect->query("SELECT * FROM tasks WHERE id = $id")->fetch_assoc();

    echo json_encode([
        'id' => (int)$task['id'],
        'name' => $task['name'],
        'completed' => (int)$task['completed']
    ]);
}

function addTask($connect, $formData) {
    $name = $formData->name;

    if (!empty($name)) {
        $connect->query("INSERT INTO tasks (name, completed) VALUES ('$name', 0)");
        getTask($connect, mysqli_insert_id($connect));
    }
    else {
        setStatus('403', 'Название не может быть пустым');
    }
}

function markAsCompleted($connect, $id) {
    $checkForExist = $connect->query("SELECT id FROM tasks WHERE id = $id")->fetch_assoc();

    if (!is_null($checkForExist)) {
        $connect->query("UPDATE tasks SET completed = 1 WHERE id = $id");
        setStatus('200', 'Задача отмечена завершенной');
    }
    else {
        setStatus('404', 'Задачи с id = '.$id.' не найдено');
    }
}

function deleteTask($connect, $id) {
    $checkForExist = $connect->query("SELECT id FROM tasks WHERE id = $id")->fetch_assoc();

    if (!is_null($checkForExist)) {
        $connect->query("DELETE FROM tasks WHERE id = $id");
        setStatus('200', 'Задача удалена');
    }
    else {
        setStatus('404', 'Задачи с id = '.$id.' не найдено');
    }
}