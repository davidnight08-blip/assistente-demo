// ====== UNICO FILE DA MODIFICARE PER CLIENTE ======
window.BOT_CONFIG = {
  lingua: "it",
  negocio: "Trattoria Il Tortellino d'Oro",
  eslogan: "Cucina emiliana fatta a mano, come a casa della nonna",
  logo: "🥟",
  colores: { primario: "#8c2d19", secundario: "#3e5c2f", fondo: "#fffaf2" },
  telefono: "+39 059 000 0000",          // DEMO: numero fittizio
  whatsapp: "390000000000",              // DEMO: numero del titolare (riceve le prenotazioni)
  emailTitolare: "prenotazioni@esempio.it", // fallback mailto
  leadWebhook: "",                       // opzionale: Formspree / Make / Google Apps Script
  direccion: "Via Esempio 1, Castelfranco Emilia (MO)",
  nombreBot: "Giulia",
  orarioBreve: "Mar–Dom · 12:00–14:30 · 19:30–22:30",
  saludo: "Ciao! Sono Giulia, l'assistente della Trattoria Il Tortellino d'Oro 🥟. Chiedimi orari, menù, prezzi oppure prenota un tavolo.",
  sugerencias: ["Che orari fate?", "Vedere il menù", "Vorrei prenotare", "Avete piatti senza glutine?"],
  llmEndpoint: "",
  testi: {
    cta: "Prenota un tavolo", ctaMsg: "Vorrei prenotare", placeholder: "Scrivi la tua domanda...",
    hOrario: "🕒 Orari", hDove: "📍 Dove", hAss: "💬 Assistente 24h",
    pAss: "Risponde ai clienti e raccoglie prenotazioni subito, anche di notte.",
    footer: "Demo di assistente virtuale",
    ciao: "Ciao! Come posso aiutarti? Posso darti info su orari, menù, prezzi o fare una prenotazione.",
    grazie: "Grazie a te! Se ti serve altro sono qui 😊",
    nonSo: t => `Su questo non sono sicura 🤔. Puoi chiamarci al ${t} o scriverci su WhatsApp. Ti aiuto con orari, menù o una prenotazione?`,
    passi: [["nome","Perfetto! A che nome faccio la prenotazione?"],["persone","Per quante persone?"],["data","Che giorno e a che ora? (es.: sabato 20:30)"],["contatto","Infine, un numero di telefono o un'email per conferma?"]],
    fine: l => `✅ Grazie ${l.nome}! Richiesta registrata: ${l.persone} persone, ${l.data}. Tocca il pulsante qui sotto per inviarla al ristorante su WhatsApp e ricevere conferma.`,
    btnWa: "📲 Invia su WhatsApp", btnMail: "✉️ Invia via email",
    riepilogo: (l,n) => `Nuova prenotazione da sito – ${n}\nNome: ${l.nome}\nPersone: ${l.persone}\nData/ora: ${l.data}\nContatto: ${l.contatto}`,
    oggetto: n => `Prenotazione tavolo – ${n}`,
    reRe: "prenot|tavol|riserv|book|appuntament"
  },
  faqs: [
    { id:"orari", claves:["orari","orario","aperti","aperto","apertura","chiuso","chiusi","chiusura","quando","lunedi","domenica","a che ora","fino a che ora","giorno di riposo","riposo"],
      respuesta:"Siamo aperti da martedì a domenica: pranzo 12:00–14:30 e cena 19:30–22:30. Lunedì giorno di riposo." },
    { id:"menu", claves:["menu","carta","piatti","~mangiare","tortellini","tagliatelle","lasagne","tigelle","crescentine","gnocco fritto","specialita","~cosa avete","primi","secondi","dolci"],
      respuesta:"I nostri cavalli di battaglia: 🥟 Tortellini in brodo 14 €, 🍝 Tagliatelle al ragù 12 €, 🧀 Tortelloni burro e salvia 12 €, 🍖 Bollito misto 16 €, 🫓 Tigelle e gnocco fritto con salumi 15 €, 🍰 Zuppa inglese 6 €." },
    { id:"menugiorno", claves:["menu del giorno","menu fisso","pranzo di lavoro","menu pranzo","piatto del giorno","pranzo veloce","business lunch","menu lavoro"],
      respuesta:"Il menù del giorno (pranzo, mar–ven) costa 14 €: primo, secondo con contorno, acqua e caffè." },
    { id:"prezzi", claves:["prezzo","prezzi","quanto costa","quanto si spende","costo","costa","caro","economico","spesa media","a persona","conto","quanto viene","quanto si paga"],
      respuesta:"Alla carta si spendono in media 25–30 € a persona. A pranzo (mar–ven) c'è il menù del giorno a 14 €." },
    { id:"allergie", claves:["glutine","celiaco","celiachia","vegano","vegana","vegetariano","vegetariana","allergia","allergie","allergico","intollerante","lattosio","senza"],
      respuesta:"Sì: abbiamo pasta senza glutine (+2 €) e piatti vegetariani. Per allergie o intolleranze avvisaci in prenotazione, la cucina si organizza volentieri." },
    { id:"dove", claves:["dove","indirizzo","posizione","come arrivo","arrivare","parcheggio","parcheggiare","mappa","siete a","raggiungo","raggiungere","raggiungervi"],
      respuesta:"Siamo in Via Esempio 1, Castelfranco Emilia (MO). Parcheggio gratuito proprio davanti." },
    { id:"asporto", claves:["asporto","domicilio","consegna","delivery","portar via","da portare","ritiro","just eat","glovo","deliveroo"],
      respuesta:"Facciamo asporto: ordina chiamando o su WhatsApp e ritira in trattoria. Consegna a domicilio a Castelfranco il venerdì e sabato sera." },
    { id:"gruppi", claves:["gruppo","gruppi","compleanno","festa","evento","cena aziendale","cene aziendali","aziendale","battesimo","comunione","cresima","laurea","anniversario","persone tante"],
      respuesta:"Organizziamo volentieri compleanni, comunioni, lauree e cene aziendali: menù per gruppi da 30 € a persona. Lasciami i tuoi dati e ti ricontattiamo." },
    { id:"pagamento", claves:["pagare","pagamento","carta di credito","bancomat","contanti","satispay","pos","ticket","buoni pasto"],
      respuesta:"Accettiamo contanti, bancomat, carte di credito, Satispay e buoni pasto." },
    { id:"animali", claves:["cane","cani","animali","bambini","seggiolone","passeggino","disabili","accessibile"],
      respuesta:"Cani di piccola taglia benvenuti, abbiamo seggioloni per i bimbi e il locale è accessibile in carrozzina." }
  ]
};
