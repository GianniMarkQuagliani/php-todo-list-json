# php-todo-list-json

# spiegazione:

1) index.html:
Questo è il tuo file HTML principale che definisce la struttura dell'interfaccia utente. La pagina contiene una casella di input per l'aggiunta di nuove attività, pulsanti per aggiungere, contrassegnare come "Fatto" o eliminare attività. Inoltre, visualizza l'elenco delle attività, consentendo agli utenti di contrassegnarle come "Fatte" o eliminarle. La classe CSS completed è utilizzata per barrare il testo delle attività completate.



2) style.css: 
Questo file CSS definisce lo stile delle attività contrassegnate come "Fatte". Quando un'attività è contrassegnata come "Fatta", il suo testo viene barrato utilizzando la proprietà text-decoration.



3) api.php: 
Questo file gestisce le richieste HTTP tra il frontend (applicazione Vue.js) e il backend (server PHP) per la persistenza dei dati delle attività.

- GET Request: Quando viene effettuata una richiesta GET al server, il file legge i dati da un file JSON (tasks.json) e li restituisce come risposta in formato JSON al client.

- POST Request: Quando viene effettuata una richiesta POST al server, il file riceve i dati inviati dal client, che sono un array di attività. Quindi, sovrascrive i dati nel file JSON con i nuovi dati ricevuti.