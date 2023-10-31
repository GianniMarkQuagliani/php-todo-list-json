<?php
$data = file_get_contents('tasks.json');
$tasks = json_decode($data, true);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Invia i dati al client
    header('Content-Type: application/json');
    echo json_encode(['tasks' => $tasks]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ricevi i dati dal client
    $postData = json_decode(file_get_contents('php://input'), true);
    if (isset($postData['tasks'])) {
        $tasks = $postData['tasks'];
        // Salva i dati nel file JSON
        file_put_contents('tasks.json', json_encode($tasks));
        echo 'Dati salvati con successo';
    } else {
        echo 'Dati non validi';
    }
}
?>
