new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [],
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
        markTaskDone(index) {
            // Cambia lo stato del task
            this.tasks[index].completed = !this.tasks[index].completed;

            // Salva i dati
            this.saveTasks();
            // Visualizza il messaggio di conferma
            console.log("Task contrassegnato come 'Fatto':", this.tasks[index]);
        },
        saveTasks() {
            // Salva i dati
            axios.post('api.php', { tasks: this.tasks })
                .then(response => {
                    // Gestisce la risposta se necessario
                    console.log("Dati salvati con successo:", response.data);
                })
                .catch(error => {
                    // Gestisce gli errori se necessario
                    console.error("Errore nel salvataggio dei dati:", error);
                });
        },
        deleteTask(index) {
            if (this.tasks[index].completed) {
                // Elimina il task
                this.tasks.splice(index, 1);

                // Salva i dati
                this.saveTasks();
                // Visualizza il messaggio di conferma
                console.log("Task eliminato:", this.tasks);
            } else {
                // Visualizza l'errore
                alert("Errore: Segna il task come 'Fatto' prima di eliminarlo.");
                // Visualizza il messaggio di conferma
                console.log("Errore: Impossibile eliminare il task non contrassegnato.");
            }
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