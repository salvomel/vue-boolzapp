// Milestone 4:
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                },
            ],
            activeChat: 0,
            newMessage: '',
            filterText: '',
        },
        methods: {
            // Chat attiva
            showChat(index) {
                this.activeChat = index;
            },

            // Push nuovo messaggio da input bar
            pushNewMessage()  {

                // if per far sì che non vengano aggiunte righe senza testo
                // trim per togliere gli spazi prima e/o dopo del testo 
                const newMessageTrim = this.newMessage.trim();
                if(newMessageTrim.length > 0) {

                    this.contacts[this.activeChat].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent'
                    });
                    this.newMessage='';
                }
                
                // Risposta automatica dopo 1 secondo
                setTimeout (() => {

                    // Cambio text e status
                    this.contacts[this.activeChat].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'Ok!',
                        status: 'received'
                    });
                }, 1000);
            },
            // Filtro per ricerca contatti
            searchFilter: function() {
                this.contacts.forEach((contact) => {

                    // If per vedere filterText è incluso in contact.name
                    // toLowerCase per portare tutto a minuscolo
                    if(contact.name.toLowerCase().includes(this.filterText.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            }
        }
    }
);