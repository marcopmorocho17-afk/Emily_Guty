let fallosConsecutivos = 0;

function mostrarOcultarCarta() {
    const panel = document.getElementById('carta-seccion');
    panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
}

function evaluarFraseCompleta(e) {
    if (e.key === 'Enter') {
        const input = document.getElementById('password-letter-input');
        const textoIngresado = input.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Contraseña objetivo procesada limpia
        const claveObjetivo = "siempre estare contigo";

        if (textoIngresado === claveObjetivo) {
            // ÉXITO: Revela la carta
            input.style.display = 'none';
            document.getElementById('contador-intentos').style.display = 'none';
            document.querySelector('#carta-seccion p').textContent = "🔓 ¡Contraseña correcta!";
            document.getElementById('carta-contenido').style.display = 'block';
            fallosConsecutivos = 0;
        } else if (textoIngresado !== "") {
            // ERROR: Registra el intento fallido
            fallosConsecutivos++;
            document.getElementById('contador-intentos').textContent = `Errores seguidos: ${fallosConsecutivos} / 3`;
            input.value = "";

            if (fallosConsecutivos >= 3) {
                alert("❌ ¡Has cometido 3 errores seguidos! Inténtalo de nuevo desde el principio. 🌸");
                fallosConsecutivos = 0;
                document.getElementById('contador-intentos').textContent = "Errores seguidos: 0 / 3";
            }
        }
    }
}
function verificarClave() {
    const input = document.getElementById('pass-input').value;

    if (input === "emily10") {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Contraseña incorrecta 🌸");
    }
}

function efectoMagico() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const item = document.createElement('div');
            item.style.position = 'fixed';
            item.style.left = Math.random() * 100 + 'vw';
            item.style.top = Math.random() * 100 + 'vh';
            item.style.fontSize = '24px';
            item.innerHTML = '🦋';
            item.style.zIndex = '1000';
            item.style.transition = 'all 1.5s ease-out';

            document.body.appendChild(item);

            setTimeout(() => {
                item.style.transform = 'translateY(-100px)';
                item.style.opacity = '0';
            }, 50);

            setTimeout(() => item.remove(), 1500);
        }, i * 50);
    }
}
function controlarMusica() {
    const musica = document.getElementById('bg-music');
    const boton = document.getElementById('music-btn');
    if (musica.paused) {
        musica.play().catch(err => console.log("Permiso denegado por el navegador."));
        boton.innerHTML = "⏸️ Pause";
    } else {
        musica.pause();
        boton.innerHTML = "▶️ Play";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lluvia-estrellas");
    const numeroDeEstrellas = 40; // Ajusta este número si quieres más o menos estrellas en pantalla

    for (let i = 0; i < numeroDeEstrellas; i++) {
        crearEstrella(contenedor);
    }
});

function crearEstrella(contenedor) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella-cayendo");

    // Parámetros aleatorios para que se vea natural
    const tamaño = Math.random() * 3 + 2; // Tamaños entre 2px y 5px
    const posicionX = Math.random() * 100; // Posición horizontal en la pantalla (0% a 100%)
    const duracion = Math.random() * 4 + 3; // Velocidad de caída entre 3 y 7 segundos
    const retraso = Math.random() * 5; // Retraso inicial para que no caigan todas juntas al cargar

    // Aplicar los estilos dinámicos
    estrella.style.width = `${tamaño}px`;
    estrella.style.height = `${tamaño}px`;
    estrella.style.left = `${posicionX}vw`;
    estrella.style.animationDuration = `${duracion}s`;
    estrella.style.animationDelay = `${retraso}s`;

    contenedor.appendChild(estrella);
}
document.addEventListener("DOMContentLoaded", () => {
    // 1. Definimos los mensajes para cada botón en orden
    const mensajes = {
    "🌸 Amable y Dulce": "Eres una chica con un bonito corazon por favor no lo cambies nunca y no dejes que nadie corrompa ese corazon que solo pocas personas pueden tenerlo",
    "💫 Sociable": "Eres muyyyyyyy sociable quien diria que por una cebolla conoceria a una persona como tu de ser asi picaba cebolla mas seguido para conocer a personas como tu que brillas donde sea que vallas",
    "🛡️ Valiente": "Osea tannnn valiente no eres por que no te gusta el terror xd jsjsj pero si a la vez por que no dejas que la vida por mas que te aplaste o te ponga obstaculos te rindas tu sigues incluso animando a las personas eres wuao",
    "✨ Sonrisa Bonita": "Y sin olvidar la sonrisa que logra calmar el corazon de aquellos que se sienten mal y en la verga",

    "🧐Cosas que se sobre ti": `Haber por donde iniciooooooo... vamos enumerando cada cosa jsjs:

        1. Eres increible.
        2. Te gusta el voley.
        3. No te gusta mucho las matematicas.
        4. Casi te quedas en dibujo sjjss
        5. te gustan los perros
        6. Ayer me entere que te gusta la musica de enredados
        7. Escuchas las musicas del Soy Luna
        8. Vas a ir a ciencias experimentales
        9. Eres muy sencible de emociones jsjs
        10. Te gusta pintar
        11. Te gusta bailar
        12. Antes  te gustaba hacer videos contando algunas cosas para subirlas a insta
        13. Te gustan las fiestas
        14. Eres expectacular
        15. Hasta alli por que no quiero decir cosas mas alla solo las superficiales 😖😖`, // 🔴 Agregamos esta coma para separar

    /* 🔴 NUEVO: Tu nuevo mensaje nostálgico conectado directamente al botón de los días */
    "🥲Contador de dias": "Quiero seguir riendo en todo este tiempo que me queda en el colegio aunque aun nos seguiremos viendo despues de graduarme yo se que no sera lo mismo pondria una musica triste como la que ahora estoy escuchando pero no te quiero hacer sentir mal jsjsj asi que prefiero reirme de cada momento que me queda contigo y con todos a los que quiero"
};

    
    const botones = document.querySelectorAll(".trait");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Buscamos si ya hay un mensaje abierto debajo de ESTE botón
            const mensajeExistente = boton.nextElementSibling;

            // Si ya existe y es un mensaje, lo cerramos (alternar)
            if (mensajeExistente && mensajeExistente.classList.contains("trait-message")) {
                mensajeExistente.remove();
                return;
            }

            // Opcional: Si quieres cerrar los otros mensajes abiertos antes de abrir este, descomenta la siguiente línea:
            // document.querySelectorAll(".trait-message").forEach(m => m.remove());

            // 2. Creamos el nuevo contenedor para el texto
            const cajaMensaje = document.createElement("div");
            cajaMensaje.classList.add("trait-message");

            // Obtenemos el texto limpio del botón (sin espacios extras)
            const textoBoton = boton.textContent.trim();
            cajaMensaje.textContent = mensajes[textoBoton] || "Queria sacar solo imagenes de instagram pero decidi mejor que no y mejor tomarlas yo mismo o poner las que ya tengo jsjs";

            // 3. Insertamos el mensaje justo debajo del botón presionado
            boton.parentNode.insertBefore(cajaMensaje, boton.nextSibling);
        });
    });
});
// Variable global para controlar la página actual
let indiceHojaActual = 0;

document.addEventListener("DOMContentLoaded", () => {
    const btnAlbum = document.getElementById("btn-album");
    const modal = document.getElementById("modal-cuaderno");

    if (btnAlbum && modal) {
        btnAlbum.addEventListener("click", () => {
            // Reiniciar a la primera hoja siempre que se abra el cuaderno
            indiceHojaActual = 0;
            actualizarVisibilidadHojas();
            modal.style.display = "flex";
        });
    }
});

function cambiarHoja(direccion) {
    const hojas = document.querySelectorAll(".hoja-libro");

    // Calculamos el siguiente índice sumando o restando
    let nuevoIndice = indiceHojaActual + direccion;

    // Verificamos límites para que no se salga de la cantidad de hojas disponibles
    if (nuevoIndice >= 0 && nuevoIndice < hojas.length) {
        indiceHojaActual = nuevoIndice;
        actualizarVisibilidadHojas();
    }
}

function actualizarVisibilidadHojas() {
    const hojas = document.querySelectorAll(".hoja-libro");

    hojas.forEach((hoja, index) => {
        if (index === indiceHojaActual) {
            hoja.classList.add("activa");
        } else {
            hoja.classList.remove("activa");
        }
    });
}

function cerrarAlbum() {
    const modal = document.getElementById("modal-cuaderno");
    if (modal) {
        modal.style.display = "none";
    }
}

function ampliarImagen(elementoImg, frase) {
    const lightbox = document.getElementById("modal-foto-grande");
    const fotoAmpliada = document.getElementById("foto-ampliada");
    const textoFoto = document.getElementById("texto-foto-ampliada");

    if (lightbox && fotoAmpliada && textoFoto) {
        fotoAmpliada.src = elementoImg.src; // Pasa la ruta de la foto clickeada
        textoFoto.textContent = frase;       // Muestra el texto asignado
        lightbox.style.display = "flex";     // Despliega el visor flotante
    }
}

function cerrarFotoGrande() {
    const lightbox = document.getElementById("modal-foto-grande");
    if (lightbox) {
        lightbox.style.display = "none";     // Oculta el visor
    }
}

function reproducirPausar() {
    const cancion = document.getElementById('musica-bendita');
    const botonClave = document.getElementById('btn-reproductor');
    
    if (cancion.paused) {
        cancion.play();
        botonClave.innerHTML = "⏸️ Pausar Música";
    } else {
        cancion.pause();
        botonClave.innerHTML = "▶️ Escuchar \"Bendita la luz\"";
    }
}

// Listado de frases sincronizadas por segundos (Ajusta los números si tu archivo inicia antes o después)
const lineasLetra = [
    { tiempo: 0, texto: "♪ (Introducción Musical) ♪" },
    { tiempo: 5, texto: "Bendito el lugar y el motivo de estar ahí... 🌸" },
    { tiempo: 13, texto: "Bendita la coincidencia." },
    { tiempo: 21, texto: "Bendito el reloj que nos puso puntual ahí... ⏱️" },
    { tiempo: 29, texto: "Bendita sea tu presencia." },
    { tiempo: 36, texto: "Bendito Dios por encontrarnos en el camino..." },
    { tiempo: 45, texto: "Y de quitarme esta soledad de mi destino. ✨" },
    { tiempo: 51, texto: "Bendita la luz... bendita la luz de tu mirada... 💫" },
    { tiempo: 60, texto: "Bendita la luz... bendita la luz de tu mirada desde el alma." },
    { tiempo: 86, texto: "Benditos ojos que me esquivaban... 😉" },
    { tiempo: 91, texto: "Simulaban desdén que me ignoraban..." },
    { tiempo: 95, texto: "Y de repente, sostienes la mirada... 👀" },
    { tiempo: 103, texto: "Bendito Dios por encontrarnos en el camino..." },
    { tiempo: 111, texto: "Y de quitarme esta soledad de mi destino. ❤️" },
    { tiempo: 118, texto: "Bendita la luz... bendita la luz de tu mirada... 💫" },
    { tiempo: 127, texto: "Bendita la luz... bendita la luz de tu mirada, oh..." }
];

// Función para alternar Play / Pause
function reproducirPausar() {
    const cancion = document.getElementById('musica-bendita');
    const boton = document.getElementById('btn-reproductor');
    
    if (cancion.paused) {
        cancion.play();
        boton.innerHTML = "⏸️ Pausar Música";
    } else {
        cancion.pause();
        boton.innerHTML = "▶️ Escuchar \"Bendita la luz\"";
    }
}

// Escuchar el avance de la canción en tiempo real
document.addEventListener("DOMContentLoaded", () => {
    const cancion = document.getElementById('musica-bendita');
    const cajaSubtitulos = document.getElementById('subtitulos-musica');

    if (cancion && cajaSubtitulos) {
        cancion.addEventListener('timeupdate', () => {
            const tiempoActual = cancion.currentTime;
            
            // Buscar la frase que corresponda al tiempo actual de reproducción
            let fraseActiva = "";
            for (let i = 0; i < lineasLetra.length; i++) {
                if (tiempoActual >= lineasLetra[i].tiempo) {
                    fraseActiva = lineasLetra[i].texto;
                }
            }
            
            // Si la frase cambió, actualizar el texto en pantalla con una transición suave
            if (cajaSubtitulos.textContent !== fraseActiva) {
                cajaSubtitulos.style.opacity = 0;
                setTimeout(() => {
                    cajaSubtitulos.textContent = fraseActiva;
                    cajaSubtitulos.style.opacity = 1;
                }, 150);
            }
        });
    }
});

let bucleRosaId = null;
let bucleBrilloId = null;

function iniciarAnimacionRosa() {
    const canvas = document.getElementById('canvas-rosa');
    const boton = document.getElementById('btn-flor-magica');
    
    if (!canvas || !boton) return;
    
    // Cancelamos animaciones previas para evitar tirones
    cancelAnimationFrame(bucleRosaId);
    cancelAnimationFrame(bucleBrilloId);
    
    // 🔴 Reseteamos estados de visibilidad en pantalla completa
    canvas.classList.remove('desaparecer');
    canvas.style.display = "block";
    canvas.style.opacity = "1";
    
    // Ocultamos el botón temporalmente con opacidad
    boton.style.opacity = "0";
    boton.style.pointerEvents = "none";
    
    const ctx = canvas.getContext('2d');
    
    // 🔴 Ajustamos las dimensiones exactas del lienzo a toda la pantalla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    
    let particulas = [];
    let numeroDePetalos = 6;  
    
    // 🔴 Ajuste dinámico: Escala la flor según el tamaño de la pantalla (más grande en PC, controlada en móvil)
    let tamanoDeFlor = Math.min(canvas.width, canvas.height) * 0.32;   
    let tiempoExposicion = 0; // Contador para mantener la rosa brillando antes de irse

    // Generación geométrica matemática de la rosa en pantalla completa
    for (let theta = 0; theta < Math.PI * 2; theta += 0.01) {
        let r = tamanoDeFlor * Math.cos(numeroDePetalos * theta);
        let destinoX = centroX + r * Math.cos(theta);
        let destinoY = centroY + r * Math.sin(theta);
        
        particulas.push({
            x: centroX,
            y: centroY,
            destX: destinoX,
            destY: destinoY,
            size: Math.random() * 1.5 + 1, // Tamaño de estrella optimizado para FPS altos
            progreso: 0,
            velocidad: Math.random() * 0.02 + 0.015 
        });
    }

    // Dibujo de estrellas en color rosa mágico optimizado para rendimiento masivo
    function renderizarEstrella(x, y, size) {
        ctx.fillStyle = '#ffafbd'; 
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#ff758c'; 
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; 
    }

    // Animación de apertura desde el centro hacia afuera
    function animarApertura() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let despliegueCompleto = true;
        
        particulas.forEach(p => {
            if (p.progreso < 1) {
                p.progreso += p.velocidad;
                despliegueCompleto = false;
            } else {
                p.progreso = 1;
            }
            
            p.x = centroX + (p.destX - centroX) * p.progreso;
            p.y = centroY + (p.destY - centroY) * p.progreso;
            
            let escalaParpadeo = p.size * (Math.sin(Date.now() * 0.01 + p.x) * 0.2 + 0.8);
            renderizarEstrella(p.x, p.y, escalaParpadeo);
        });
        
        if (!despliegueCompleto) {
            bucleRosaId = requestAnimationFrame(animarApertura);
        } else {
            cancelAnimationFrame(bucleRosaId);
            activarBrilloInfinito();
        }
    }
    
    // Mantiene la rosa armada parpadeando un momento y luego la desvanece
    function activarBrilloInfinito() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tiempoExposicion++;

        particulas.forEach(p => {
            let escalaParpadeo = p.size * (Math.sin(Date.now() * 0.004 + p.destX) * 0.35 + 0.75);
            renderizarEstrella(p.destX, p.destY, escalaParpadeo);
        });

        // Permite que la rosa brille completa durante unos 3 segundos (180 ciclos) antes de esfumarse
        if (tiempoExposicion < 180) {
            bucleBrilloId = requestAnimationFrame(activarBrilloInfinito);
        } else {
            cancelAnimationFrame(bucleBrilloId);
            
            // 🔴 FIN DE LA ANIMACIÓN: Desvanecemos el canvas con la clase CSS
            canvas.classList.add('desaparecer');
            
            setTimeout(() => {
                canvas.style.display = "none";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Retornamos el botón a su estado normal para volver a jugar
                boton.innerHTML = "🌹 Volver a florecer";
                boton.style.opacity = "1";
                boton.style.pointerEvents = "auto";
            }, 1000); // Espera a que la transición de opacidad termine
        }
    }
    
    animarApertura();
}



let bucleNombreId = null;

function iniciarAnimacionNombre() {
    const canvas = document.getElementById('canvas-nombre');
    const boton = document.getElementById('btn-nombre-magico');
    
    if (!canvas || !boton) return;
    
    cancelAnimationFrame(bucleNombreId);
    
    canvas.classList.remove('desaparecer');
    canvas.style.display = "block";
    canvas.style.opacity = "1";
    
    boton.style.opacity = "0";
    boton.style.pointerEvents = "none";
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    
    let particulas = [];
    let faseActual = 0; 
    let temporizadorFase = 0;

    function obtenerCoordenadasDeForma(tipo, contenido) {
        let tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        let tCtx = tempCanvas.getContext('2d');
        
        tCtx.fillStyle = "#ffffff";
        tCtx.textAlign = "center";
        tCtx.textBaseline = "middle";
        
        if (tipo === "texto") {
            tCtx.font = "bold 110px Arial"; 
            tCtx.fillText(contenido, tempCanvas.width / 2, tempCanvas.height / 2);
        } else if (tipo === "corazon") {
            tCtx.beginPath();
            let size = 18; 
            tCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2 - 20);
            for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
                let x = size * 16 * Math.pow(Math.sin(angle), 3);
                let y = -size * (13 * Math.cos(angle) - 5 * Math.cos(2*angle) - 2 * Math.cos(3*angle) - Math.cos(4*angle));
                if (angle === 0) tCtx.moveTo(x, y); else tCtx.lineTo(x, y);
            }
            tCtx.closePath();
            tCtx.fill();
        }
        
        let imgData = tCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;
        let puntosValidos = [];
        
        /* 🔴 OPTIMIZACIÓN 1: Saltamos de 9 en 9 píxeles (antes era de 6 en 6). 
           Esto reduce a la mitad la cantidad de estrellas en pantalla, aliviando al procesador. */
        for (let y = 0; y < tempCanvas.height; y += 9) {
            for (let x = 0; x < tempCanvas.width; x += 9) {
                let index = (y * tempCanvas.width + x) * 4;
                if (imgData[index] > 200) {
                    puntosValidos.push({ x: x, y: y });
                }
            }
        }
        return puntosValidos;
    }

    let puntosEmily = obtenerCoordenadasDeForma("texto", "Emily");
    let puntosCorazon = obtenerCoordenadasDeForma("corazon", "");
    let puntosGuty = obtenerCoordenadasDeForma("texto", "Guty");

    let maxParticulas = Math.max(puntosEmily.length, puntosCorazon.length, puntosGuty.length);

    for (let i = 0; i < maxParticulas; i++) {
        particulas.push({
            x: centroX + (Math.random() * 40 - 20),
            y: centroY + (Math.random() * 40 - 20),
            actualTargetX: centroX,
            actualTargetY: centroY,
            size: Math.random() * 1.5 + 1, // Estrellas ligeramente más pequeñas
            speed: Math.random() * 0.06 + 0.05 // Un toque más veloces
        });
    }

    function mapearFase(puntosDestino) {
        particulas.forEach((p, index) => {
            let punto = puntosDestino[index % puntosDestino.length];
            p.actualTargetX = punto.x;
            p.actualTargetY = punto.y;
        });
    }

    /* 🔴 OPTIMIZACIÓN 2: Simplificamos el dibujo de la estrella.
       Dibujar líneas cruzadas consumía muchos recursos. Ahora usamos círculos con 
       un brillo optimizado de solo 4 píxeles para que la tarjeta gráfica no sufra. */
    function renderizarEstrella(x, y, size) {
        ctx.fillStyle = '#ffafbd';
        ctx.shadowBlur = 5; 
        ctx.shadowColor = '#ff758c';
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Apagado inmediato de sombras
    }

    mapearFase(puntosEmily);

    function bucleAnimacion() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        temporizadorFase++;

        if (faseActual === 0 && temporizadorFase > 100) {
            faseActual = 1;
            temporizadorFase = 0;
            mapearFase(puntosCorazon);
        } else if (faseActual === 1 && temporizadorFase > 100) {
            faseActual = 2;
            temporizadorFase = 0;
            mapearFase(puntosGuty);
        } else if (faseActual === 2 && temporizadorFase > 100) {
            cancelAnimationFrame(bucleNombreId);
            canvas.classList.add('desaparecer');
            
            setTimeout(() => {
                canvas.style.display = "none";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                boton.innerHTML = "✨ Volver a mostrar nombre";
                boton.style.opacity = "1";
                boton.style.pointerEvents = "auto";
            }, 1000);
            return;
        }

        particulas.forEach(p => {
            p.x += (p.actualTargetX - p.x) * p.speed;
            p.y += (p.actualTargetY - p.y) * p.speed;

            let parpadeo = p.size * (Math.sin(Date.now() * 0.01 + p.x) * 0.25 + 0.75);
            renderizarEstrella(p.x, p.y, parpadeo);
        });

        bucleNombreId = requestAnimationFrame(bucleAnimacion);
    }
     function renderizarEstrella(x, y, size) {
        ctx.fillStyle = '#ff0022';  // Rojo vivo para el centro de la estrella
        ctx.shadowBlur = 8;         // Nivel de brillo a la redonda
        ctx.shadowColor = '#ff0000'; // Destello rojo neón profundo
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Apagado inmediato de sombras para mantener la fluidez
    }

    bucleAnimacion();
}

// Variable global para saber qué tipo de lluvia está activa
let tematicaRapunzelActiva = false;

function alternarTematica() {
    const body = document.body;
    const boton = document.getElementById('btn-cambiar-fondo');
    const contenedorLluvia = document.getElementById('lluvia-estrellas');
    
    // 1. Cambiamos el estado del interruptor
    tematicaRapunzelActiva = !tematicaRapunzelActiva;
    
    // 2. Activamos o desactivamos la clase del fondo en el body
    body.classList.toggle('fondo-rapunzel');
    
    // 3. Modificamos el texto del botón según el estado
    if (tematicaRapunzelActiva) {
        boton.innerHTML = "🌌 Volver a Estrellas";
    } else {
        boton.innerHTML = "🏮 Cambiar a Noche Mágica";
    }
    
    // 4. Vaciamos las partículas actuales y las volvemos a generar con la nueva forma
    if (contenedorLluvia) {
        contenedorLluvia.innerHTML = "";
        const numeroDePartculas = 35; // Cantidad de elementos cayendo
        
        for (let i = 0; i < numeroDePartculas; i++) {
            recrearParticulaLluvia(contenedorLluvia);
        }
    }
}

// Función optimizada que lee si debe pintar una estrella o un farol emoji
function recrearParticulaLluvia(contenedor) {
    const elemento = document.createElement("div");
    
    if (tematicaRapunzelActiva) {
        // Modo Rapunzel: Se convierte en el emoji del farol flotante
        elemento.classList.add("estrella-cayendo");
        elemento.innerHTML = "🏮";
        
        // Ajustes estéticos para el emoji (quitamos fondo blanco de estrella anterior)
        elemento.style.background = "transparent";
        elemento.style.boxShadow = "none";
        // Tamaño aleatorio para los faroles en pantalla
        elemento.style.fontSize = `${Math.random() * 12 + 16}px`; 
    } else {
        // Modo Normal: Vuelve a ser la estrella blanca con brillo rosa original
        elemento.classList.add("estrella-cayendo");
        elemento.innerHTML = "";
        elemento.style.background = "white";
        elemento.style.fontSize = "0px";
    }

    // Parámetros de caída aleatorios comunes para mantener el movimiento natural
    const posicionX = Math.random() * 100; 
    const duracion = Math.random() * 5 + 4; // Velocidad entre 4 y 9 segundos
    const retraso = Math.random() * 6; 

    elemento.style.left = `${posicionX}vw`;
    elemento.style.animationDuration = `${duracion}s`;
    elemento.style.animationDelay = `${retraso}s`;

    contenedor.appendChild(elemento);
}
function recrearParticulaLluvia(contenedor) {
    const elemento = document.createElement("div");
    elemento.classList.add("estrella-cayendo");

    // Parámetros de caída aleatorios comunes para mantener el movimiento natural
    const posicionX = Math.random() * 100; 
    const duracion = Math.random() * 5 + 4; // Velocidad entre 4 y 9 segundos
    const retraso = Math.random() * 6; 

    elemento.style.left = `${posicionX}vw`;
    elemento.style.animationDuration = `${duracion}s`;
    elemento.style.animationDelay = `${retraso}s`;
    
    if (tematicaRapunzelActiva) {
        // 🏮 MODO RAPUNZEL: Se convierte en el emoji del farol flotante
        elemento.innerHTML = "🏮";
        elemento.style.background = "transparent";
        elemento.style.boxShadow = "none";
        elemento.style.borderRadius = "0%";
        elemento.style.width = "auto";
        elemento.style.height = "auto";
        elemento.style.fontSize = `${Math.random() * 12 + 16}px`; // Tamaño del emoji
    } else {
        // 🌌 MODO NORMAL: Fuerza a la estrella a recuperar su forma física circular original
        elemento.innerHTML = "";
        elemento.style.background = "white";
        elemento.style.borderRadius = "50%";
        
        // 🔴 AQUÍ ESTÁ LA SOLUCIÓN: Le devolvemos el tamaño físico en píxeles a la estrella
        const tamanoEstrella = Math.random() * 3 + 2; // Tamaños entre 2px y 5px
        elemento.style.width = `${tamanoEstrella}px`;
        elemento.style.height = `${tamanoEstrella}px`;
        elemento.style.fontSize = "0px";
        
        // Le devolvemos su brillo rosa original
        elemento.style.boxShadow = "0 0 8px #ffffff, 0 0 12px #ffafbd";
    }

    contenedor.appendChild(elemento);
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Desactiva por completo el clic derecho
});

document.addEventListener('keydown', function(e) {
    // Bloquea F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Bloquea Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+U (View Source)
    if (e.ctrlKey && (e.shiftKey && (e.key === 'I' || e.key === 'J') || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
    }
});

// Variable global para controlar los fotogramas del juego y poder detenerlo
let bucleJuegoId = null;

function iniciarMinijuego() {
    const canvas = document.getElementById('canvas-juego');
    const boton = document.getElementById('btn-jugar');
    const botonCerrar = document.getElementById('btn-cerrar-juego');
    const txtPuntos = document.getElementById('puntos-juego');
    
    if (!canvas || !boton || !botonCerrar) return;
    
    // Evitamos que se duplique la velocidad del juego si pulsan muchas veces
    cancelAnimationFrame(bucleJuegoId);
    
    // Mostramos el lienzo y el botón de cerrar, ocultamos el botón de inicio
    canvas.style.display = "block";
    boton.style.display = "none";
    botonCerrar.style.display = "inline-block";
    
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;
    
    let puntos = 0;
    txtPuntos.textContent = puntos;
    let juegoTerminado = false;
    
    // Configuración de la barra receptora rosa del jugador
    let jugador = {
        x: canvas.width / 2 - 30,
        y: canvas.height - 25,
        ancho: 60,
        alto: 15
    };
    
    let estrellasEnemigas = [];

    // --- CONTROLES DE MOVIMIENTO ---
    
    // Movimiento con el Mouse (Computadora)
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        jugador.x = e.clientX - rect.left - jugador.ancho / 2;
        
        // Límites para que la barra no se salga del cuadro
        if (jugador.x < 0) jugador.x = 0;
        if (jugador.x + jugador.ancho > canvas.width) jugador.x = canvas.width - jugador.ancho;
    });

    // Movimiento Táctil (Celulares)
    canvas.addEventListener('touchmove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        jugador.x = touch.clientX - rect.left - jugador.ancho / 2;
        
        if (jugador.x < 0) jugador.x = 0;
        if (jugador.x + jugador.ancho > canvas.width) jugador.x = canvas.width - jugador.ancho;
        
        e.preventDefault(); // Evita que la pantalla del celular se mueva al arrastrar el dedo
    }, { passive: false });

    // --- LÓGICA DEL JUEGO ---

    // Generador automático de estrellitas rojas
    function crearEstrellaCaida() {
        // Controla la probabilidad y cantidad máxima de estrellas en pantalla
        if (Math.random() < 0.03 && estrellasEnemigas.length < 5) {
            estrellasEnemigas.push({
                x: Math.random() * (canvas.width - 15) + 7,
                y: -15,
                radio: 7,
                velocidad: Math.random() * 2 + 2 // Velocidades aleatorias de caída
            });
        }
    }

    // BUCLE PRINCIPAL (Se ejecuta a 60 fotogramas por segundo)
    function buclePrincipal() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 1. Renderizar la barra del jugador (Rosa brillante)
        ctx.fillStyle = '#ff758c';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffafbd';
        ctx.beginPath();
        ctx.roundRect(jugador.x, jugador.y, jugador.ancho, jugador.alto, 8);
        ctx.fill();
        ctx.shadowBlur = 0; // Desactivar sombra inmediatamente por rendimiento

        // 2. Controlar y mover las estrellas que caen
        crearEstrellaCaida();
        
        for (let i = estrellasEnemigas.length - 1; i >= 0; i--) {
            let est = estrellasEnemigas[i];
            est.y += est.velocidad; // Gravedad: la estrella baja
            
            // Dibujar la estrellita roja neón
            ctx.fillStyle = '#ff0022';
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#ff0000';
            ctx.beginPath();
            ctx.arc(est.x, est.y, est.radio, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // 3. Sistema de Colisiones (Detecta si la barra atrapa la estrella)
            if (est.y + est.radio >= jugador.y && 
                est.x >= jugador.x && 
                est.x <= jugador.x + jugador.ancho) {
                
                estrellasEnemigas.splice(i, 1); // Borramos la estrella recolectada
                puntos++;
                txtPuntos.textContent = puntos;
                
                // Meta del juego: Llegar a 15 puntos
                if (puntos >= 15) {
                    juegoTerminado = true;
                }
                continue;
            }

            // Si la estrella cae al vacío, la borramos para no saturar memoria
            if (est.y - est.radio > canvas.height) {
                estrellasEnemigas.splice(i, 1);
            }
        }

        // CONTROL DE ANIMACIÓN
        if (!juegoTerminado) {
            bucleJuegoId = requestAnimationFrame(buclePrincipal);
        } else {
            // Pantalla de Victoria final para Emily
            cancelAnimationFrame(bucleJuegoId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#ffffff';
            ctx.font = "bold 22px Arial";
            ctx.textAlign = "center";
            ctx.fillText("🏆 ¡Victoria Mágica!", canvas.width / 2, canvas.height / 2 - 10);
            
            ctx.font = "16px Arial";
            ctx.fillStyle = "#ffafbd";
            ctx.fillText("¡Eres la mejor atrapando estrellas, Emily! ✨", canvas.width / 2, canvas.height / 2 + 20);
            
            // Reaparecemos el botón de inicio con opción de revancha tras 2 segundos
            setTimeout(() => {
                boton.innerHTML = "🔄 Volver a Jugar";
                boton.style.display = "inline-block";
                botonCerrar.style.display = "inline-block";
            }, 2000);
        }
    }

    buclePrincipal();
}

// FUNCIÓN DE CIERRE: Detiene el canvas por completo y oculta el juego de la tarjeta
function cerrarMinijuego() {
    const canvas = document.getElementById('canvas-juego');
    const boton = document.getElementById('btn-jugar');
    const botonCerrar = document.getElementById('btn-cerrar-juego');
    
    // Apagamos el renderizador inmediatamente para liberar procesador
    cancelAnimationFrame(bucleJuegoId);
    
    if (canvas && boton && botonCerrar) {
        canvas.style.display = "none";
        botonCerrar.style.display = "none";
        
        // Restablecemos el botón principal de juego
        boton.innerHTML = "▶️ Empezar a Jugar";
        boton.style.display = "inline-block";
    }
}

function enviarAlertaCorreo() {
    const formulario = document.getElementById('mi-formulario-correo');
    const boton = document.getElementById('btn-notificacion');
    
    if (!formulario || !boton) return;

    boton.innerHTML = "⏳ Enviando a Daniel";
    boton.style.pointerEvents = "none"; 

    fetch(formulario.action, {
        method: formulario.method,
        body: new FormData(formulario),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            boton.innerHTML = "✅ Se envio Guty";
            setTimeout(() => {
                boton.innerHTML = "📧 Solo cuando me necesites";
                boton.style.pointerEvents = "auto";
            }, 3000); 
        } else {
            boton.innerHTML = "❌ No se envio";
            boton.style.pointerEvents = "auto";
        }
    }).catch(error => {
        boton.innerHTML = "❌ Error";
        boton.style.pointerEvents = "auto";
    });
}

function reproducirPausar() {
    const cancion = document.getElementById('bg-music');
    const boton = document.getElementById('btn-reproductor');
    
    if (!cancion || !boton) return;
    
    if (cancion.paused) {
        cancion.play();
        boton.innerHTML = "⏸️ Pausar Música";
    } else {
        cancion.pause();
        boton.innerHTML = "▶️ Escuchar \"Bendita la luz\"";
    }
}

let intentosCarta = 0;

function evaluarFraseCompleta(event) {
    // Detectamos si el usuario presiona la tecla Enter
    if (event.key === "Enter") {
        const input = document.getElementById("password-letter-input");
        const contenidoSecreto = document.getElementById("carta-contenido");
        const contador = document.getElementById("contador-intentos");
        
        if (!input || !contenidoSecreto || !contador) return;
        
        // 🔴 Escribe aquí adentro la contraseña real de tu carta (ejemplo: 'mi frase secreta')
        const fraseCorrecta = "tu frase secreta aqui"; 
        
        if (input.value.trim() === fraseCorrecta) {
            // Éxito: Revelamos el texto y ocultamos el contador de errores
            contenidoSecreto.style.display = "block";
            contador.style.display = "none";
            input.style.display = "none";
            document.querySelector("#carta-seccion p").style.display = "none";
        } else {
            // Error: Sumamos intento y avisamos
            intentosCarta++;
            contador.textContent = "Errores seguidos: " + intentosCarta + " / 3";
            input.value = ""; // Limpiamos el cuadro de texto
            
            if (intentosCarta >= 3) {
                alert("Has alcanzado el límite de intentos. ¡Revisa la pista! 🔒");
            }
        }
    }
}

// 🔴 FUNCIÓN CRUCIAL: Reproduce Maná y apaga Enredados al mismo tiempo
function reproducirPausar() {
    const cancionMana = document.getElementById('bg-music');         // Canción de la carta (Maná)
    const cancionEnredados = document.getElementById('bg-music-2'); // Canción del inicio (Enredados)
    const boton = document.getElementById('btn-reproductor');
    
    if (!cancionMana || !boton) return;
    
    if (cancionMana.paused) {
        // 🛑 APAGADO CRUCIAL: Pausamos Enredados del inicio de la página para que no se traslapen
        if (cancionEnredados && !cancionEnredados.paused) {
            cancionEnredados.pause();
        }
        
        // Encendemos Maná
        cancionMana.play();
        boton.innerHTML = "⏸️ Pausar Música";
    } else {
        // Si pausamos Maná, reactivamos Enredados suavemente en el fondo
        cancionMana.pause();
        boton.innerHTML = "▶️ Escuchar \"Bendita la luz\"";
        
        if (cancionEnredados) {
            cancionEnredados.play();
        }
    }
}

// 🔴 MOTOR DE SINCRONIZACIÓN ACTUALIZADO CON TUS TIEMPOS EXACTOS
document.addEventListener("DOMContentLoaded", () => {
    const cancion = document.getElementById('bg-music');
    const cajaSubtitulos = document.getElementById('subtitulos-musica');

    // Aquí están tus segundos exactos calibrados
    const lineasLetra = [
        { tiempo: 0, texto: "♪ (Introducción Musical) ♪" },
        { tiempo: 5, texto: "Bendito el lugar y el motivo de estar ahí... 🌸" },
        { tiempo: 13, texto: "Bendita la coincidencia." },
        { tiempo: 21, texto: "Bendito el reloj que nos puso puntual ahí... ⏱️" },
        { tiempo: 29, texto: "Bendita sea tu presencia." },
        { tiempo: 36, texto: "Bendito Dios por encontrarnos en el camino..." },
        { tiempo: 45, texto: "Y de quitarme esta soledad de mi destino. ✨" },
        { tiempo: 51, texto: "Bendita la luz... bendita la luz de tu mirada... 💫" },
        { tiempo: 60, texto: "Bendita la luz... bendita la luz de tu mirada desde el alma." },
        { tiempo: 86, texto: "Benditos ojos que me esquivaban... 😉" },
        { tiempo: 91, texto: "Simulaban desdén que me ignoraban..." },
        { tiempo: 95, texto: "Y de repente, sostienes la mirada... 👀" },
        { tiempo: 103, texto: "Bendito Dios por encontrarnos en el camino..." },
        { tiempo: 111, texto: "Y de quitarme esta soledad de mi destino. ❤️" },
        { tiempo: 118, texto: "Bendita la luz... bendita la luz de tu mirada... 💫" },
        { tiempo: 127, texto: "Bendita la luz... bendita la luz de tu mirada, oh..." }
    ];

    if (cancion && cajaSubtitulos) {
        cancion.addEventListener('timeupdate', () => {
            const tiempoActual = cancion.currentTime;
            let fraseActiva = "";
            
            for (let i = 0; i < lineasLetra.length; i++) {
                if (tiempoActual >= lineasLetra[i].tiempo) {
                    fraseActiva = lineasLetra[i].texto;
                }
            }
            
            if (cajaSubtitulos.textContent !== fraseActiva) {
                cajaSubtitulos.style.opacity = 0;
                setTimeout(() => {
                    cajaSubtitulos.textContent = fraseActiva;
                    cajaSubtitulos.style.opacity = 1;
                }, 120);
            }
        });
    }
});

function mostrarCuentaRegresiva() {
    const boton = document.getElementById('btn-contador');
    
    // Buscamos dinámicamente tu contenedor transparente de abajo
    const cuadroTransparente = document.querySelector('.caja-transparente-nota') || 
                               document.querySelector('.texto-pantalla') || 
                               document.getElementById('caja-nota');

    if (!boton) return;

    // Calculamos los días exactos para tu cuenta regresiva (Meta: 14 de Junio de 2027)
    const fechaMeta = new Date("2027-06-14T00:00:00");
    const fechaActual = new Date();
    const diferenciaTiempo = fechaMeta - fechaActual;
    const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

    // Tu dedicatoria guardada de forma segura
    const mensajeNostalgico = "Quiero seguir riendo en todo este tiempo que me queda en el colegio aunque aun nos seguiremos viendo despues de graduarme yo se que no sera lo mismo pondria una musica triste como la que ahora estoy escuchando pero no te quiero hacer sentir mal jsjsj asi que prefiero reirme de cada momento que me queda contigo y con todos a los que quiero";

    // Si el botón muestra el estado inicial, cambiamos todo al modo nostálgico
    if (boton.innerHTML.includes("Contador de dias") || boton.innerHTML === "") {
        boton.innerHTML = "⏳ Quedan " + diasRestantes + " días";
        
        if (cuadroTransparente) {
            cuadroTransparente.innerHTML = mensajeNostalgico;
        }
    } else {
        // Al volver a presionar, restauramos los textos originales de la pantalla
        boton.innerHTML = "🥲Contador de dias";
        
        if (cuadroTransparente) {
            cuadroTransparente.innerHTML = "Queria sacar solo imagenes de instagram pero decidi mejor que no y mejor tomarlas yo mismo o poner las que ya tengo jsjs";
        }
    }
}

// Funciones para el control de la imagen de Psyduck
function abrirImagenPsyduck() {
    const modal = document.getElementById('modal-psyduck');
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarImagenPsyduck() {
    const modal = document.getElementById('modal-psyduck');
    if (modal) {
        modal.style.display = "none";
    }
}

// Funciones para el control de la imagen de Psyduck Cantando
function abrirImagenCantando() {
    const modal = document.getElementById('modal-cantando');
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarImagenCantando() {
    const modal = document.getElementById('modal-cantando');
    if (modal) {
        modal.style.display = "none";
    }
}

// Funciones para el control del cuarto botón de Psyduck
function abrirImagenMasCartas() {
    const modal = document.getElementById('modal-mas-cartas');
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarImagenMasCartas() {
    const modal = document.getElementById('modal-mas-cartas');
    if (modal) {
        modal.style.display = "none";
    }
}

// Funciones para el control del botón de Psyduck Investigando
function abrirImagenInvestigando() {
    const modal = document.getElementById('modal-investigando');
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarImagenInvestigando() {
    const modal = document.getElementById('modal-investigando');
    if (modal) {
        modal.style.display = "none";
    }
}

// Funciones para el control del botón de Psyduck Investigando
function abrirImagenInvestigando() {
    const modal = document.getElementById('modal-investigando');
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarImagenInvestigando() {
    const modal = document.getElementById('modal-investigando');
    if (modal) {
        modal.style.display = "none";
    }
}
