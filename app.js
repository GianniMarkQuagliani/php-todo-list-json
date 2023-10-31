// app.js
new Vue({
    el: '#app',
    data: {

    },
    methods: {
        addTask() {
            // Aggiungi un nuovo task
            if (this.newTask.trim() !== '') {
                // Aggiungi il nuovo task
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';

                // Salva i dati
                this.saveTasks();
                // Visualizza il messaggio di conferma
                console.log("Aggiunto un nuovo task:", this.tasks);
            }
        },
        toggleTask(index, completed) {
            // Cambia lo stato del task
            this.tasks[index].completed = completed;

            // Salva i dati
            this.saveTasks();
            // Visualizza il messaggio di conferma
            console.log("Stato del task cambiato:", this.tasks[index]);
        },
    },
    mounted() {
        // Carica i dati da api.php
        axios.get('api.php')
            .then(response => {
                // Se ci sono dati da visualizzare
                if (response.data.tasks) {
                    // Visualizza i dati
                    this.tasks = response.data.tasks;
                    // Visualizza il messaggio di conferma
                    console.log("Dati caricati con successo:", this.tasks);
                }
            })
            // Gestisci gli errori se necessario
            .catch(error => {
                // Visualizza l'errore
                console.error("Errore nel caricamento dei dati:", error);
            });
    },
});