// =================================================================================
// ARCHIVO DE CONTENIDO EDITABLE (datos_editables.js)
// ⚠️ EL CLIENTE SOLO DEBE MODIFICAR LOS VALORES ENTRE COMILLAS (") ⚠️
// ⚠️ PUEDE AGREGAR O ELIMINAR BLOQUES COMPLETOS DE SERVICIO Y TARIFA ⚠️
// =================================================================================


// 1. TEXTO PRINCIPAL DE INICIO
const titulo_inicio = "BIENVENIDOS A LA ZONA GAMER";


// 2. SERVICIOS Y SUS VALORES POR DEFECTO
// El ID debe ser ÚNICO y coincidir con su tarifa respectiva.
const datos_servicios = [
  
    { 
        id: 'xbox360', 
        nombre: 'Xbox 360', 
        emoji: '🕹️', 
        descripcion: 'La leyenda sigue viva. Clásicos y diversión retro garantizada.' 
    },
    { 
        id: 'ps5', 
        nombre: 'PlayStation 5', 
        emoji: '🎮', 
        descripcion: 'Máximo rendimiento, 4K y la velocidad de la nueva generación.' 
    },
    { 
        id: 'simulador', 
        nombre: 'Simulador', 
        emoji: '🏎️', 
        descripcion: 'Siente la adrenalina. Experiencia de carreras y vuelo inmersiva.' 
    },
    { 
        id: 'pcgamer', 
        nombre: 'PC Gamer', 
        emoji: '💻', 
        descripcion: 'Potencia sin límites. Los mejores títulos con gráficos ultra.' 
    },
   
    // <--- ¡EL CLIENTE PUEDE AÑADIR MÁS SERVICIOS AQUÍ! ---> 
];


// 3. TARIFAS Y SUS VALORES POR DEFECTO
// DEBE HABER UNA TARIFA POR CADA SERVICIO AGREGADO ARRIBA (mismo 'id')
const datos_tarifas = [
    
    { 
        id: 'xbox360', 
        nombre: 'Xbox 360', 
        hora: 'COP 3.000', 
        dia: 'COP 25.000' 
    },
    { 
        id: 'ps5', 
        nombre: 'PlayStation 5', 
        hora: 'COP 7.000', 
        dia: 'COP 55.000' 
    },
    { 
        id: 'simulador', 
        nombre: 'Simulador', 
        hora: 'COP 12.000', 
        dia: 'COP 90.000' 
    },
    { 
        id: 'pcgamer', 
        nombre: 'PC Gamer', 
        hora: 'COP 8.000', 
        dia: 'COP 60.000' 
    },
 

    
        

  
    // <--- ¡DEBE AÑADIR LAS TARIFAS CORRESPONDIENTES AQUÍ! --->
];


// 4. CÓDIGO QR Y RESEÑAS DE EJEMPLO
const qr_whatsapp_link = "img/qr.png.png"; // Enlace del chat de WhatsApp
const reseña_1 = { 
    texto: "¡Excelente lugar! La PS5 es increíblemente rápida. Volveremos pronto.", 
    estrellas: '⭐ 5 estrellas' 
};
const reseña_2 = { 
    texto: "Probé el simulador de carreras y fue muy realista. Gran experiencia.", 
    estrellas: '⭐ 4 estrellas' 
};