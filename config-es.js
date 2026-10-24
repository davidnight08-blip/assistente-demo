// ====== ÚNICO ARCHIVO A EDITAR POR CLIENTE ======
window.BOT_CONFIG = {
  lingua: "es",
  emailTitolare: "reservas@ejemplo.es",
  leadWebhook: "",
  orarioBreve: "Mar–Dom · 13:00–16:00 · 20:00–23:30",
  testi: {
    cta: "Reservar mesa", ctaMsg: "Quiero reservar", placeholder: "Escribe tu pregunta...",
    hOrario: "🕒 Horario", hDove: "📍 Dónde", hAss: "💬 Asistente 24h",
    pAss: "Resuelve dudas y gestiona reservas al instante, incluso de madrugada.",
    footer: "Demo de asistente virtual",
    ciao: "¡Hola! ¿En qué puedo ayudarte? Puedo informarte de horario, carta, precios o hacer una reserva.",
    grazie: "¡A ti! Si necesitas algo más, aquí estoy 😊",
    nonSo: t => `No estoy segura de eso 🤔. Puedes llamarnos al ${t} o escribirnos por WhatsApp. ¿Te ayudo con horario, carta o una reserva?`,
    passi: [["nome","¡Genial! ¿A nombre de quién hago la reserva?"],["persone","¿Para cuántas personas?"],["data","¿Qué día y a qué hora? (ej.: sábado 21:00)"],["contatto","Por último, ¿un teléfono o email de contacto?"]],
    fine: l => `✅ ¡Listo, ${l.nome}! Solicitud registrada: ${l.persone} pers., ${l.data}. Pulsa el botón de abajo para enviarla al restaurante por WhatsApp.`,
    btnWa: "📲 Enviar por WhatsApp", btnMail: "✉️ Enviar por email",
    riepilogo: (l,n) => `Nueva reserva desde la web – ${n}\nNombre: ${l.nome}\nPersonas: ${l.persone}\nFecha/hora: ${l.data}\nContacto: ${l.contatto}`,
    oggetto: n => `Reserva de mesa – ${n}`,
    reRe: "reserv|mesa|booking|cita"
  },
  negocio: "Trattoria La Nonna",
  eslogan: "Cocina italiana casera en el corazón de tu barrio",
  logo: "🍝",                 // emoji o URL de imagen (p.ej. "logo.png")
  colores: { primario: "#b23a2b", secundario: "#2f5d3a", fondo: "#fff8f0" },
  telefono: "+34 600 123 456",
  whatsapp: "34600123456",
  direccion: "Calle Mayor 12, Madrid",
  nombreBot: "Giulia",
  saludo: "¡Ciao! Soy Giulia, la asistente de Trattoria La Nonna 🍝. Pregúntame por horarios, carta, precios o reserva una mesa.",
  sugerencias: ["¿Qué horario tenéis?", "Ver la carta", "Quiero reservar", "¿Tenéis opciones sin gluten?"],
  // Opcional: endpoint compatible con OpenAI (p.ej. tu propio proxy /api/chat). Vacío = modo sin IA de pago.
  llmEndpoint: "",
  faqs: [
    { claves: ["horario","hora","abierto","abris","abrís","cerrado","cuando","cuándo","domingo","lunes"],
      respuesta: "Abrimos de martes a domingo: comidas 13:00–16:00 y cenas 20:00–23:30. Los lunes cerramos." },
    { claves: ["carta","menu","menú","platos","comida","pizza","pasta","comer"],
      respuesta: "Nuestros favoritos: 🍕 Pizza Margherita 11 €, 🍝 Carbonara auténtica 13 €, 🥩 Lasaña de la nonna 14 €, 🍰 Tiramisú casero 6 €. Menú del día (mar–vie) 14,90 € con primero, segundo, postre y bebida." },
    { claves: ["menu del dia","menú del día","menu de mediodia","menú de mediodía"],
      respuesta: "El menú del día (martes a viernes, mediodía) cuesta 14,90 €: primero, segundo, postre y bebida." },
    { claves: ["precio","cuesta","cuanto","cuánto","barato","caro","por persona"],
      respuesta: "El precio medio es de 20–25 € por persona. El menú del día (martes a viernes, mediodía) cuesta 14,90 €." },
    { claves: ["gluten","celiaco","celíaco","vegano","vegetariano","alergia","alérgeno","lactosa"],
      respuesta: "Sí: tenemos pasta y base de pizza sin gluten (+2 €) y varias opciones vegetarianas y veganas. Avísanos de cualquier alergia al reservar." },
    { claves: ["donde","dónde","direccion","dirección","ubicacion","ubicación","llegar","parking","aparcar"],
      respuesta: "Estamos en Calle Mayor 12, Madrid (metro Sol, 3 min). Hay parking público a 100 m." },
    { claves: ["domicilio","delivery","llevar","glovo","envio","envío","recoger"],
      respuesta: "Puedes pedir para recoger llamando al +34 600 123 456, y también estamos en Glovo y Uber Eats." },
    { claves: ["grupo","cumpleaños","evento","celebracion","celebración","empresa"],
      respuesta: "¡Nos encantan las celebraciones! Para grupos de más de 10 tenemos menús desde 25 €/persona. Déjame tus datos y te contactamos." },
    { claves: ["pago","tarjeta","bizum","efectivo"],
      respuesta: "Aceptamos tarjeta, efectivo y Bizum." }
  ]
};
