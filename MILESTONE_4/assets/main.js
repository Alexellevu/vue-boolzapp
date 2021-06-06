//Milestone 1:
//Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
//Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

const app = new Vue({
    el:'#app',

    data: {

        utente_attivo:0,
        nuovo_messaggio:'',
         contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            }
        ],
        nuovo_messaggio:'' ,
        ricercachat:''
            
    }, 
    
    methods:{
        
        cambia_utente(index){
            return this.utente_attivo = index;
         },
       
         aggiungi_messaggio(){

            console.log(this.nuovo_messaggio);

             this.contacts[this.utente_attivo].messages.push({
                date: new Date().toLocaleString(),
                text :this.nuovo_messaggio,
                status: 'sent'
              } );
            this.nuovo_messaggio =''; 

            this.risposta();
            
        },
        risposta(){
            setTimeout(()=>{
                this.contacts[this.utente_attivo].messages.push({
                    date: new Date().toLocaleString(),
                    text :'ok',
                    status: 'recived'
                  });
            }, 1000)
        },

        ricercaContatto(ricercachat){
            
            const ricercaMinuscolo = ricercachat.toLowerCase();
            console.log(ricercaMinuscolo);
            this.contacts.forEach((contact) => {
                const nomeMinuscolo = contact.name.toLowerCase();
                if(nomeMinuscolo.includes(ricercaMinuscolo)){
                    contact.visible = true;
                }else{
                    contact.visible = false;
                    }
                

                /* console.log(nomeMinuscolo.includes(ricercaMinuscolo), contact.name); */
            })
        }
       
    }

}) 