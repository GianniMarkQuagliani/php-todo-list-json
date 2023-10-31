// app.js
new Vue({
    el: '#app',
    data: {

    },
    methods: {
        
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