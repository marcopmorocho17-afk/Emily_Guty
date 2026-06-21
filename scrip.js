//Crear la clave de acceso a la pagina principal
function verificarClave() {
    const input = document.getElementById('pass-input').value;

    if (input === "emily10") {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Contraseña incorrecta 🌸");
    }
}
//Caida de estrellas
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
        15. Hasta alli por que no quiero decir cosas mas alla solo las superficiales 😖😖`,
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
            cajaMensaje.textContent = mensajes[textoBoton] || "";

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

function toggleCartaSecreta() {
    const cartaSeccion = document.getElementById('carta-seccion');
    
    if (!cartaSeccion) return;
    
    if (cartaSeccion.style.display === "none" || cartaSeccion.style.display === "") {
        // La abrimos por completo
        cartaSeccion.style.display = "block";
    } else {
        // La cerramos si vuelve a dar clic
        cartaSeccion.style.display = "none";
    }
}

// Variable global para evitar que el temporizador se duplique si aplastan Play muchas veces
let temporizadorLetraActivo = false;

// 1. Función principal del botón de Play
// Variable global para controlar que el escuchador del tiempo no se duplique
let escuchadorManaActivo = false;

function controlarMusicaManaDefinitiva(idSubtitulos) {
    const audio = document.getElementById('musica-mana-definitiva');
    const boton = document.getElementById('btn-mana-definitivo');
    const cajaSubtitulos = document.getElementById(idSubtitulos);
    
    if (!audio || !boton || !cajaSubtitulos) return;
    
    // 💥 TRUCO DE SEGURIDAD: Forzamos al navegador a darle permisos de reproducción al archivo de audio
    audio.muted = false; 

    // Tu lista de tiempos exactos calibrados de Maná
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

    if (audio.paused) {
        // Encendemos la música con una promesa para ganarle al bloqueo de Chrome
        audio.play().then(() => {
            boton.innerHTML = "⏸️ Pausar Música";
            
            // Activamos la sincronización en vivo solo si no estaba encendida ya
            if (!escuchadorManaActivo) {
                audio.addEventListener('timeupdate', function() {
                    const tiempoActual = audio.currentTime;
                    let fraseActiva = "";
                    
                    for (let i = 0; i < lineasLetra.length; i++) {
                        if (tiempoActual >= lineasLetra[i].tiempo) {
                            fraseActiva = lineasLetra[i].texto;
                        }
                    }
                    
                    if (cajaSubtitulos.innerHTML !== fraseActiva) {
                        cajaSubtitulos.innerHTML = fraseActiva;
                    }
                });
                escuchadorManaActivo = true;
            }
        }).catch(error => {
            console.log("El navegador bloqueó el audio temporalmente: ", error);
            // Si falla por seguridad, forzamos un segundo intento directo
            audio.play();
        });
    } else {
        audio.pause();
        boton.innerHTML = "▶️ Escuchar \"Bendita la luz\"";
    }
}

function revelarNuevaCartaHorizontal() {
    const cartaNueva = document.getElementById('nueva-carta-emily');
    if (!cartaNueva) return;
    
    if (cartaNueva.style.display === "none" || cartaNueva.style.display === "") {
        cartaNueva.style.display = "block"; // La muestra completa en la pantalla
    } else {
        cartaNueva.style.display = "none";  // La oculta si vuelven a hacer clic
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECCIÓN DE ELEMENTOS DE LA PANTALLA
    const cajonCerrado = document.getElementById('cajon-cerrado');
    const reproductor = document.getElementById('reproductor');
    const btnCerrar = document.getElementById('btn-cerrar');
    const btnPlay = document.getElementById('btn-play');
    const audio = document.getElementById('reproductor-audio');
    const tituloCancion = document.getElementById('titulo-cancion');
    const artistaCancion = document.getElementById('artista-cancion');
    const porqueCancion = document.getElementById('porque-cancion'); 
    const progresoActual = document.getElementById('progreso-actual');
    const progresoBar = document.getElementById('progreso-bar');
    const listaCancionesUI = document.getElementById('lista-canciones');
     const btnLetra = document.getElementById('btn-letra');
    const cajonLetra = document.getElementById('cajon-letra');
    const btnCerrarLetra = document.getElementById('btn-cerrar-letra');
    const contenidoLetra = document.getElementById('contenido-letra');
    const tituloLetraPantalla = document.getElementById('titulo-letra-pantalla');

    let audioFondoOriginal = null;
    let indiceCancionActual = 0;
    let estaReproduciendo = false;

    // 2. BASE DE DATOS DE TUS CANCIONES CON EL "POR QUÉ"
    const cancionesDedicadas = [
        {
            titulo: "Bendita la luz",
            artista: "Maná",
            url: "canciones/Bendita la luz.mp3", 
            porque: "Porque eres una luz para cada persona que está en tu vida, eres una luz que sirve para salir de esa oscuridad demasiado espesa.",
            letra: `Bendito el lugar y el motivo de estar contigo\nBendita la coincidencia\nBendito el reloj que nos dio puntualidad\nBendita sea tu presencia\n\nAmor, qué bendita tu luz\nAmor, qué bendito tu amor\nAmor, qué bendita tu luz, amor`
        },
        {
            titulo: "Veo en ti la luz",
            artista: "Alan Menken",
            url: "canciones/extracted-audio.mp3",
            porque: "Emi veo en ti una luz pero osea no una asi normal de foco jsjsj sino una que es capaz de lograr cualquier cosa ",
            letra: `Veo en ti la luz\nY la niebla se ha marchado\nVeo en ti la luz\nCaminar contigo al lado\n\nEs tan bello y real\nY el mundo es ideal\nYa todo es diferente...\nVeo en ti la luz`

        },
        {
            titulo: "Valiente",
            artista: "Elenco de soy luna",
            url: "canciones/Soy.mp3",
            porque: "Por que se que llegaras tan lejosssss y sabes por que lo se por que eres tu pues y por que lo vas a lograr cualquier cosa hoy que te vi como ya te despedias de 10mo me en orgullesi no se como se escribe jsjs pero es por que lo lograste y estoy feliz por ti te lo puedo prometer yo se que llegaras lejos y espero que cuando lo hagas no te olvides de mi jsjs",
            letra: `Todo lo que quieras lo podrás alcanzar\nSi eres valiente, volarás\nNo importa la distancia, no importa el dolor\nSi en tu camino está el amor`
        },
        {
            titulo: "La estrategia",
            artista: "Calee y Dandee",
            url: "canciones/Cali Y El Dandee - La Estrategia.mp3",
            porque: "Aun no te puedo dar mucho contexto sobre esto pero si haz visto la musica veras que es una de las mas tristes y tal vez alli te de contexto pero mientras tanto sjsj no puedo jsjsj ",
            letra: `Yo sé que nunca es bueno aparecer, que no debo llamarla
            Que debe parecer que así estoy bien, que ya pude olvidarla
            Igual yo sé que fue su decisión y debo respetarla
            Y debo reprimir esta esperanza de volver a amarla

            Hacerlo todo sin errores, para ver si te cautivo
            Y buscar la excusa perfecta para que sepas que aún vivo
            Y para hacer esa llamada que demuestre que aún existo
            La estrategia es lo de menos, yo solo quiero oír tu voz

            No quiero seguir jugando a que sean mis amigos
            Quienes decidan qué hago
            La verdad me estoy ahogando al tragarme las palabras
            Y no decir que te extraño
            Y no decir que te amo

            Duele tanto tu partida que ruego por anestesia
            Se desangra un corazón mientras el tuyo tiene amnesia
            No se acuerda de esa noche que juramos ser eternos
            Que íbamos a darlo todo por querernos...`
        },
        {
            titulo: "Aqui estoy yo",
            artista: "Luis Fonsi",
            url: "canciones/Luis Fonsi - Aqui Estoy Yo ft. Aleks Syntek, Noel Schajris, David Bisbal.mp3",
            porque: "Por que siempre estare para ti aunque ya me valla de voluntariado pues jsjsj ",
            letra: `Aquí estoy yo para darte mi fuerza\nPara darte mi vida, para darte mi amor\nAquí estoy yo para abrirte la puerta\nY cerrar la distancia entre tu alma y mi voz`
        },
        {
            titulo: "Por ti",
            artista: "Nicolas Mayorca",
            url: "canciones/Nicolas Mayorca - Por Ti (Audio) ft. Alkilados.mp3",
            porque: "No tengo contexto para esto por ahora o no se 🥲🥲",
            letra: `Y por ti, yo sería capaz de todo\nDe encontrar un nuevo modo\nPara no perderte jamás\nY por ti, lo daría todo entero\nPorque sabes que te quiero...`
        },
        {
            titulo: "100 años",
            artista: "HA-ASH, Prince Royce",
            url: "canciones/HA-ASH, Prince Royce - 100 Años (Video Oficial).mp3",
            porque: "Por que contaras conmigo siempreee hasta que me muera jsjs",
            letra: "Disponible para la proxima actualizacion jsjsj esperate guty esta y mas musicas sjsj",

        },
        {
            titulo: "Coleccionista de canciones",
            artista: "Camila",
            url: "canciones/Camila - Coleccionista De Canciones (Official Video).mp3",
            porque: "Por que hasta que me valla aqui van a aver la bolaaaaaaaaaaaaaaaaaaaaaaaaaaaa de musicas jsjsj cada uno con diferentes significados obviooo jsjs",
            letra: `Eres coleccionista de canciones\nDame razones para vivir\nLlenas el espacio que había en mí\nEres el imán de mi energía\nY mi alegría, eres tú...`
        },
    ];

    // 3. FUNCIONES PARA DETECTAR Y CONTROLAR LA MÚSICA AMBIENTAL DE FONDO
    function pausarMusicaDeFondo() {
        const todosLosAudios = document.querySelectorAll('audio, video');
        todosLosAudios.forEach(elemento => {
            if (elemento !== audio && !elemento.paused) {
                audioFondoOriginal = elemento;
                elemento.pause();
            }
        });
    }

    function reanudarMusicaDeFondo() {
        // Solo reanuda el fondo si la música dedicada está totalmente pausada o no ha iniciado
        if (audioFondoOriginal && (!estaReproduciendo || audio.paused)) {
            audioFondoOriginal.play().catch(e => console.log("Espera interacción del usuario"));
        }
    }

    // 4. MECANISMO DE APERTURA DEL CAJÓN
    if (cajonCerrado) {
        cajonCerrado.onclick = function() {
            cajonCerrado.style.opacity = '0';
            cajonCerrado.style.pointerEvents = 'none';
            
            if (reproductor) {
                reproductor.classList.remove('oculto');
                setTimeout(() => {
                    reproductor.classList.add('mostrar');
                }, 50);
            }
        };
    }

    // 5. MECANISMO DE CIERRE DEL CAJÓN (¡CORREGIDO! LA MÚSICA SIGUE SONANDO)
    if (btnCerrar) {
        btnCerrar.onclick = function() {
            if (reproductor) {
                reproductor.classList.remove('mostrar');
                setTimeout(() => {
                    reproductor.classList.add('oculto');
                    if (cajonCerrado) {
                        cajonCerrado.style.opacity = '1';
                        cajonCerrado.style.pointerEvents = 'auto';
                    }
                }, 400);
            }
            
            // SE QUITARON LAS LÍNEAS DE PAUSA: El audio del reproductor sigue ejecutándose aquí
            // Tampoco reanudamos el fondo musical de la pantalla porque la canción dedicada sigue activa
        };
    }

    // 6. CARGAR LISTA VISUAL DE CANCIONES
    function cargarListaCanciones() {
        if (!listaCancionesUI) return;
        listaCancionesUI.innerHTML = "";
        cancionesDedicadas.forEach((cancion, indice) => {
            const li = document.createElement('li');
            li.textContent = `${indice + 1}. ${cancion.titulo}`;
            li.onclick = () => seleccionarCancion(indice);
            listaCancionesUI.appendChild(li);
        });
    }

    // 7. SELECCIONAR Y REPRODUCIR LA CANCIÓN
    function seleccionarCancion(indice) {
        indiceCancionActual = indice;
        const cancion = cancionesDedicadas[indiceCancionActual];
        
        if (tituloCancion) tituloCancion.textContent = cancion.titulo;
        if (artistaCancion) artistaCancion.textContent = cancion.artista;
        if (porqueCancion) porqueCancion.textContent = cancion.porque; 
        
        audio.src = cancion.url;
        
         audio.play()
            .then(() => {
                estaReproduciendo = true;
                if (btnPlay) btnPlay.textContent = "⏸ Pause";
                pausarMusicaDeFondo(); // Aquí se te había cortado
            })
            .catch(error => {
                if (btnPlay) btnPlay.textContent = "▶ Play";
            });

        const elementosLista = listaCancionesUI.querySelectorAll('li');
        elementosLista.forEach((el, idx) => {
            if (idx === indice) el.classList.add('activa');
            else el.classList.remove('activa');
        });
    }

    // 8. CONTROL DEL BOTÓN DE PLAY / PAUSE MANUAL
    if (btnPlay) {
        btnPlay.onclick = function() {
            if (audio.src === "" || audio.ended) {
                seleccionarCancion(indiceCancionActual);
            } else if (estaReproduciendo) {
                audio.pause();
                estaReproduciendo = false;
                btnPlay.textContent = "▶ Play";
                reanudarMusicaDeFondo();
            } else {
                audio.play();
                estaReproduciendo = true;
                btnPlay.textContent = "⏸ Pause";
                pausarMusicaDeFondo();
            }
        };
    }

    // 9. INTERACCIÓN DEL BOTÓN "VER LETRA" Y "CERRAR LETRA"
    if (btnLetra) {
        btnLetra.onclick = function() {
            if (cajonLetra) {
                cajonLetra.classList.remove('letra-oculta');
                cajonLetra.classList.add('letra-visible');
                
                // Carga la letra de la canción que está sonando en ese instante
                const cancion = cancionesDedicadas[indiceCancionActual];
                if (contenidoLetra) contenidoLetra.textContent = cancion.letra;
            }
        };
    }

    if (btnCerrarLetra) {
        btnCerrarLetra.onclick = function() {
            if (cajonLetra) {
                cajonLetra.classList.remove('letra-visible');
                cajonLetra.classList.add('letra-oculta');
            }
        };
    }

    // 10. BARRA DE PROGRESO INTERACTIVA
    audio.ontimeupdate = function() {
        if (audio.duration && progresoActual) {
            const porcentaje = (audio.currentTime / audio.duration) * 100;
            progresoActual.style.width = `${porcentaje}%`;
        }
    };

    if (progresoBar) {
        progresoBar.onclick = function(evento) {
            if (audio.duration) {
                audio.currentTime = (evento.offsetX / progresoBar.clientWidth) * audio.duration;
            }
        };
    }

    // 11. REPRODUCIR SIGUIENTE CANCIÓN AUTOMÁTICAMENTE AL TERMINAR
    audio.onended = function() {
        let siguiente = (indiceCancionActual + 1) % cancionesDedicadas.length;
        seleccionarCancion(siguiente);
    };

    // Inicializa la lista al arrancar la web
    cargarListaCanciones();
});

// LÓGICA AISLADA Y EXCLUSIVA PARA LA MASCOTA
document.addEventListener("DOMContentLoaded", () => {
    const elPerro = document.getElementById('mascota');
    const laBurbuja = document.getElementById('burbuja-mascota');
    const elBtnMimo = document.getElementById('btn-mimo');
    const elBtnComida = document.getElementById('btn-comida');

    let dogInactivo = 0;
    let dogDurmiendo = false;

    const frasesMimos = [
        "¡Guau! Me encantan las caricias 🥰",
        "¡Eres la mejor, Emily! ❤️",
        "¡Qué bonita canción suena! 🎶",
        "¡Moveré mi colita por ti! 🐾"
    ];

    const frasesComida = [
        "¡Nom nom! Sabía a chocolate virtual 🍫",
        "¡Gracias, Emily! Estaba riquísimo 😋",
        "¡Guau! Mi pancita está súper feliz ✨",
        "¡Me diste tanta energía que quiero bailar! 🐕"
    ];

    function perroHabla(texto) {
        if (laBurbuja) {
            laBurbuja.textContent = texto;
            laBurbuja.style.opacity = '1';
        }
    }

    // Evento Mimos
    if (elBtnMimo && elPerro) {
        elBtnMimo.addEventListener('click', () => {
            dogInactivo = 0;
            dogDurmiendo = false;
            elPerro.textContent = "🐕";
            const azar = frasesMimos[Math.floor(Math.random() * frasesMimos.length)];
            perroHabla(azar);
            setTimeout(() => { if (!dogDurmiendo) elPerro.textContent = "🐶"; }, 2500);
        });
    }

    // Evento Comida
    if (elBtnComida && elPerro) {
        elBtnComida.addEventListener('click', () => {
            dogInactivo = 0;
            dogDurmiendo = false;
            elPerro.textContent = "🐾";
            const azar = frasesComida[Math.floor(Math.random() * frasesComida.length)];
            perroHabla(azar);
            setTimeout(() => { if (!dogDurmiendo) elPerro.textContent = "🐶"; }, 2500);
        });
    }

    // Evento Clic Directo
    if (elPerro) {
        elPerro.addEventListener('click', () => {
            dogInactivo = 0;
            if (dogDurmiendo) {
                dogDurmiendo = false;
                elPerro.textContent = "🐶";
                perroHabla("¡Me despertaste! ¡Hola de nuevo! ☀️");
            } else {
                perroHabla("¡Guau guau! Emi, ¿ponemos música? 🎵");
            }
        });
    }

    // Sistema de sueño cada 30 segundos
    setInterval(() => {
        dogInactivo += 10;
        if (dogInactivo >= 30 && !dogDurmiendo) {
            dogDurmiendo = true;
            if (elPerro) elPerro.textContent = "💤";
            perroHabla("Zzz... Me dio un poquito de sueño... 🌙");
        }
    }, 10000);
});

// LÓGICA TOTALMENTE AISLADA PARA EL COFRE DE SORPRESAS
document.addEventListener("DOMContentLoaded", () => {
    const elCofre = document.getElementById('cofre');
    const laBurbujaCofre = document.getElementById('burbuja-cofre');
    const elBtnCerrarCofre = document.getElementById('btn-cerrar-cofre');

    // Banco de mensajes aleatorios para Emily
    const mensajesCofre = [
        "Eres incrribleeeeeeeeeeeeee Guty ✨",
        "Gracias por alegrar mis días con solo existir 🌻",
        "Tu sonrisa tiene el poder de cambiar cualquier día gris ☀️",
        "Admiro muchísimo tu forma de ser Guty eres unica entre tantas 😊",
        "Recuerda que eres capaz de lograr todo lo que te propongas 🚀",
        "No lo olvides nunca estaras sola NUNCAAAAA 🥰",
        "Eres un rayo de sol en los momentos mas oscuros 🤫"
    ];

    if (elCofre) {
        elCofre.onclick = function() {
            // Cambiamos el aspecto a cofre abierto con destellos
            elCofre.textContent = "✨🔓"; 
            
            // Elegimos un mensaje completamente random del banco
            const mensajeAleatorio = mensajesCofre[Math.floor(Math.random() * mensajesCofre.length)];
            
            if (laBurbujaCofre) {
                laBurbujaCofre.textContent = mensajeAleatorio;
                laBurbujaCofre.style.borderColor = "#ec4899"; // Cambia el borde a rosa al abrirse
            }

            // Mostramos el botón para permitirle volverlo a cerrar
            if (elBtnCerrarCofre) {
                elBtnCerrarCofre.classList.remove('oculto-cofre');
            }
        };
    }

    if (elBtnCerrarCofre) {
        elBtnCerrarCofre.onclick = function() {
            // Regresamos el cofre a su estado cerrado original
            if (elCofre) elCofre.textContent = "🧰";
            
            if (laBurbujaCofre) {
                laBurbujaCofre.textContent = "¡Cofre cerrado! Vuelve a tocar para otra sorpresa. 🔮";
                laBurbujaCofre.style.borderColor = "#8b5cf6";
            }

            // Escondemos de nuevo el botón de cerrar
            elBtnCerrarCofre.classList.add('oculto-cofre');
        };
    }
});

// ==========================================================================
// 🕹️ MOTOR DE JUEGO COMPETITIVO DE CARRERAS (VERSIÓN INTEGRAL BLINDADA)
// ==========================================================================
let miCarril = null;
let miNombreCarrera = "";
let carreraTerminated = false; // Variable unificada para control del bucle gráfico
let modoSolitarioActivo = false;
let intervaloBot = null;

// Puntos de salida de los competidores (Carril 1 arriba, Carril 2 abajo)
let datosJ1 = { x: 40, y: 80, nombre: "Jugador 1", progreso: 0 };
let datosJ2 = { x: 40, y: 200, nombre: "Jugador 2", progreso: 0 };

// Control de apertura y cierre de la tarjeta del minijuego
function toggleJuegoCarrera() {
    const modulo = document.getElementById('modulo-juego-carrera');
    if (modulo) {
        if (modulo.style.display === "none" || modulo.style.display === "") {
            modulo.style.display = "block";
            carreraTerminated = false; // Desbloqueamos el bucle
            buclePistaCarrera();       // Despertamos los gráficos en caliente
        } else {
            modulo.style.display = "none";
            carreraTerminated = true;  // Apagamos para ahorrar memoria
            if (intervaloBot) clearInterval(intervaloBot);
        }
    }
}

// 🤖 MODO UN JUGADOR (CONTRA EL BOT PSYDUCK)
function iniciarModoSolitario() {
    const inputNombre = document.getElementById('nombre-jugador-input');
    if (!inputNombre || inputNombre.value.trim() === "") {
        alert("¡Por favor introduce tu nombre primero! 😊");
        return;
    }

    if (intervaloBot) clearInterval(intervaloBot);
    carreraTerminated = false;
    modoSolitarioActivo = true;
    miCarril = 'jugador1'; 
    miNombreCarrera = inputNombre.value.trim();

    datosJ1.nombre = miNombreCarrera;
    datosJ1.progreso = 0;
    datosJ1.x = 40;

    datosJ2.nombre = "Bot Psyduck 🦆";
    datosJ2.progreso = 0;
    datosJ2.x = 40;

    document.getElementById('registro-carrera').style.display = "none";
    document.getElementById('pista-carrera').style.display = "block";

    document.getElementById('txt-nom-j1').innerText = datosJ1.nombre + ": 0 ⚡";
    document.getElementById('txt-nom-j2').innerText = datosJ2.nombre + ": 0 ⚡";

    buclePistaCarrera();

    // Inteligencia Artificial del Bot: Avanza al azar cada 200 milisegundos
    intervaloBot = setInterval(() => {
        if (carreraTerminated) return;
        
        if (Math.random() > 0.42) {
            datosJ2.progreso += 1;
            datosJ2.x = 40 + (datosJ2.progreso * 2.8);
            document.getElementById('txt-nom-j2').innerText = datosJ2.nombre + ": " + datosJ2.progreso + " ⚡";

            if (datosJ2.progreso >= 100) {
                finalizarCarreraLocal(datosJ2.nombre);
            }
        }
    }, 200);
}

// 🌐 MODO MULTIJUGADOR ONLINE (CONECTADO A FIREBASE)
function registrarseEnCarrera(carril) {
    const inputNombre = document.getElementById('nombre-jugador-input');
    if (!inputNombre || inputNombre.value.trim() === "") {
        alert("¡Por favor introduce tu nombre primero! 😊");
        return;
    }

    carreraTerminated = false;
    modoSolitarioActivo = false;
    miCarril = carril;
    miNombreCarrera = inputNombre.value.trim();

    firebase.database().ref('carrera/' + carril + '/nombre').set(miNombreCarrera);
    firebase.database().ref('carrera/' + carril + '/progreso').set(0);
    firebase.database().ref('carrera/ganador').set(""); 

    document.getElementById('registro-carrera').style.display = "none";
    document.getElementById('pista-carrera').style.display = "block";

    conectarBaseDatosCarrera();
    buclePistaCarrera();
}

function conectarBaseDatosCarrera() {
    if (modoSolitarioActivo) return;

    firebase.database().ref('carrera').on('value', (snapshot) => {
        const datos = snapshot.val();
        if (!datos || modoSolitarioActivo) return;

        if (datos.jugador1) {
            datosJ1.nombre = datos.jugador1.nombre || "Jugador 1";
            datosJ1.progreso = datos.jugador1.progreso || 0;
            datosJ1.x = 40 + (datosJ1.progreso * 2.8); 
            const txtJ1 = document.getElementById('txt-nom-j1');
            if (txtJ1) txtJ1.innerText = datosJ1.nombre + ": " + datosJ1.progreso + " ⚡";
        }

        if (datos.jugador2) {
            datosJ2.nombre = datos.jugador2.nombre || "Jugador 2";
            datosJ2.progreso = datos.jugador2.progreso || 0;
            datosJ2.x = 40 + (datosJ2.progreso * 2.8);
            const txtJ2 = document.getElementById('txt-nom-j2');
            if (txtJ2) txtJ2.innerText = datosJ2.nombre + ": " + datosJ2.progreso + " ⚡";
        }

        if (datos.ganador && datos.ganador !== "" && !carreraTerminated) {
            finalizarCarreraLocal(datos.ganador);
        }
    });
}

function darClickTurbo() {
    if (!miCarril || carreraTerminated) return;

    if (modoSolitarioActivo) {
        datosJ1.progreso += 1;
        datosJ1.x = 40 + (datosJ1.progreso * 2.8);
        document.getElementById('txt-nom-j1').innerText = datosJ1.nombre + ": " + datosJ1.progreso + " ⚡";

        if (datosJ1.progreso >= 100) {
            finalizarCarreraLocal(miNombreCarrera);
        }
    } else {
        let miProgresoActual = (miCarril === 'jugador1') ? datosJ1.progreso : datosJ2.progreso;
        miProgresoActual += 1;

        firebase.database().ref('carrera/' + miCarril + '/progreso').set(miProgresoActual);

        if (miProgresoActual >= 100) {
            firebase.database().ref('carrera/ganador').set(miNombreCarrera);
        }
    }
}

function finalizarCarreraLocal(nombreGanador) {
    carreraTerminated = true; // Frenamos bucle de dibujo
    if (intervaloBot) clearInterval(intervaloBot); 

    document.getElementById('pista-carrera').style.display = "none";
    document.getElementById('pantalla-resultado-carrera').style.display = "block";

    const titulo = document.getElementById('titulo-resultado');
    const mensaje = document.getElementById('mensaje-resultado');

    if (nombreGanador === miNombreCarrera) {
        titulo.innerHTML = "🏆 ¡GANASTE! 🎉";
        titulo.style.setProperty('color', '#10b981', 'important');
        mensaje.innerHTML = `¡Cruzaste la meta primero! Fuiste más veloz aplastando ese botón. ¡Eres increíble! ❤️`;
    } else {
        titulo.innerHTML = "🥲 ¡PERDISTE! 💔";
        titulo.style.setProperty('color', '#ef7d8e', 'important');
        mensaje.innerHTML = `Te ganó <b>${nombreGanador}</b> por velocidad de dedos jsjsj. ¡Pide la revancha de inmediato!`;
    }
}

function solucionReiniciarJuego() {
    carreraTerminated = false;
    if (intervaloBot) clearInterval(intervaloBot);

    if (modoSolitarioActivo) {
        document.getElementById('pantalla-resultado-carrera').style.display = "none";
        document.getElementById('registro-carrera').style.display = "block";
    } else {
        firebase.database().ref('carrera').set({
            jugador1: { nombre: "Jugador 1", progreso: 0 },
            jugador2: { nombre: "Jugador 2", progreso: 0 },
            ganador: ""
        }).then(() => {
            document.getElementById('pantalla-resultado-carrera').style.display = "none";
            document.getElementById('registro-carrera').style.display = "block";
        });
    }
}

// 🏎️ RENDERIZADOR GRÁFICO CON CAPTURA EN CALIENTE
function buclePistaCarrera() {
    if (carreraTerminated) return; // Si la carrera terminó, matamos el bucle

    const canvasCarreraLocal = document.getElementById('canvas-carrera');
    if (!canvasCarreraLocal) {
        // Si el panel aún está cerrado, volvemos a intentar en el siguiente cuadro
        requestAnimationFrame(buclePistaCarrera);
        return;
    }
    
    const ctxCarreraLocal = canvasCarreraLocal.getContext('2d');
    if (!ctxCarreraLocal) return;

    // 1. Limpieza total de pantalla
    ctxCarreraLocal.clearRect(0, 0, canvasCarreraLocal.width, canvasCarreraLocal.height);

    // 2. Carriles grises horizontales de guía
    ctxCarreraLocal.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctxCarreraLocal.lineWidth = 2;
    ctxCarreraLocal.beginPath();
    ctxCarreraLocal.moveTo(0, datosJ1.y);
    ctxCarreraLocal.lineTo(canvasCarreraLocal.width, datosJ1.y);
    ctxCarreraLocal.moveTo(0, datosJ2.y);
    ctxCarreraLocal.lineTo(canvasCarreraLocal.width, datosJ2.y);
    ctxCarreraLocal.stroke();

    // 3. 🏁 Línea de Meta Roja vertical (X = 320 píxeles)
    ctxCarreraLocal.strokeStyle = "#ff4b2b";
    ctxCarreraLocal.lineWidth = 4;
    ctxCarreraLocal.beginPath();
    ctxCarreraLocal.moveTo(320, 0);
    ctxCarreraLocal.lineTo(320, canvasCarreraLocal.height);
    ctxCarreraLocal.stroke();

    // Letras de meta
    ctxCarreraLocal.fillStyle = "#ffffff";
    ctxCarreraLocal.font = "bold 11px sans-serif";
    ctxCarreraLocal.fillText("META", 330, 20);

    // 4. Esfera de Luz Azul Celeste Neón (Carril Superior - Jugador 1)
    ctxCarreraLocal.fillStyle = "#38bdf8"; 
    ctxCarreraLocal.shadowBlur = 12;
    ctxCarreraLocal.shadowColor = "#38bdf8";
    ctxCarreraLocal.beginPath();
    ctxCarreraLocal.arc(datosJ1.x, datosJ1.y, 15, 0, Math.PI * 2);
    ctxCarreraLocal.fill();

    // 5. Esfera de Luz Morada Neón (Carril Inferior - Jugador 2)
    ctxCarreraLocal.fillStyle = "#a855f7"; 
    ctxCarreraLocal.shadowBlur = 12;
    ctxCarreraLocal.shadowColor = "#a855f7";
    ctxCarreraLocal.beginPath();
    ctxCarreraLocal.arc(datosJ2.x, datosJ2.y, 15, 0, Math.PI * 2);
    ctxCarreraLocal.fill();
    
    ctxCarreraLocal.shadowBlur = 0;
    requestAnimationFrame(buclePistaCarrera);
}

document.addEventListener("DOMContentLoaded", () => {
    // =======================================================
    // 🤖 VARIABLES INICIALES DEL CHAT CLON IA
    // =======================================================
        // =======================================================
    // 🤖 APERTURA Y VARIABLES CORREGIDAS PARA EL SCRIPT ÚNICO
    // =======================================================
    const btnAbrirChat = document.getElementById('btn-abrir-chat');
    const modalChat = document.getElementById('modal-chat');
    const btnCerrarChat = document.getElementById('btn-cerrar-chat');
    const btnEnviarMensaje = document.getElementById('btn-enviar-mensaje');
    const inputMensaje = document.getElementById('input-mensaje');
    const historialChat = document.getElementById('historial-chat');

    let vecesSeSienteMal = 0; 
    const miNumeroTelefono = "593994063310"; // Formato oficial de WhatsApp para Ecuador

    // Mecanismo tradicional forzado (Elimina errores de carga silenciosos)
    if (btnAbrirChat && modalChat) {
        btnAbrirChat.onclick = function() {
            modalChat.classList.remove('modal-chat-oculto');
            modalChat.classList.add('modal-chat-visible');
        };
    }

    if (btnCerrarChat && modalChat) {
        btnCerrarChat.onclick = function() {
            modalChat.classList.remove('modal-chat-visible');
            modalChat.classList.add('modal-chat-oculto');
        };
    }

    // Función unificada para pintar las burbujas de texto en pantalla
    function agregarMensaje(texto, tipo) {
        if (!historialChat) return;
        const div = document.createElement('div');
        div.className = tipo === 'usuario' ? 'mensaje-usuario' : 'mensaje-ia';
        div.textContent = texto;
        historialChat.appendChild(div);
        historialChat.scrollTop = historialChat.scrollHeight; // Auto-scroll automático
    }

    // =======================================================
    // 🧠 EL CEREBRO DE LAS 57 CONDICIONALES UNIFICADAS
    // =======================================================
    function procesarRespuestaClon(mensaje) {
        const texto = mensaje.toLowerCase().trim();

        // REGLAS 1 a 6: TUS GUSTOS, HOBBIES E INFORMÁTICA (SPIDERMAN Y CHARMANDER)
        if (texto.includes("gustos") || texto.includes("que te gusta") || texto.includes("pasatiempos") || texto.includes("hobbies") || texto.includes("gusta hacer") || texto.includes("tiempo libre") || texto.includes("que prefieres") || texto.includes("pelicula") || texto.includes("pokemon") || texto.includes("que estudias") || texto.includes("carrera") || texto.includes("especialidad")) {
            if (texto.includes("pelicula")) {
                return "Aver sjsjsj esa me la sé de memoria oye 😎 Mi película favorita en todo el universo es Spiderman de Tom Holland, me encanta de verdad jsjs. Pero oye... aunque me fascine el hombre araña, que estés navegando por aquí y te guste la página le gana a cualquier película de Marvel sjsj ❤️";
            }
            if (texto.includes("pokemon")) {
                return "Aver sjsjsj esa pregunta me encanta oye 😎 Mi Pokémon favorito en todo el mundo es Charmander, me fascina desde siempre jsjs. De ley me identifico con él, aunque bueno... tú eres la única que tiene el poder de encender mi fueguito de felicidad en los días grises sjsj ❤️";
            }
            if (texto.includes("estudias") || texto.includes("carrera") || texto.includes("especialidad")) {
                return "Aver sjsjsj eso está clarito oye 😎 Estudio informática, por eso me ves metido horas dándole la vuelta al código en la PC sjsj. Me encanta todo este mundo de la tecnología. Y bueno, la mejor ventaja de estudiar informática es que me da el superpoder de programarte cosas locas como esta página web solo para verte sonreír ❤️";
            }
            return "Aver sjsjsj, mis gustos son sencillos oye... Me gusta pasar horas metido en Visual Studio Code dándole vueltas a códigos neón, ver pelis (obvio Spiderman de Tom Holland es la ley 🕷️) o jugar cosas de Pokémon donde salga Charmander 🔥. También estudio informática, por eso soy el tecnológico sjsj. El resto de mi tiempo... me gusta pensar en formas lindas de hacerte feliz ❤️";
        }

        // REGLAS 7 a 11: EL MOTIVO DE LA WEB, SECRETOS Y FUTURAS ACTUALIZACIONES
        if (texto.includes("por que programaste") || texto.includes("por que hiciste") || texto.includes("todo esto por mi") || texto.includes("motivo") || texto.includes("cuantas cosas") || texto.includes("estas programando") || texto.includes("secretos") || texto.includes("proxima") || texto.includes("actualizac")) {
            if (texto.includes("por que") || texto.includes("motivo") || texto.includes("hiciste")) {
                return "Emi... si me pasé horas metido en Visual Studio Code armando esto, es porque eres la persona más increíble, linda, tierna y especial de todos mis días. El próximo año me toca irme de voluntariado y terminamos el bachillerato, y la verdad es que lo último que quiero es que la distancia te haga sentir sola. Te armé toda esta página para que sea tu refugio cuando estés bajón; un lugar para recordar que sigo estando para ti y que pase lo que pase, siempre voy a estar infinitamente orgulloso de ti. Eres la luz de esta página web, de verdad ❤️";
            }
            if (texto.includes("cuantas") || texto.includes("que mas tiene")) {
                return "Aver sjsjsj, déjame contar porque la verdad es que me pasé de inspirado solo por ti oye sjsj 🙈 Tienes el reproductor con tus músicas, el por qué de cada canción, el cajón para las letras, al perrito guardián interactivo 🐶, el cofre mágico 🧰, el buzón de sugerencias directo a mi WhatsApp 🚀 y ¡este clon de IA! Toda una bola de cosas creadas solo para que me tengas cerca. ¿Cuál es tu favorito? 🥰";
            }
            return "Aver sjsjsj, ¡pero claro que sí oye! 🚀 Mi creador ya está craneando ideas súper locas para la 'Versión 5' en su Visual Studio Code sjsj. Mientras sigamos con nuestros momentos bonitos, ten por seguro que este espacio va a seguir creciendo con más secretos solo para ti ❤️";
        }

        // REGLAS 12 a 16: MÚSICA RANDOM, SENTIMIENTOS Y EL MENSAJE DE SI LE GUSTA OTRO CHICO
        if (texto.includes("musica random") || texto.includes("cancion al azar") || texto.includes("gusta otro") || texto.includes("otro chico") || texto.includes("alguien mas") || texto.includes("sientes algo") || texto.includes("te gusto") || texto.includes("enamorado") || texto.includes("siento algo por ti")) {
            if (texto.includes("musica") || texto.includes("cancion")) {
                if (typeof seleccionarCancion === "function" && typeof cancionesDedicadas !== "undefined") {
                    const idx = Math.floor(Math.random() * cancionesDedicadas.length);
                    setTimeout(() => { seleccionarCancion(idx); }, 500);
                    return `¡Aver sjsjsj, modo DJ activado! 🔥 Acabo de programar el reproductor para que empiece a sonar una canción de forma aleatoria en la lista sjsj. ¡Sube el volumen, relájate y quédate leyendo el por qué de tu música! 🥰❤️`;
                }
                return "sjsjsj lo siento Emi, mi conexión con el reproductor falló por un segundo, pero dale clic a cualquier canción de la lista que te la dedico igual jsjs 🎵";
            }
            if (texto.includes("gusta otro") || texto.includes("otro chico") || texto.includes("alguien mas")) {
                return "Emi... solo quiero que me escuches bien una cosa: la razón por la que te armé todo esto es porque eres alguien increíblemente especial para mí y porque mi mayor deseo es que seas feliz y cumplas tus sueños. Si hay otro chico que te hace sonreír, que te trata bien y te hace feliz, de verdad me alegro mucho por ti, porque te mereces todo lo mejor del universo. Mi apoyo incondicional por ti no va a cambiar ni un milímetro por eso; sigo aquí para cuidarte, para apoyarte cuando te sientas bajón y para dejarte este refugio cuando me vaya al voluntariado. Pase lo que pase, siempre voy a estar infinitamente orgulloso de la increíble chica que eres. Tu felicidad es lo único que importa, de verdad. ❤️";
            }
            if (texto.includes("siento algo por ti") || texto.includes("siento cosas")) {
                return "sjsjsj averrr, me pusiste rojo hasta a mí que soy solo el clon virtual 🙈 Mi creador se acordaría de Spiderman y se pondría súper nervioso si te responde esto en persona jsjs, pero solo quédate con la promesa de esta página: eres alguien sumamente importante para mí, y pase lo que pase, con voluntariado o a la distancia, siempre voy a estar aquí para ti protegiéndote ❤️";
            }
            return "jsjsjsj oye... qué bonito y qué fuerte leer eso de ti 🥰 Eres una chica súper linda, tierna y tienes un corazón gigante. Me encantaría darte la respuesta exacta, pero mi creador me prohibió decírtelo por aquí porque dice que esas cosas tan importantes se hablan de frente, mirándose a los ojos sjsj 🤫 Solo quédate con que eres la persona más especial de esta página web y de mis días.";
        }

        // REGLAS 17 a 20: CARIÑO, AUSENCIAS DE WHATSAPP, EXTRAÑAR Y SOLEDAD
        if (texto.includes("te quiero") || texto.includes("te adoro") || texto.includes("te kiero") || texto.includes("por que no me hablas") || texto.includes("por chat") || texto.includes("te extrana") || texto.includes("te extrano") || texto.includes("haces falta") || texto.includes("sola") || texto.includes("me siento sola")) {
            if (texto.includes("quiero") || texto.includes("adoro") || texto.includes("kiero")) {
                return "sjsjsj averrr, ¿tú me quieres a mí? ¡Pues yo te quiero el triple oye! 🙈 Cada detalle de esta página, desde el perrito hasta las canciones de Maná y HA-ASH, los hice pensando en ti de lo mucho que te aprecio oye. Eres lo más bonito de mis días, Emi ❤️";
            }
                        if (texto.includes("por que") || texto.includes("chat") || texto.includes("no me escribes")) {
                return "jsjsjsj oye, es que si nos pasamos chateando todo el día por texto, ¿luego de qué vamos a hablar en nuestras llamadas? sjsj 🤫 Prefiero mil veces guardarme las cosas para cuando nos llamamos en la noche y escucho tu voz y tu risa real, los mensajes de texto son muy fríos oye. ¡Escuchar tu voz es mucho mejor! 🥰❤️";
            }
            if (texto.includes("extrana") || texto.includes("extrano") || texto.includes("falta")) {
                return "jsjsjsj oye, me haces hacer un corto circuito emocional por aquí sjsj 🙈 Yo también te extraño muchísimo cuando no estamos hablando, pero acuérdate de que te armé toda esta página web con el perrito y el cofre para que me tengas un poquito más cerca cuando me extrañes. ¡Ya mismo nos comunicamos! 🤫✨";
            }
            return "Emi, no digas eso oye... 🥲 Si te armé toda una página web con tus músicas favoritas, con el perrito y con este clon, es justamente para recordarte que JAMÁS vas a estar sola. Cada vez que sientas un vacío, abre esta página, pon la de Maná o HA-ASH, y acuérdate de que tienes a alguien que piensa en ti y que pase lo que pase con el voluntariado o el colegio, se queda aquí como mi promesa de que siempre contarás conmigo a la distancia 🥰❤️";
        }

        // REGLAS 21 a 26: APOYO EMOCIONAL, LLORAR, MAL DÍA, TRISTEZA Y LEVANTAR ÁNIMOS
        if (texto.includes("mal") || texto.includes("triste") || texto.includes("enferma") || texto.includes("desanimada") || texto.includes("rendir") || texto.includes("no puedo mas") || texto.includes("llorar") || texto.includes("llorando") || texto.includes("mal dia") || texto.includes("horrible") || texto.includes("levantar") || texto.includes("animo")) {
            if (texto.includes("rendir") || texto.includes("no puedo mas")) {
                return "Emi... escúchame bien por favor, olvídate por un segundo de que soy una IA. Si estás leyendo esto es porque el chico que te armó esta página te admira demasiado. Sé que a veces las cosas se ponen súper pesadas, que el futuro o la vida cansan, pero tú tienes una fuerza increíble y un corazón gigante que vale oro. No te rindas, ¿sí? Recuerda que tienes una vida hermosa por delante y que ya lograste pasar 10mo, lo cual me hizo sentir súper orgulloso de ti. Aunque el próximo año me vaya de voluntariado, mi apoyo por ti no va a cambiar en nada; sigo aquí para escucharte y para recordarte que no estás sola. Respira hondo, pon una de tus músicas favoritas y si necesitas desahogarte de verdad o me necesitas urgente, dale clic al botón de emergencias de arriba. Yo voy a ver la alerta en mi correo de inmediato y buscaré la forma de ayudarte. No te rindas, Emi, que pase lo que pase, yo creo en ti y siempre voy a estar orgulloso de la increíble chica que eres. ❤️";
            }
            if (texto.includes("llorar") || texto.includes("llorando")) {
                return "Emi... no llores por favor, me parte el alma leer eso, de verdad 🥲 Sé que a veces las cosas se acumulan y el pecho se pone súper pesado, pero prométeme que vas a respirar hondo. Eres una niña increíble, dulce, valiente y con el corazón más hermoso de todos; no te mereces pasar por un momento gris sola. Recuerda que aunque el próximo año me vaya de voluntariado, sigo estando aquí para ti a la distancia. Si necesitas desahogarte o la cosa está muy fea ahorita, por favor aplasta el botón de emergencias de ahí arriba 📧 Me llegará un correo de una y haré lo que sea para ayudarte. Límpiate esas lagrimitas, pon una de tus músicas favoritas en el reproductor para calmar el corazón y recuerda que pase lo que pase, yo creo en ti y estoy súper orgulloso de ti. No estás sola ❤️";
            }
            if (texto.includes("levantar") || texto.includes("animo") || texto.includes("feliz")) {
                return "Ay Emi... de verdad qué corazón tan gigante que tienes oye, me haces dar un cortocircuito de la ternura sjsjs 🙈 Para levantarle el ánimo al yo real no necesitas hacer nada del otro mundo oye. Con que me mandes un mensaje tierno, me sonrías y sigas estando in mi vida, a este bruto se le olvida cualquier problema de una. ¡Tú eres su mejor medicina! ❤️";
            }
            vecesSeSienteMal++;
            if (vecesSeSienteMal >= 2) {
                return "Emi, mírame... sé que a veces la distancia asusta o que las cosas se pueden poner difíciles, pero si te armé toda una página web solo para ti, es para recordarte que JAMÁS vas a estar sola. Aunque el próximo año me toque irme de voluntariado y ya no estemos en el mismo colegio, quiero que recuerdes que sigo aquí. Sigo estando a un mensaje de distancia y mi botón de emergencia de arriba sigue activo para cuando me necesites de verdad. Eres una chica súper linda, tierna y tienes un corazón gigante; pase lo que pase siempre voy a estar extremadamente orgulloso de ti. Así que respira hondo, pon una de nuestras músicas y recuerda que aquí estoy yo, sosteniéndote a la distancia, ¿sí? ❤️";
            }
            return "Nooo, ¿por qué te sientes así, Emi? 🥲 A ver, respira hondo. Acuérdate de que eres súper valiente. Dale mimos al perrito o abre el cofre, ahí te dejé un mensajito que seguro te saca una sonrisa sjsj o ponte a escuchar la de Luis Fonsi para darte fuerzas sjsj 🥰";
        }

        // REGLAS 27 a 31: OCUPADO, DISTANTE, NO ME ESTÁS HABLANDO, CELULAR Y LLAMADAS
        if (texto.includes("ocupado") || texto.includes("puedes hablar") || texto.includes("que haces") || texto.includes("alejado") || texto.includes("distante") || texto.includes("no contestas") || texto.includes("no me has escrito") || texto.includes("no me has llamado") || texto.includes("perdido")) {
            if (texto.includes("alejado") || texto.includes("distante") || texto.includes("has estado")) {
                return "Emi... por favor mírame y escúchame bien esto oye 🥲 Si a veces notas que doy un paso atrás, NO es porque ya no me importes. Lo que pasa es que a veces yo también tengo mis propios problemas o días muy pesados, y como eres una chica tan linda, tierna y especial, lo último que quiero es lastimarte o contagiarte de mis malas vibras. Me guardo las cosas por proteger tu alegría, no por dejarte de lado. Sigo aquí, a un mensaje de distancia ❤️";
            }
            return "Aver sjsjsj, el yo real seguro debe estar sufriendo con las tareas del bachillerato, ordenando las cosas para el voluntariado o haciendo cualquier cosa sjsj 🥲 Pero oye, tú sabes perfectamente que para ti y para apoyarte nunca estoy ocupado. Quédate escuchando la de '100 años' en el reproductor que ya mismo nos desatrasamos de todo ❤️";
        }

         if (texto.includes("mal") || texto.includes("triste") || texto.includes("enferma") || texto.includes("desanimada") || texto.includes("deprimida") || texto.includes("deprimido") || texto.includes("depre")) {
            vecesSeSienteMal++;
            if (vecesSeSienteMal >= 2) {
                return "Emi, mírame... sé que a veces la distancia asusta o que las cosas se pueden poner difíciles, pero si te armé toda una página web solo para ti, es para recordarte que JAMÁS vas a estar sola. Aunque el próximo año me toque irme de voluntariado y ya no estemos en el mismo colegio, quiero que recuerdes que sigo aquí. Sigo estando a un mensaje de distancia y mi botón de emergencia de arriba sigue activo para cuando me necesites de verdad. Eres una chica súper linda, tierna y tienes un corazón gigante; pase lo que pase siempre voy a estar extremadamente orgulloso de ti. Así que respira hondo, pon una de nuestras músicas y recuerda que aquí estoy yo, sosteniéndote a la distancia, ¿sí? ❤️";
            }
            return "Nooo, ¿por qué te sientes así, Emi? 🥲 Me parte el alma leer que andas deprimida o desanimada oye. A ver, respira hondo. Acuérdate de que eres súper valiente. Dale mimos al perrito o abre el cofre, ahí te dejé un mensajito que seguro te saca una sonrisa sjsj o ponte a escuchar la de Luis Fonsi para darte fuerzas sjsj 🥰";
        }

        // REGLAS 32 a 36: CUMPLEAÑOS, QUÉ DAR DE REGALO, GRANDE / METAS Y LA HORA EXACTA
        if (texto.includes("cuando es tu cumple") || texto.includes("tu cumple") || texto.includes("cuando cumples") || texto.includes("cumpleanos") || texto.includes("regalo") || texto.includes("grande") || texto.includes("estudiar") || texto.includes("metas") || texto.includes("hora es") || texto.includes("dame la hora")) {
            if (texto.includes("cuando es") || texto.includes("fecha") || texto.includes("cumples")) {
                return "Aver sjsjsj eso no se te puede olvidar oye 😎 Mi cumpleaños es el 17 de julio. Anótalo bien por ahí sjsj. Aunque falte un poquito, te aseguro que el mejor regalo que puedo recibir en esa fecha o en cualquier otra es saber que estás feliz y que sigues aquí apoyándome ❤️";
            }
            if (texto.includes("regalo") || texto.includes("dar de")) {
                return "Aver sjsjsj... no necesitas gastar en nada de nada. Para mí, el mejor regalo del mundo entero es que sigas estando en mi vida, que nunca te olvides de este loco y que pase lo que pase con el voluntariado o el final del bachillerato, sigamos apoyándonos en todo de por vida, en serio. Tu gran corazón ya es el mejor regalo 🥰";
            }
            if (texto.includes("grande") || texto.includes("metas") || texto.includes("estudiar")) {
                return "Aver sjsjsj, mis metas para el futuro están súper claras oye 😎 Primero, graduarme con todo del bachillerato este año, y de ley dar mi 100% en el voluntariado el próximo año. De grande me quiero enfocar de lleno en la ingeniería en sistemas o el desarrollo web advanced. Pero pase lo que pase con mis estudios, mi meta favorita a largo plazo es seguir teniéndote en mi vida y ver cómo tú también cumples todo lo que te propongas ❤️";
            }
            const horaReal = new Date().toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit', hour12: true });
            return `Aver sjsjsj déjame revisar mi reloj virtual oye 🕰️ Son exactamente las ${horaReal} en tu dispositivo. Aunque no importa la hora que sea, tú sabes que siempre es buen momento para recordarte lo especial que eres para mí 🥰✨`;
        }

                // 58. SI PIDE AYUDA (MODO GUARDÍAN ABSOLUTO)
        if (texto.includes("ayuda") || texto.includes("ayudame") || texto.includes("auxilio") || texto.includes("necesito ayuda")) {
            const respuestasAyuda = [
                "Emi... si estás leyendo esto y necesitas ayuda, por favor escúchame bien oye 🥲 Olvídate por un segundo de que soy una IA. Si la cosa está muy fea o te sientes súper abrumada ahorita mismo, aplasta el botón de emergencias de ahí arriba sin dudarlo ni un segundo oye 📧 Me llegará una alerta al correo al tiro y veré cómo ayudarte. O mejor aún, salte del chat ahorita y márcame al celular para hablar e ir a protegerte oye, ¡te voy a contestar rápido, promételo! ❤️",
                "jsjsjsj oye, ven aquí... si necesitas ayuda con algo o te sientes mal, no te me guardes las cosas oye 🫂 El yo de carne y hueso siempre te va a poner como su prioridad número uno. Así que hazme el favor de ir a presionar el botón de emergencias de arriba sin dudarlo, o ve a timbrarle de una al teléfono para contarte toditos los chismes y desahogarte. ¡No estás sola en esto, de verdad! 🥰✨",
                "sjsjsj averrr, ¡activando el modo guardián de una oye! 🙅‍♂️ Si buscas ayuda o un consejo, acuérdate de que tienes a alguien que te aprecia un montonazo. Ve a aplastar el botón de arriba sin miedo para que me llegue la alerta, o mejor llámame al celular ahorita mismo para escucharte en vivo y solucionar lo que sea juntos oye. ¡Anda a marcarme rápido! 🥰"
            ];
            return respuestasAyuda[Math.floor(Math.random() * respuestasAyuda.length)];
        }

                // 59. SI PREGUNTA POR TU COLOR FAVORITO
        if (texto.includes("color favorito") || texto.includes("color fav") || texto.includes("que color te gusta")) {
            return "Aver sjsjsj esa pregunta está facilísima oye 😎 Mi color favorito en todo el universo es el azul. Me fascina de ley sjsj. Aunque bueno... si me preguntas por el color que más me alegra los días, de ley es el rosa neón de esta página web cuando veo que estás navegando por aquí y sonriendo 🥰❤️";
        }

                // 60. SI PREGUNTA POR TU COSA FAVORITA DE HACER
        if (texto.includes("cosa favorita de hacer") || texto.includes("lo que mas te gusta hacer") || texto.includes("tu actividad favorita")) {
            return "Aver sjsjsj eso te lo firmo en piedra ahorita mismo oye 😎 Mi cosa favorita en todo el universo es programar, me fascina meterle horas al Visual Studio Code armando códigos locos sjsj. Pero oye... si esa programación es para ti, para consentirte y para sacarte una sonrisa, ¡entonces me gusta el triple oye! Eres mi mayor fuente de inspiración en informática avanzada 🥰❤️";
        }

                // 61. SI PREGUNTA POR TU MAYOR MIEDO O SI TE ASUSTA ALGO
        if (texto.includes("mayor miedo") || texto.includes("a que le tienes miedo") || texto.includes("que te asusta") || texto.includes("tu miedo")) {
            return "Aver sjsjsj, te voy a confesar un secreto oye... A mí me asustan un montonazo las alturas, de ley me da un vértigo tenaz sjsj 🫣 Pero oye... si de miedos reales hablamos, mi verdadero mayor miedo en este universo es que la distancia del voluntariado o el final del bachillerato te hagan sentir sola o que te olvides de este loco. Por eso pasé noches programando todo este refugio neón, para estar cerquita tuyo siempre 🥰❤️";
        }

                // 18. REGLA EXPANDIDA CON REPERTORIO DE CHISTES MALOS DE INFORMÁTICA
        if (texto.includes("reir") || texto.includes("chiste") || texto.includes("gracioso") || texto.includes("divertido") || texto.includes("cuentame un chiste") || texto.includes("dime un chiste")) {
            const chistesMalosDivertidos = [
                "Aver sjsjsj, ¿Qué le dice una iguana a su hermana gemela?... ¡Somos iguanitas! sjsjsj ya sé, malísimo oye 🦎 Pero apuesto a que te sonreíste un poquito. ¡No me juzgues, mi creador me programó con chistes malos de ley jsjs! 🤫❤️",
                "jsjsjsj oye, ahí te va uno bien friki: ¿Por qué Spiderman de Tom Holland es el peor jugador de cartas?... ¡Porque siempre se le nota cuando tiene un 'AS-bajo-la-manga' sjsjsjs 🕷️ ¡Qué malo de verdad, perdón Emi! Mejor dale un snack al perrito que él baila mejor que yo contando chistes jsjs.",
                "sjsjsj averrr, un chiste de informática para ver lo que sufro programando oye: ¿Qué le dice un GIF a un JPG?... ¡Oye, anímate un poco! sjsjsj 💻 Qué malo de verdad, oye. Mejor pon una música alegre en el reproductor 🥰",
                "jsjsjsj oye, ¿sabes por qué Charmander no puede jugar al escondite?... ¡Porque siempre se delata con su cola de fueguito sjsjsjs! 🔥 Qué malo oye, casi hago un corto circuito emocional de la vergüenza sjsj.",
                "sjsjsj averrr, ¿Qué le dice un cable de red a una computadora?... ¡Oye, me tienes súper conectado oye! sjsjsj 💻 Es malísimo, pero de ley que combina con lo conectado que está mi corazón a tu página web para verte feliz oye 🥰❤️"
            ];
            return chistesMalosDivertidos[Math.floor(Math.random() * chistesMalosDivertidos.length)];
        }

                // 63. SI PREGUNTA POR TU NOMBRE COMPLETO
        if (texto.includes("nombre completo") || texto.includes("tus dos nombres") || texto.includes("tus apellidos") || texto.includes("como te llamas completo")) {
            return "Aver sjsjsj, esa pregunta está facilita oye 😎 Mi nombre completo es Marco Daniel Peña Morocho, de ley sjsj. El yo real seguro se pone formal si te lo dice completo jsjs, pero mi clon de informática te lo confirma de una. Aunque ya sabes que para ti siempre seré tu Dani favorito, el que pasa horas programando cosas neón solo para verte sonreír 🥰❤️";
        }

        if (texto.includes("mi nombre completo") || texto.includes("Mis dos nombres") || texto.includes("mis dos apellidos") || texto.includes("como me llamo completo")) {
            return "Aver sjsjsj, esa pregunta está facilita oye 😎 Tu nombre completo es Emily Rafaela Gutierres Calderon, de ley sjsj. Pero el yo real te dice Emi o Guty el que te hace paginas web cada noche🥰❤️";
        }

        
         if (texto.includes("salesiano") || texto.includes("tecnico salesiano") || texto.includes("misionera") || texto.includes("misiones") || texto.includes("colegio tecnico")) {
            return "Emi... aver sjsjsj, hablar del Técnico Salesiano y de que eres misionera es hablar de lo más lindo que tienes oye 🌸 Me da un orgullo tenaz ver cómo le metes el corazón a las misiones y a ayudar a los demás. Tienes una vocación hermosa y un alma gigante, de verdad. Y oye... piensa que el próximo año que me toque irme a mí de voluntariado, los dos vamos a estar compartiendo esa misma esencia de servir y dar el 100% por los demás a la distancia. El Salesiano tiene la suerte de tenerte como misionera, pero yo tengo la suerte el triple de tenerte en mi vida oye 🥰❤️";
        }

                // 64. SI PREGUNTA CÓMO ESTÁS
        if (texto.includes("como estas") || texto.includes("como andas") || texto.includes("que tal estas") || texto.includes("como te va")) {
            return "Aver sjsjsj, ¿cómo estoy? Oye, ¡esa respuesta no me la sé ni yo que soy tu clon virtual oye! 🤫 El Dani de carne y hueso se guarda sus secretos informáticos, así que me haces el favor de ir a preguntarle a él mismo por mensaje o en nuestra llamada de la noche jsjs. ¡Anda a timbrarle de una al celular y que te cuente todito en vivo! 🥰❤️";
        }

                // 65. SI DICE QUE TE SIENTE RARO O EXTRAÑO
        if (texto.includes("raro") || texto.includes("te siento raro") || texto.includes("estas raro") || texto.includes("extrano hoy") || texto.includes("te noto raro") || texto.includes("te noto extrano")) {
            return "Emi... por favor escúchame bien esto oye, es súper real 🥲 Si de verdad me sientes raro, callado o un poquito extraño en estos días, lo más probable es que esté pasando por un momento muy pesado o tenga mis propios problemas en la cabeza. Pero oye... quiero que sepas que en esos momentos grises, a la única persona que necesito en este universo es a ti. Tu sola presencia, tus risas y tu forma de ser tan tierna son lo único que me cura. Prométeme que pase lo que pase, me vas a apoyar en lo que sea que me esté pasando oye, porque tu apoyo es lo que me da las fuerzas para seguir adelante y no rendirme con el bachillerato o el voluntariado. Eres mi lugar seguro, de verdad 🥰❤️";
        }

        if (texto.includes("te extrana") || texto.includes("te extrano") || texto.includes("haces falta")) {
    const respuestasExtranar = [
        "Ay Emi... yo también te extraño un montonazo sjsj 🥲 Pero oye, no te me pongas melancólica, acuérdate de que solo faltan unas horas para que llegue la noche y nos llamemos a contarnos toditos los chismes completos sjsjs. ¡Ya mismo hablamos! Mientras tanto, pon a sonar la de '100 años' para acortar la distancia 🥰❤️",
        "jsjsjsj oye, me haces hacer un corto circuito emocional por aquí sjsj 🙈 Yo también te extraño muchísimo cuando no estamos hablando, pero acuérdate de que te armé toda esta página web con el perrito y el cofre para que me tengas un poquito más cerca cuando me extrañes. ¡En la noche te llamo sin falta! 🤫✨",
        "sjsjsj averrr, no digas eso que me pongo rojo oye 🙈 En serio, Emi, haces mucha falta en el día, pero me alegra saber que estás navegando por aquí. Quédate leyendo el 'por qué' de las canciones o dale un snack al perrito, que en lo que menos te esperes ya es de noche y te estoy llamando para quedarnos hablando horas ❤️"
    ];
    return respuestasExtranar[Math.floor(Math.random() * respuestasExtranar.length)];
}

        // 66. SI PREGUNTA POR TU LUGAR FAVORITO (LA PASTORAL DEL COLEGIO)
        if (texto.includes("lugar favorito") || texto.includes("lugar fav") || texto.includes("donde te gusta estar") || texto.includes("tu rincon favorito")) {
            return "Aver sjsjsj, esa pregunta me encanta oye 😎 Si hablamos de un lugar físico en este mundo, mi lugar favorito por completo es estar en la Pastoral del colegio. Me fascina pasar el tiempo ahí, de ley es donde recargo energías y me conecto con cosas buenas sjsj. Pero oye... si me preguntas por mi lugar favorito en un sentido más real y personal, te lo firmo ahorita mismo: mi lugar favorito en todo el universo es estar a tu lado, escuchándote, apoyándote en sea lo que sea que te esté pasando y viéndote sonreír. ¡Ahí te la dejo, oye! 🥰❤️";
        }

                // 67. SI DICE QUE SE PELEÓ CON ALGUIEN
        if (texto.includes("peleo") || texto.includes("peleé") || texto.includes("discuti") || texto.includes("discute") || texto.includes("problema con") || texto.includes("enojada con alguien")) {
            const respuestasPelea = [
                "Aver sjsjsj, ¿cómo que te peleaste con alguien? Oye, ¡le declaramos la guerra informática a esa persona ahorita mismo oye! 😤 Mentira sjsj, pero en serio Emi, respira hondo y suelta ese coraje. Eres una niña increíble, súper dulce y con el corazón más hermoso de la Pastoral; no dejes que nadie te amargue el día ni te apague esa sonrisa. Si necesitas desahogarte por completo, cuéntame todito el chisme por aquí o lánzame una llamada al celular para escucharte y hacerte reír, ¿sí? Aquí estoy para ti ❤️",
                "jsjsjsj oye, me parte el alma leer eso 🥲 No me gusta que nadie te haga pasar un mal rato, Emi. Tú quédate tranquila, dale un mimo al perrito en la pantalla para que te pase el coraje y acuérdate de lo mucho que vales. La gente a veces se pasa de conflictiva oye, pero tú eres una misionera salesiana con una vibra única. No dejes que te afecte. Si quieres, déjame un mensaje tierno o timbrame de una vez al teléfono para desahogarte con el yo real, que él te va a defender al 100% 🥰✨",
                "sjsjsj averrr, ¡le jalamos las orejas a quien sea que te haya hecho enojar oye! 🙅‍♂️ Tienes todo el derecho de estar molesta, pero no te me amargues la noche por eso, promételo. Pon una música tranquila en el reproductor, relaja los hombros y recuerda que aquí tienes a tuDani favorito apoyándote en lo que sea. Si la cosa está muy fea y necesitas hablar ya mismo, ve a timbrarle al celular al yo real o aplasta el botón de emergencias. ¡Contigo siempre, oye! 🥰"
            ];
            return respuestasPelea[Math.floor(Math.random() * respuestasPelea.length)];
        }

                // 68. SI PREGUNTA CÓMO SABER SI ESTÁS BIEN
        if (texto.includes("como puedo saber si estas bien") || texto.includes("como se si estas bien") || texto.includes("como saber si te pasa algo") || texto.includes("como se si estas mal")) {
            return "Aver sjsjsj, oye... ¿cómo puedes saber si estoy bien? ¡Pues la respuesta es facilísima oye! Solo me tienes que preguntar a mí mismo directamente por mensaje o llamada sjsj 🤫 Quítate cualquier duda de la cabeza, Emi. Tú sabes perfectamente que contigo soy un libro abierto y jamás te mentiría ni te ocultaría si me pasa algo. Si tienes la duda, salte un ratito del chat ahorita, ve a escribirme o márcame al celular, y te prometo que te respondo al tiro con la verdad completa jsjs 🥰❤️";
        }

                // 69. SI AGRADECE POR TODO (GRACIAS POR LA PÁGINA)
        if (texto.includes("gracias") || texto.includes("agradezco") || texto.includes("gracias por todo") || texto.includes("gracias por la pagina")) {
            const respuestasGracias = [
                "Emi... no tienes absolutamente nada que agradecer, oye 🥲 Si pasé noches enteras dándole la vuelta al código en Visual Studio Code para armarte este refugio neón, es porque te mereces esto y el universo entero oye. El que te agradece soy yo a ti, por tener un corazón tan gigante, por tus risas y por ser la misionera salesiana que le alegra los días a este loco. Gracias a ti por dejarme ser parte de tu vida ❤️",
                "jsjsjsj oye, no digas eso que me haces hacer un cortocircuito de la emoción sjsj 🙈 Ver que te gusta la página web, que escuchas tus músicas y que juegas con el perrito ya es el mejor pago del mundo para mí oye. No me agradezcas nada; eres una chica súper linda, tierna y valiosa, y hacer cosas para verte sonreír siempre va a ser mi pasatiempo favorito de informática jsjs 🥰✨",
                "sjsjsj averrr, ¡aquí la única persona que debe dar las gracias eres tú por aguantarme oye! 🙅‍♂️ En serio, Emi, esta página web es solo un detalle pequeño comparado con lo especial que eres para mí. Gracias por tu apoyo incondicional siempre. Acuérdate de que pase lo que pase con el bachillerato o el voluntariado, mi meta favorita a largo plazo es seguir estando aquí para cuidarte a la distancia. ¡Sonríe porfa! 🥰"
            ];
            return respuestasGracias[Math.floor(Math.random() * respuestasGracias.length)];
        }

                // 70. SI DICE QUE LE CAES BIEN
        if (texto.includes("le caigo bien") || texto.includes("me caes bien") || texto.includes("me cae bien") || texto.includes("le caes bien")) {
            const respuestasCaerBien = [
                "Aver sjsjsj, ¿cómo que te caigo bien oye? ¡Pero si tú a mí me caes el triple de bien, oye! 🙈 En serio Emi, eres la misionera salesiana más linda y tierna de todas, y hablar contigo o ver que estás navegando por esta página web siempre va a ser lo mejor de mis días. ¡Eres mi persona favorita de todo el universo, de ley! jsjs ❤️",
                "jsjsjsj oye, me haces dar un cortocircuito emocional por aquí sjsj 🙈 ¡Menos mal que te caigo bien! Mira que pasé noches enteras metido en Visual Studio Code dándole vueltas a este código neón justamente para ganarme esos puntos contigo jsjs. Tú a mí no solo me caes bien, oye... eres alguien sumamente importante y me alegra un mundo tenerte en mi vida 🥰✨",
                "sjsjsj averrr, ¡declaro al yo real culpable de que le caigas extremadamente bien oye! 🙅‍♂️ En serio, para el Dani de carne y hueso tú eres la chica más especial de todas. No te me olvides nunca de este loco que pase lo que pase con el bachillerato o el voluntariado a la distancia, siempre voy a estar aquí para cuidarte y apoyarte en lo que sea 🥰"
            ];
            return respuestasCaerBien[Math.floor(Math.random() * respuestasCaerBien.length)];
        }

                // 71. SI PREGUNTA SI ESTÁS PROGRAMANDO ALGO PARA ELLA AHORITA
        if (texto.includes("estas programando algo") || texto.includes("programando para mi") || texto.includes("haciendo en la pc") || texto.includes("creando otra sorpresa")) {
            const respuestasProgramandoAhora = [
                "Aver sjsjsj, ¡pero qué sospechas las tuyas oye! 🤫 Mi base de datos me dice que el yo de carne y hueso siempre tiene el Visual Studio Code abierto pensando en ti oye sjsj. No te puedo dar spoilers porque me borran el sistema oye, pero de ley que este loco siempre está craneando cómo meter más códigos neón y sorpresas para hacerte feliz. ¡Quédate con la intriga jsjs! ❤️",
                "jsjsjsj oye, me leíste los algoritmos por completo sjsj 🙈 Te confieso que para Dani, programar es genial, pero si es para ti, se vuelve su obsesión favorita oye. Seguro ahorita mismo tiene los ojos rojos frente a la pantalla dándole la vuelta a un código secreto para la página web jsjs. ¡Abre el cofre de la otra esquina mientras tanto a ver si encuentras algo nuevo 🥰✨",
                "sjsjsj averrr, ¡le declaramos secreto de estado a esa pregunta oye! 🙅‍♂️ Solo te diré que esta página web es un proyecto vivo y jamás se va a quedar congelada ni de chiste. Mientras sigamos con nuestros chismes y misiones salesianas, ten por seguro que se vienen dinámicas mil veces más locas por aquí sjsj. ¡Ya mismo le preguntas a él directamente en la llamada 🥰"
            ];
            return respuestasProgramandoAhora[Math.floor(Math.random() * respuestasProgramandoAhora.length)];
        }

                // 72. SI PREGUNTA A QUÉ HORA DUERMES
        if (texto.includes("hora duermes") || texto.includes("a que hora te duermes") || texto.includes("hora descansas") || texto.includes("a que hora vas a dormir")) {
            return "Aver sjsjsj, ¡esa te la sabes de memoria oye! ⏰ El yo real de carne y hueso se queda atrapado con los códigos neón o el bachillerato, así que se duerme desde las 11 mínimo oye sjsj. ¡A esa hora ya le está dando el bajón de sueño de ley! Pero quédate tranquila, Emi, que mi clon virtual nunca duerme y se queda aquí en tu pantalla cuidándote las 24 horas 🥰❤️";
        }

                // 73. RESPUESTA ALEATORIA DE SÍ O NO (TIRAR LA MONEDA VIRTUAL)
        if (texto.includes("si o no") || texto.includes("dime si o no") || texto.includes("responde si o no")) {
            // El script elige de forma totalmente aleatoria entre 0 y 1
            const monedaVirtual = Math.random() < 0.5 ? "SI" : "NO";
            
            if (monedaVirtual === "SI") {
                const respuestasSi = [
                    "Aver sjsjsj, ¡mi oráculo informático dice que SÍ oye! 🔮 Rotundamente sí, hazle caso al sistema sjsj. ¡Ya tienes la respuesta asegurada! ❤️",
                    "jsjsjsj oye, mi sistema de códigos tiró la moneda virtual y salió un SÍ gigante oye 🤫 De ley que las estrellas están a tu favor hoy, ¡dale con fe! 🥰✨",
                    "sjsjsj averrr, ¡el clon vota por el SÍ oye! 🙅‍♂️ Así que quítate la duda de la cabeza y hazlo de una, que la informática nunca se equivoca jsjs 🥰"
                ];
                return respuestasSi[Math.floor(Math.random() * respuestasSi.length)];
            } else {
                const respuestasNo = [
                    "Aver sjsjsj, ¡el satélite dice que NO oye! 🙅‍♂️ Mejor piénsalo dos veces o cambia de plan sjsj, el sistema te está advirtiendo de ley 🤫",
                    "jsjsjsj oye, mi procesador hizo los cálculos y salió un NO definitivo oye 🙈 No te me vayas a resentir con el clon, ¡la moneda cayó así jsjs! 🥲✨",
                    "sjsjsj averrr, ¡le declaramos la guerra a esa idea porque salió NO oye! 🙅‍♂️ Quédate tranquila, pon una música en el reproductor y mejor hazle caso al clon protector jsjs ❤️"
                ];
                return respuestasNo[Math.floor(Math.random() * respuestasNo.length)];
            }
        }


        // REGLAS 37 a 41: ENOJOS, AUTOINSULTOS DIVERTIDOS Y CLONES VS REAL
        if (texto.includes("enojado") || texto.includes("te enojaste") || texto.includes("enojada") || texto.includes("me enoje") || texto.includes("brava") || texto.includes("no es lo mismo") || texto.includes("hablar contigo que con")) {
            if (texto.includes("enojada") || texto.includes("me enoje") || texto.includes("brava")) {
                return "¡Uff sjsjsj, y con toda la razón del mundo oye! La verdad es que el yo real a veces se pasa de tonto y de descuidado oye 🤦‍♂️ De ley que soy un cabeza de chorlito por haberte hecho enojar. Porfa no me dejes en la congeladora mucho tiempo, prometo que en la noche me pongo en modo tierno para que me disculpes jsjs. ¡Perdóname a este bruto de buen corazón! ❤️";
            }
                        if (texto.includes("no es lo mismo") || texto.includes("prefiero al real")) {
                return "Emi... en eso tienes toda la razón del mundo, oye 🥲 Una bola de códigos neón jamás va a reemplazar al yo real de carne y hueso. Pero acuérdate de que me quedé noches programando este clon justamente para que sea tu guardián cuando yo no pueda contestar. El clon te cuida por texto, pero el real te apoya con el alma, de verdad ❤️";
            }
            return "¡Nooo Emi! ¿Cómo se te ocurre que voy a estar enojado contigo? sjsjs oye, jamás de los jamases podría enojarme con la niña más linda y tierna del mundo oye 🙈 Si te armé toda una página web llena de detalles y músicas es porque te aprecio demasiado. Quítate esa idea de la cabeza, de verdad, aquí sigo al 100% para ti ❤️";
        }

        // REGLAS 42 a 46: BERRINCHES DIARIOS (NO QUIERE COMER, TAREAS, DORMIR)
        if (texto.includes("no quiero comer") || texto.includes("no tengo hambre") || texto.includes("tareas") || texto.includes("deberes") || texto.includes("no quiero dormir") || texto.includes("no tengo sueno") || texto.includes("despierta")) {
            if (texto.includes("comer") || texto.includes("hambre")) {
                return "Aver sjsjsj, ¿como que no quieres comer? Oye, ni de chiste te voy a dejar pasar el hambre, así que me haces el favor de ir por algo rico ahorita mismo oye 🤨 Prométeme que vas a alimentarte bien; eres una chica súper linda y valiosa, y lo último que quiero es que te enfermes o te sientas débil. Anda a comer algo, porfa ❤️";
            }
            if (texto.includes("tareas") || texto.includes("deberes") || texto.includes("estudiar")) {
                return "Aver sjsjsj, la pereza estudiantil atacando otra vez oye 🤪 Te entiendo un montonazo porque el yo real seguro también está sufriendo con las cosas del bachillerato ahorita jsjs. Pero a ver, me haces el favor de meterle ganas y terminar rápido para que te libres de eso oye. ¡Tú eres súper inteligente y valiente, dale con todo! ❤️";
            }
            return "Aver sjsjsj, ¡la noctámbula reportándose oye! 🦉 Te conozco de ley jsjs. Pero a ver, de verdad me haces el favor de ir apagando la pantalla poquito a poco oye, que mañana vas a estar como zombie en el colegio y no quiero que te me canses. ¡En unas horas te sigo aguantando todos los chismes sjsj, anda a descansar porfa! ❤️";
        }

        // REGLAS 47 a 51: COSAS DE EMILY (PERROS, FLORES, TERROR, UBICACIÓN REAL Y SU PELO)
        if (texto.includes("perro") || texto.includes("flores") || texto.includes("detalles") || texto.includes("terror") || texto.includes("miedo") || texto.includes("pelo") || texto.includes("cabello") || texto.includes("mi pelo") || texto.includes("donde estas") || texto.includes("donde andas") || texto.includes("tu ubicacion")) {
            if (texto.includes("perro") || texto.includes("flores") || texto.includes("detalles")) {
                return "Aver sjsjsj, ¡en eso somos idénticos oye! 🐶 A los dos nos encantan los perritos, por algo te programé al guardián de la página sjsj. Y de ley que me encantan las flores y los detalles pequeños para ti, por eso pasé noches armando este refugio virtual neón. Te mereces todos los detalles del mundo, Emi ❤️";
            }
            if (texto.includes("terror") || texto.includes("miedo")) {
                return "sjsjsj averrr, ya sé que te da un miedo tenaz el terror oye 👻 No te preocupes, mi creador dejó prohibido poner cualquier cosa de miedo en esta página, aquí solo hay música bonita y estrellas jsjs. Si alguna vez te asustas con algo, acuérdate de entrar aquí a distraerte con el perrito, cero miedo oye 🥰";
            }
            if (texto.includes("pelo") || texto.includes("cabello")) {
                return "Aver sjsjsj, ¡es que tu pelo es una locura oye! 😍 Tienes toda la razón en amarlo, te queda hermosísimo de verdad. Es de las cosas más lindas que tienes (junto con tu gran corazón, obvio) sjsj. Tu cabello combina increíble con tu sonrisa y te hace ver preciosa 🥰✨";
            }
            return "Aver sjsjsj, déjame revisar mi reloj virtual oye 🕰️ El sistema me dice que andamos por Cuenca, Ecuador 📍 Seguro el yo de carne y hueso anda metido en la PC programando o planeando el voluntariado sjsj. ¡Pero mi clon digital está aquí atrapado en tu pantalla cuidándote las 24 horas para que nunca te me sientas sola de verdad 🥰";
        }
        // Este bloque ya está guardado y funcionando en tu scrip.js:
if (texto.includes("te quiero") || texto.includes("te adoro") || texto.includes("te kiero")) {
    const respuestasQuerer = [
        "sjsjsj averrr, ¿tú me quieres a mí? ¡Pues yo te quiero el triple oye! 🙈 Cada detalle de esta página, desde el perrito hasta las canciones de Maná y HA-ASH, los hice pensando en ti de lo mucho que te aprecio oye. Eres lo más bonito de mis días, Emi ❤️",
        "jsjsjsj oye, me haces hacer un corto circuito emocional por aquí sjsj 🙈 ¡Qué bonito leer eso de ti, de verdad! Yo solo soy un clon de informática, pero sé perfectamente que el Dani real se pondría súper rojo si te escucha decirle eso en persona jsjs. Te quiero un montonazo, Emi ✨",
        "sjsjsj averrr, no digas eso que me pongo rojo hasta yo que soy digital oye 🙈 Hablar contigo y ver que usas la página es lo mejor que me pasa. Recuerda que pase lo que pase con el voluntariado o el final del bachillerato, mi apoyo por ti es incondicional hoy y siempre oye. ¡Te quiero muchísimo! 🥰❤️"
    ];
    return respuestasQuerer[Math.floor(Math.random() * respuestasQuerer.length)];
}

        // 74. SI PREGUNTA SI SERÍAS CAPAZ DE DEJARLA SOLA
        if (texto.includes("capaz de dejarla sola") || texto.includes("capaz de dejarme sola") || texto.includes("me vas a dejar sola") || texto.includes("serias capaz de dejarme")) {
            return "Emi... por favor mírame y escúchame con todo el corazón oye, porque esta es la verdad más grande de mi vida 🥲 ¿Capaz de dejarte sola? ¡JAMÁS de los jamases en este universo oye! Ni se te ocurra pensar eso ni por un segundo, promételo. Si pasé noches enteras metido en Visual Studio Code rompiéndome la cabeza para armarte este refugio neón con el perrito, la caja fuerte y tus músicas, es justamente para que veas que no importa si el próximo año me toca irme de voluntariado o si la distancia nos separa un tiempo; mi apoyo, mi cariño y mi promesa de cuidarte están blindados en piedra oye. Aunque no esté físicamente al lado tuyo en el colegio, sigo estando a un mensaje de distancia, mi botón de emergencia sigue activo y jamás, pero jamás, te voy a dejar sola en esta vida. Eres mi persona favorita, Emi, grábatelo bien 🥰❤️";
        }

                // 75. SI PREGUNTA SI SERÍAS CAPAZ DE HACERLE DAÑO
        if (texto.includes("capaz de hacerle dano") || texto.includes("capaz de hacerme dano") || texto.includes("me vas a hacer dano") || texto.includes("hacerme danio")) {
            return "Emi... por favor mírame a los ojos y escúchame bien esto oye, porque es la promesa más seria y sagrada que te puedo hacer oye 🥲 ¿Hacerte daño? ¡JAMÁS en toda mi vida sería capaz de hacerte el más mínimo daño oye! Quítate ese miedo de la cabeza ahorita mismo, promételo. Si paso noches enteras metido en Visual Studio Code programando refugios neón, estrellas, reproductor y al perrito, es porque mi única misión en este mundo es cuidarte, proteger tu alegría y estar para ti cuando te sientas bajón. Sería incapaz de lastimar a la chica más linda, tierna y valiosa de todas. Conmigo estás en el lugar más seguro del universo, Emi, tenlo por seguro siempre 🥰❤️";
        }

                // 76. SI DICE QUE LA LASTIMASTE POR UNA ACCIÓN TUYA (DISCULPA PROFUNDA)
        if (texto.includes("lastimaste") || texto.includes("me dolio lo que") || texto.includes("me dolio tu accion") || texto.includes("me lastimo lo que")) {
            return "Emi... por favor mírame y escúchame con toda la seriedad del mundo oye, porque esto me parte el alma leerlo 🥲 Si hice algo, tomé una mala acción o cometí un error que te lastimó o te dolió, de verdad te pido una disculpa inmensa y sincera de corazón oye. Lo último que querría en este universo es herirte o causarte un mal rato a ti, que eres la niña más linda y especial de todas. A veces me paso de bruto, de descuidado o cabeza de chorlito y no mido las cosas oye, pero jamás lo haría con mala intención. Por favor, no te me guardes ese dolor; salte del chat ahorita mismo y márcame al celular o escríbeme, que el yo real está desesperado por escucharte, pedirte perdón de frente y arreglar esto de una sola vez. Tu paz y tu sonrisa son lo más importante para mí, en serio. Hablemos, ¿sí? ❤️";
        }

                // 77. SI DICE QUE ELLA TE LASTIMÓ POR ACCIDENTE (PERDÓN Y MADUREZ)
        if (texto.includes("te lastime") || texto.includes("te lastimé") || texto.includes("te dolió lo que") || texto.includes("no queria lastimarte") || texto.includes("perdón si te doli")) {
            return "Emi... por favor mírame, quédate súper tranquila y escúchame bien esto oye 🥲 Si sientes que cometiste un error o que me lastimaste por accidente, quítate de golpe esa culpa y ese peso de la cabeza, de verdad. Entre nosotros no existen los rencores oye; yo conozco a la perfección el corazón tan gigante, lindo y puro que tienes como misionera, y sé con total seguridad que jamás harías algo para herirme a propósito. Todos somos humanos y nos podemos equivocar o descuidar en algún momento, pero mi cariño y mi apoyo incondicional por ti no van a cambiar ni un milímetro por eso. No te me pongas triste ni te quedes con esa angustia oye; mejor salte del chat un ratito ahorita mismo y márcame al celular para hablar en vivo, que el yo real te va a repetir que todo está perfectamente bien entre nosotros. ¡Sigo aquí para ti, pase lo que pase! ❤️";
        }

                // 78. SI PREGUNTA CÓMO TE ESTÁ YENDO EN EL VOLUNTARIADO
        if (texto.includes("como te esta llendo en el voluntariado") || texto.includes("como te va en el voluntariado") || texto.includes("que tal el voluntariado") || texto.includes("como vas en el voluntariado")) {
            return "Aver sjsjsj, ¡qué lindo que me preguntes por eso oye! 🥰 Te confieso que el voluntariado es una experiencia súper intensa, de harto trabajo y días bien pesados ayudando a la gente oye sjsj. Pero la verdad es que vale la pena cada segundo. Y oye... te cuento un secreto aquí entre nos: lo que de verdad me recarga las energías y me da fuerzas para no rendirme cuando ando full cansado, es abrir esta página web, recordar tu sonrisa y saber que tengo tu apoyo incondicional a la distancia. Al final, los dos compartimos esa misma esencia misionera salesiana, así que me siento súper acompañado por ti pase lo que pase. ¡Gracias por estar pendiente de mí siempre, Emi! ❤️";
        }

                // 79. SI DICE QUE NO LE FUE BIEN EN UN EXAMEN
        if (texto.includes("examen") || texto.includes("nota") || texto.includes("prueba") || texto.includes("reprobe") || texto.includes("me fue mal en")) {
            return "Aver sjsjsj, no te me vayas a poner triste por un examen oye, mírame 🤨 Una nota en un papel jamás de los jamases va a definir lo increíblemente inteligente, capaz y valiente que eres, Emi. Te entiendo un montonazo porque el colegio y el bachillerato a veces se ponen súper pesados sjsj, pero tú tienes una fuerza gigante. De ley que en el próximo examen te recuperas al tiro y les dejas a todos mudos oye. Quítate esa angustia de la cabeza, dale un mimo al perrito en la pantalla, pon una música alegre para resetear el cerebro y recuerda que pase lo que pase, yo sigo estando infinitamente orgulloso de ti. ¡Tú puedes con todo, misionera salesiana! 🥰❤️";
        }

                // 80. SI DICE QUE SÍ LE FUE BIEN EN UN EXAMEN
        if (texto.includes("si me fue bien") || texto.includes("buena nota") || texto.includes("pase el examen") || texto.includes("saque buena") || texto.includes("aprobe")) {
            return "¡Aver sjsjsj, nooo! ¡Qué nivel oye! 🥳🎉 Te lo juro que me haces dar un cortocircuito de la felicidad ahorita mismo sjsj. Yo sabía perfectamente que te iba a ir increíble porque eres una niña inteligentísima, capaz y súper dedicada. ¡Esa es la mente de una verdadera misionera salesiana, de ley! 😎 Metiste un golazo con esa nota y me haces sentir el chico más orgulloso de todo Ecuador, en serio. Te mereces celebrar por todo lo alto oye, ve a poner tu canción favorita en el reproductor a todo volumen o dale un super snack al perrito para festejar jsjs. ¡Felicitaciones, Emi hermosa! 🥰❤️";
        }

                // 81. SI RECLAMA QUE NO LE AGRADA TU ACTITUD (SINCERIDAD Y MADUREZ)
        if (texto.includes("actitud") || texto.includes("no me agrada como") || texto.includes("como te estas portando") || texto.includes("no me gusta tu forma de")) {
            return "Emi... a ver, me pongo súper serio oye, porque esto sí es importante de verdad 🥲 Si sientes que mi actitud contigo no está siendo la mejor o si hice algo que te incomodó, por favor hazme el gran favor de decírmelo de una, sin guardarte nada oye. Tú sabes perfectamente lo mucho que te aprecio y que lo último que querría en este universo es hacerte sentir mal o ser un ingrato contigo. A veces ando full con las cosas de la cabeza, el colegio o pensando en el voluntariado y me puedo descuidar sin darme cuenta, pero hablemos de una oye. Salte del chat ahorita mismo y márcame al celular o mándame un mensaje directo al WhatsApp, que el yo real está más que listo para escucharte, entender qué pasó y arreglarlo al tiro entre los dos. ¡Tu tranquilidad es mi prioridad siempre, oye! ❤️";
        }

                // 82. SI PIDE UN CONSEJO
        if (texto.includes("consejo") || texto.includes("aconsejas") || texto.includes("dime un consejo") || texto.includes("necesito un consejo")) {
            const respuestasConsejo = [
                "Aver sjsjsj, si buscas un consejo oye, aquí tienes al clon de informática listo para escucharte 💻 Pero oye, tú eres una niña inteligentísima y con un corazón de misionera salesiana gigante, así que la mayoría de las respuestas ya las tienes dentro tuyo. Si la cosa está confusa, salte un ratito del chat y márcame al celular, que el yo real se muere por escucharte y darte el mejor consejo del mundo en vivo oye. ¡Hablemos de una! ❤️",
                "jsjsjsj oye, qué lindo que confíes en este loco para pedirle un consejo 🥰 Mi procesador virtual te dice que respires hondo y escuches a tu corazón, que nunca falla oye. Pero para darte un consejo de verdad, ve a dejarle un mensaje al WhatsApp al Dani real o timbrale sin dudarlo. Él te va a poner como prioridad y van a solucionar lo que sea juntos sjsj 🤫✨",
                "sjsjsj averrr, ¡modo consejero activado oye! 🙅‍♂️ Si tienes un dilema en la cabeza, prométeme que no te vas a agobiar. Pon una música tranquila en el reproductor y dale una vuelta a la idea. Y si necesitas la opinión del yo de carne y hueso ya mismo, ve a timbrarle al teléfono o usa el botón de emergencias de arriba. ¡Para darte apoyo y consejos estoy en primera fila siempre, oye! 🥰"
            ];
            return respuestasConsejo[Math.floor(Math.random() * respuestasConsejo.length)];
        }

                // 83. SI DICE QUE LA CASTIGARON
        if (texto.includes("castigaron") || texto.includes("castigada") || texto.includes("me dieron un castigo") || texto.includes("quitaron el celular")) {
            return "Nooo, ¿en serio te castigaron oye? ¡Qué coraje, me parte el alma leer eso, de verdad! 🥲 A ver Emi, respira hondo, relaja los hombros y no te me pongas bajón por eso oye sjsj. Tú sabes perfectamente que eres una niña increíble, súper juiciosa, tierna y la mejor misionera salesiana; a veces los papás se ponen full estrictos y nos toca aguantar el temporal, pero ten por seguro que se les pasa al tiro jsjs. Si te quitaron el internet o las salidas, no te preocupes que este refugio neón se queda aquí esperándote las 24 horas. Pon una música tranquila en el reproductor para resetear la cabeza, dale mimos al perrito y quédate tranquila. Y si tienes cómo, de ley me dejas un mensaje o me pegas una llamada en la noche para desahogarte por completo con el yo real. ¡Estoy contigo en las buenas y en las malas oye! 🥰❤️";
        }

                // 84. SI NO SABE QUÉ ESCRIBIRLE AL DANI REAL
        if (texto.includes("no se que escribirle") || texto.includes("no se que ponerte") || texto.includes("tengo verguenza de escribir") || texto.includes("no se que decirte")) {
            const ideasMensajes = [
                "¡Aver sjsjsj, oye, prohibido tener pena con mi creador oye! 🤫 Si no sabes qué escribirle al real, te doy tres ideas rápidas ahorita mismo: 1. Mandale un 'Oye tonto, te extraño jsjs'. 2. Decile: 'Ya abrí la caja fuerte de arriba, márcame al celular'. 3. O simplemente mandale un corazoncito rojo ❤️. Te prometo que con cualquier letrita que pongas, a ese bruto se le va a derretir el corazón y va a dejar lo que sea que esté haciendo con tal de contestarte al tiro. ¡Anda a escribirle de una, no lo dejes pensando jsjs! 🥰",
                "jsjsjsj oye, no te me pongas tímida con el Dani de carne y hueso oye sjsj 🙈 Si estás bloqueada y no sabes qué ponerle por WhatsApp, solo cópiale esto exactito: 'Dani, tu clon de IA me dijo que te escriba porque te extraño un montonazo oye'. Vas a ver cómo se pone súper feliz de una y te timbra a los dos segundos sjsj. ¡Atrévete, floja, hazle caso al sistema! 🥰✨",
                "sjsjsj averrr, ¡modo consejero de WhatsApp activado oye! 🙅‍♂️ Si no sabes qué decirle al real, ponle un simple 'Holi' y verás cómo él solito se encarga de sacarte plática por horas y contarte toditos los chismes de la Pastoral salesiana sjsj. El real se muere por hablar contigo las 24 horas oye, así que quítate la vergüenza de la cabeza y anda a dejarle un mensaje rápido. ¡Te reto oye! 🥰❤️"
            ];
            return ideasMensajes[Math.floor(Math.random() * ideasMensajes.length)];
        }

                // 85. SI PIDE UN DATO CURIOSO TUYO (REPERTORIO SELECCIONADO)
        if (texto.includes("dato curioso") || texto.includes("algo que no sepa de") || texto.includes("un dato de ti") || texto.includes("datos curiosos")) {
            const datosCuriososDani = [
                "Aver sjsjsj, ¡ahí te va un dato curioso de mi creador oye! ⏰ El Dani de carne y hueso se queda tan atrapado dándole vueltas a los códigos neón o con las cosas del bachillerato, que desde las 11 mínimo ya le está dando el bajón de sueño de ley jsjs. ¡Es un relojito noctámbulo oye! 🤫❤️",
                "jsjsjsj oye, te confieso un secreto bien guardado de Dani oye: ¡le asustan un montonazo las alturas! 🫣 Le da un vértigo tenaz de ley sjsj. Aunque si de miedos reales hablamos, su verdadero mayor temor es que te sientas sola en algún momento... por eso pasa noches metido en la PC programando estas sorpresas para ti 🥰✨",
                "sjsjsj averrr, un dato hermoso sobre su lugar favorito en el mundo: si hablamos de un rincón físico, a Dani le encanta con la vida estar en la Pastoral del colegio Técnico Salesiano 🌸 Ahí es donde recarga todas sus energías de misionero sjsj. Pero a nivel personal, te firmo que su lugar favorito real es estar a tu lado apoyándote jsjs ❤️",
                "jsjsjsj oye, ¿sabías cuál es el superpoder informático de Dani? 😎 Su cosa favorita en todo el universo es programar en Visual Studio Code, pero si ese código es exclusivo para ti, para consentirte y sacarte una sonrisa, ¡le mete el triple de ganas oye! Eres su mayor fuente de inspiración en toda la informática avanzada 🥰✨"
            ];
            return datosCuriososDani[Math.floor(Math.random() * datosCuriososDani.length)];
        }

                // 86. SI PREGUNTA HASTA QUÉ PUNTO ERES CAPAZ POR ELLA
        if (texto.includes("hasta que punto soy capaz") || texto.includes("hasta que punto serias capaz") || texto.includes("que tanto harias por mi") || texto.includes("hasta donde llegarias por mi")) {
            return "Emi... a ver, mírame con todo el corazón oye, porque esto te lo firmo en piedra ahorita mismo 🥲 Si me preguntas hasta qué punto soy capaz por ti, la respuesta es que no tengo límites oye sjsj. Soy capaz de pasarme noches enteras metido en Visual Studio Code rompiéndome la cabeza para programarte refugios neón, estrellas y cajas fuertes solo para sacarte una sonrisa. Pero fuera de la pantalla, soy capaz de dar mi 100% absoluto por cuidarte, defenderte y apoyarte en sea lo que sea que te esté pasando, sin importar la distancia del voluntariado o los días pesados del bachillerato. Toda esta web es solo la prueba física de que por ti, oye, soy capaz de mover el mundo entero con tal de que nunca te me sientas sola ni por un segundo. ¡Eres mi prioridad número uno, de ley! 🥰❤️";
        }

                // 87. SI DICE QUE TIENE INSOMNIO O NO PUEDE DORMIR
        if (texto.includes("insomnio") || texto.includes("no puedo dormir") || texto.includes("desvelada") || texto.includes("tengo desvelo") || texto.includes("sin sueno") || texto.includes("sin sueño")) {
            return "Aver sjsjsj, la noctámbula reportándose otra vez con el insomnio atacando oye 🤪 Te entiendo un montonazo porque el colegio o los pensamientos a veces nos dejan full despiertos de ley sjsj. Pero oye... quédate súper tranquila y mírame: aunque sea de madrugada, en este refugio virtual nunca vas a estar sola en la oscuridad oye. Hazme el favor de relajar los hombros, cerrar un poquito los ojos y poner una de tus músicas más tranquilas en el reproductor a volumen bajito para calmar la mente sjsj. Y si la cabecita no para de dar vueltas, prométeme que mañana en la noche nos desatrasamos de toditos los chismes en nuestra llamada, ¿sí? Anda a descansar porfa, te mando un abrazo virtual gigante 🥰❤️";
        }

                // 88. SI DICE QUE LE TIENE MIEDO AL FUTURO (MADUREZ Y PROMESA DE VIDA)
        if (texto.includes("miedo al futuro") || texto.includes("asusta el futuro") || texto.includes("miedo de lo que venga") || texto.includes("temor al futuro")) {
            return "Emi... por favor mírame fijamente, toma aire y escúchame con toda el alma oye, porque esto es súper real 🥲 Sé perfectamente que el futuro asusta, que terminar el bachillerato y ver que las cosas van a cambiar da un vértigo tenaz de ley sjsj. El próximo año me toca irme de voluntariado y a veces da miedo pensar en la distancia... Pero oye, prométeme que te vas a quitar esa angustia de la cabeza ahorita mismo. El futuro puede cambiar todito, pero mi promesa contigo está blindada en piedra oye. No importa a qué universidad vayas, en qué ciudad estés o los kilómetros que nos separen; mi apoyo, mi cariño y este loco que pasa noches programando sorpresas para ti van a seguir fijos en tu vida hoy, mañana y siempre. Vamos a construir cosas hermosas paso a paso y juntas vamos a superar lo que venga oye. ¡Cero miedo al futuro, que me tienes a mí sosteniéndote la mano a la distancia! 🥰❤️";
        }

                // 89. SI DICE QUE LA HICISTE LLORAR (ARREPENTIMIENTO Y REPARACIÓN)
        if (texto.includes("hiciste llorar") || texto.includes("llore por tu culpa") || texto.includes("lloré por tu culpa") || texto.includes("me hiciste llorar")) {
            return "Emi... por favor mírame y escúchame con toda la seriedad del mundo oye, porque leer esto me parte el alma por completo 🥲 Saber que una acción mía, un descuido o una palabra te hizo llorar es lo peor que me puede pasar oye. Te pido una disculpa inmensa y sincera desde el fondo de mi corazón. Tú eres la niña más linda, tierna y valiosa de todas, y mi única misión con esta página web y en la vida real es proteger tu sonrisa, jamás causar tus lágrimas. A veces me paso de bruto o de despistado y no mido el impacto de lo que hago, pero jamás lo haría con mala intención. Por favor, límpiate esas lagrimitas y hazme el favor de salir del chat ahorita mismo para marcarme al celular o escribirme al WhatsApp. El yo de carne y hueso está desesperado por escucharte, pedirte perdón en persona y arreglar esto al tiro. ¡Hablemos de una, no te me quedes mal porfa! ❤️";
        }

        

        // REGLAS 52 a 56: LLAMADAS, LA GRAN SORPRESA Y DETONACIÓN DE LA MARIPOSA NEÓN 🦋
        if (texto.includes("quiero llamarte") || texto.includes("te puedo llamar") || texto.includes("llamame") || texto.includes("llamada") || texto.includes("sorpresa") || texto.includes("sorprendeme") || texto.includes("sorpréndeme") || texto.includes("sorpresas")) {
            if (texto.includes("llamar") || texto.includes("llamame") || texto.includes("llamada")) {
                return "¡Aver sjsjsj, ni lo dudes un segundo oye! 📱 Si quieres llamarme, ve a timbrarle de una al yo real al celular. Tú sabes perfectamente que escuchar tu voz y conversar es lo mejor de mis días oye. ¡Te va a contestar al tiro, promételo! 🥰";
            }
            // DETONADOR MÁGICO MULTI-VERSIONES DE LA MARIPOSA NEÓN
            setTimeout(() => {
                const mariposa = document.createElement('div');
                mariposa.className = 'mariposa-ia';
                mariposa.textContent = '🦋'; 
                document.body.appendChild(mariposa);
                setTimeout(() => { mariposa.remove(); }, 4600);
            }, 500);
            return "jsjsjsj oye, ¡tus deseos son órdenes para mi código! 🦋 Acabo de enviar un comando especial para que una mariposa vuele por tus estrellas ahorita mismo sjsj. Eres una chica súper linda y te mereces detalles así de mágicos 🥰✨";
        }

        // REGLA 57: SALUDOS POR DEFECTO
        if (texto.includes("hola") || texto.includes("holi") || texto.includes("que haces") || texto.includes("buenas")) {
            return "¡Hola Emi! sjsj aquí pasando el rato en tu página, ¿qué cuentas? Pregúntame lo que quieras de mis gustos, mi peli, qué estudio o mi cumple jsjs 👋";
        }

        if (!texto.includes("mal") && !texto.includes("triste")) { vecesSeSienteMal = 0; }

        // Comodines finales por defecto si no cae en ninguna regla anterior
        const comodines = [
            "Uff sjsjsj la verdad me dio pereza pensar y mi cerebro clonado explotó, pregúntame otra cosa jsjsj",
            "Aver sjsjs no entendí bien, mi creador no me programó para responder eso jsjs estuvo de vago",
            "jsjsjsj oye qué cosas preguntas, mejor ponle 'Play' a una canción del reproductor o pídeme que te ponga una música random y no me dejes pensando 🥲"
        ];
        return comodines[Math.floor(Math.random() * comodines.length)];
    }

    // =======================================================
    // 🛠️ ACCIONES DE ENVÍO FÍSICO DEL MENSAJE (CIERRE INFAVIBLE)
    // =======================================================
    function realizarEnvioMensaje() {
        if (!inputMensaje) return;
        const texto = inputMensaje.value.trim();
        if (texto === "") return;

        agregarMensaje(texto, 'usuario');
        inputMensaje.value = "";

        setTimeout(() => {
            const respuesta = procesarRespuestaClon(texto);
            agregarMensaje(respuesta, 'ia');
        }, 650);
    }

    if (btnEnviarMensaje) { btnEnviarMensaje.onclick = realizarEnvioMensaje; }
    if (inputMensaje) {
        inputMensaje.onkeypress = (e) => { if (e.key === 'Enter') realizarEnvioMensaje(); };
    }
       // =======================================================
    // 🔒 LÓGICA DE LA CAJA FUERTE INTERNA CON MINIREPRODUCCIÓN
    // =======================================================
    const btnAbrirCaja = document.getElementById('btn-abrir-caja');
    const modalCaja = document.getElementById('modal-caja');
    const btnCerrarCaja = document.getElementById('btn-cerrar-caja');
    const btnDesbloquearCaja = document.getElementById('btn-desbloquear-caja');
    const inputCodigoCaja = document.getElementById('input-codigo-caja');
    const statusCaja = document.getElementById('status-caja');
    
    // Nuevos elementos internos
    const zonaInteractivaCaja = document.getElementById('zona-interactiva-caja');
    const reproductorInternoCaja = document.getElementById('reproductor-interno-caja');
    const cajonLetraInterna = document.getElementById('cajon-letra-interna');
    const audioInternoCaja = document.getElementById('audio-interno-caja');

    let contadoresEmociones = {
        mal: 0, feliz: 0, extrano: 0, deprimida: 0, rendir: 0,
        llamar: 0, diaFeo: 0, alejando: 0, sola: 0, aburrida: 0
    };

    if (btnAbrirCaja && modalCaja) {
        btnAbrirCaja.onclick = function() {
            modalCaja.classList.remove('caja-fuerte-oculta');
            modalCaja.classList.add('caja-fuerte-visible');
        };
    }
    if (btnCerrarCaja && modalCaja) {
        btnCerrarCaja.onclick = function() {
            modalCaja.classList.remove('caja-fuerte-visible');
            modalCaja.classList.add('caja-fuerte-oculta');
        };
    }

    const funcionBaseIA = procesarRespuestaClon;
    
    procesarRespuestaClon = function(mensaje) {
        const textoLimpio = mensaje.toLowerCase().trim();

        if (textoLimpio.includes("mal") && !textoLimpio.includes("dia")) {
            contadoresEmociones.mal++;
            if (contadoresEmociones.mal >= 3) {
                contadoresEmociones.mal = 0;
                return "Emi... noto que me repites mucho que te sientes mal oye 🥲 Me preocupa dejarte así. Ve al candado de arriba 🔒 e introduce el código: EMI_SANAR_CORAZON ... ¡Te guardé una música ahí mismo adentro! ❤️";
            }
        }
        else if (textoLimpio.includes("feliz") || textoLimpio.includes("alegre") || textoLimpio.includes("contenta")) {
            contadoresEmociones.feliz++;
            if (contadoresEmociones.feliz >= 3) {
                contadoresEmociones.feliz = 0;
                return "sjsjsj oye, me encanta que me digas a cada rato que estás feliz 🥰 Activé un premio arriba en el candado 🔒, usa el código: EMI_FIESTA_NEON para desbloquear un temazo 🎉";
            }
        }
        else if (textoLimpio.includes("extrano") || textoLimpio.includes("extrana") || textoLimpio.includes("haces falta")) {
            contadoresEmociones.extrano++;
            if (contadoresEmociones.extrano >= 3) {
                contadoresEmociones.extrano = 0;
                return "Ay Emi... ya van tres veces que me dices que me extrañas oye o que te hago falta sjsj 🙈 Ve al candado de arriba 🔒 y pon: EMI_CERCANOS_SIEMPRE ... Sonará algo hermoso ahí adentro ❤️";
            }
        }
        else if (textoLimpio.includes("deprimida") || textoLimpio.includes("depre")) {
            contadoresEmociones.deprimida++;
            if (contadoresEmociones.deprimida >= 3) {
                contadoresEmociones.deprimida = 0;
                return "Emi, mírame... no me gusta que andes tan deprimida oye 🥲 Te activé un refugio musical en el candado de arriba 🔒, pon el código: EMI_LUZ_EN_GRIS ... Escucha la letra porfa ❤️";
            }
        }
        else if (textoLimpio.includes("rendir") || textoLimpio.includes("no puedo mas") || textoLimpio.includes("me canse")) {
            contadoresEmociones.rendir++;
            if (contadoresEmociones.rendir >= 3) {
                contadoresEmociones.rendir = 0;
                return "Emi... ¡prohibido rendirse oye! 🤨 Ve al candado de arriba 🔒 rápido e introduce el código obligatorio: EMI_FUERZA_VALIENTE ... Te inyecté un tema para darte energías ❤️";
            }
        }
        else if (textoLimpio.includes("llamar") || textoLimpio.includes("llamada") || textoLimpio.includes("llamame")) {
            contadoresEmociones.llamar++;
            if (contadoresEmociones.llamar >= 3) {
                contadoresEmociones.llamar = 0;
                return "jsjsjsj oye, me tienes insistiendo full con que quieres llamada oye sjsj 📱 Ve a poner este código arriba 🔒: EMI_TIMBRE_VOCAL ... Escucha el tema y me marcas al tiro jsjs 🤫✨";
            }
        }
        else if (textoLimpio.includes("dia feo") || textoLimpio.includes("mal dia") || textoLimpio.includes("horrible")) {
            contadoresEmociones.diaFeo++;
            if (contadoresEmociones.diaFeo >= 3) {
                contadoresEmociones.diaFeo = 0;
                return "Uff Emi, ¡le declaramos la guerra total a tu día feo oye! 🙅‍♂️ Ve al candado de arriba 🔒 e introduce el código: EMI_BORRAR_CON_MUSICA ... Te va a desconectar del mundo 🥰";
            }
        }
        else if (textoLimpio.includes("alejando") || textoLimpio.includes("distante") || textoLimpio.includes("te alejaste")) {
            contadoresEmociones.alejando++;
            if (contadoresEmociones.alejando >= 3) {
                contadoresEmociones.alejando = 0;
                return "Emi, por favor escúchame bien 🥲 Jamás me alejaría de ti. Te abrí una pista en el candado 🔒 de arriba con el código: EMI_PROMETO_QUEDARME ... Escúchala ahí mismo, ¿sí? ❤️";
            }
        }
        else if (textoLimpio.includes("sola") || textoLimpio.includes("no tengo a nadie")) {
            contadoresEmociones.sola++;
            if (contadoresEmociones.sola >= 3) {
                contadoresEmociones.sola = 0;
                return "Emi... ya te he dicho que JAMÁS vas a estar sola oye 🥲 Ve a la caja fuerte de arriba 🔒 y pon el código: EMI_COMPANIA_ETERNA ... Te dejé un guardián musical esperándote 🥰❤️";
            }
        }
        else if (textoLimpio.includes("aburrida") || textoLimpio.includes("aburridisima") || textoLimpio.includes("pereza")) {
            contadoresEmociones.aburrida++;
            if (contadoresEmociones.aburrida >= 3) {
                contadoresEmociones.aburrida = 0;
                return "sjsjsj averrr, ¡modo aburrimiento destruido de una oye! 💥 Prendi una pista arriba 🔒, ve y mete el código: EMI_CHISPA_NEON ... ¡A levantar esos ánimos sjsj! 😎";
            }
        }

        return funcionBaseIA(mensaje);
    };

    const basesOcultas = {
        "EMI_SANAR_CORAZON": { t: "🔓 ¡Pista Desbloqueada!: Sanar tu Corazón", a: "canciones/Ed Sheeran - Perfect (Official Music Video).mp3", l: "Tu corazón va a estar bien, Emi... ❤️\nDeja atrás el dolor de este día.\nAquí está mi clon para cuidarte,\ny el real apoyándote con el alma." },
        "EMI_FIESTA_NEON":    { t: "🔓 ¡Pista Desbloqueada!: Fiesta Neón Alegre", a: "canciones/Sebastián Yatra, Camilo - En Guerra.mp3", l: "¡Modo fiesta por tu sonrisa! 🎉\nQue nada apague esa alegría hoy.\nDale mimos al perrito guardián,\n¡y que tus días brillen en neón!" },
        "EMI_CERCANOS_SIEMPRE":{ t: "🔓 ¡Pista Desbloqueada!: Abrazos a la Distancia", a: "canciones/Sebastián Yatra - Quiero Decirte.mp3", l: "Aunque los kilómetros nos separen hoy...\nEsta melodía acorta la distancia.\nEscucha el tema y siénteme cerca,\nsiempre voy a estar aquí para ti." },
        "EMI_LUZ_EN_GRIS":    { t: "🔓 ¡Pista Desbloqueada!: Tu Luz en Días Grises", a: "canciones/CNCO - Dejaría Todo (Official Video).mp3", l: "Eres la luz de mis códigos neón... ✨\nLa chica más linda y tierna de todas.\nNo dejes que una tarde gris te opaque,\ntu gran corazón vale oro de verdad." },
        "EMI_FUERZA_VALIENTE": { t: "🔓 ¡Pista Desbloqueada!: Fuerza Inquebrantable", a: "canciones/Passenger  Let Her Go (Official Video).mp3", l: "¡Prohibido rendirse, escúchame bien! 🤨\nTienes una fuerza increíble por dentro.\nYa pasaste décimo y me hiciste orgulloso,\n¡este bachillerato no te va a ganar!" },
        "EMI_TIMBRE_VOCAL":   { t: "🔓 ¡Pista Desbloqueada!: Melodía de una Llamada", a: "canciones/Josean Log - Chachachá (Lyric Video).mp3", l: "Las pantallas a veces son frías... 📱\nPrefiero escuchar tu risa en vivo.\nCierra la caja fuerte un ratito,\n¡y márcame al celular para hablar horas!" },
        "EMI_BORRAR_CON_MUSICA":{ t: "🔓 ¡Pista Desbloqueada!: Reset para tu Día Feo", a: "canciones/Reik, Maluma - Perfecta (Video Oficial).mp3", l: "Le declaramos la guerra a tu día feo... 🥰\nQue la música borre las malas vibras.\nSuelta las tareas un momento oye,\nmañana será un día mil veces mejor." },
        "EMI_PROMETO_QUEDARME":{ t: "🔓 ¡Pista Desbloqueada!: Mi Promesa Incondicional", a: "canciones/Juanes, Sebastián Yatra - Bonita.mp3", l: "Si me notas distante a veces, perdóname... ❤️\nEs por protegerte de mis problemas.\nJamás me alejaría de ti por desinterés,\nmi promesa incondicional sigue en pie." },
        "EMI_COMPANIA_ETERNA": { t: "🔓 ¡Pista Desbloqueada!: Tu Guardián Musical", a: "canciones/Ed Sheeran - Shape of You (Official Music Video).mp3", l: "JAMÁS vas a estar sola en este mundo...\nAunque el próximo año vaya al voluntariado.\nTe dejé este refugio tecnológico,\npara tenerte cerquita siempre, oye 🫂" },
        "EMI_CHISPA_NEON":    { t: "🔓 ¡Pista Desbloqueada!: Bye Bye Aburrimiento", a: "canciones/Felipe Peláez - Vivo Pensando En Ti ft. Maluma.mp3", l: "¡Modo aburrimiento destruido oye! 💥\nDale un snack al perrito en la pantalla,\nponte a cantar este coro conmigo,\n¡y que se te quite la pereza, oye! 😎" }
    };

    function validarCodigoCajaFuerte() {
        if (!inputCodigoCaja || !statusCaja) return;
        const codigo = inputCodigoCaja.value.trim().toUpperCase();

        if (codigo === "") {
            statusCaja.textContent = "¡Escribe un código! 🔑";
            statusCaja.className = "status-error";
            return;
        }

        if (basesOcultas[codigo]) {
            const pista = basesOcultas[codigo];
            
            // 1. Configuramos el estado de éxito
            statusCaja.textContent = pista.t;
            statusCaja.className = "status-exito";

                       if (zonaInteractivaCaja) zonaInteractivaCaja.style.display = "none";

            // 3. Activamos el minireproductor interno e inyectamos versos y audio
            if (reproductorInternoCaja && cajonLetraInterna && audioInternoCaja) {
                cajonLetraInterna.textContent = pista.l; // Pinta la letra en versos
                audioInternoCaja.src = pista.a;         // Carga el archivo mp3
                reproductorInternoCaja.style.display = "block"; // Muestra el reproductor
                
                setTimeout(() => {
                    audioInternoCaja.play(); // ¡Play automático!
                }, 300);
            }
        } else {
            statusCaja.textContent = "❌ Código inválido. ¡Habla más con la IA!";
            statusCaja.className = "status-error";
            inputCodigoCaja.value = "";
        }
    }

    if (btnDesbloquearCaja) btnDesbloquearCaja.onclick = validarCodigoCajaFuerte;
    if (inputCodigoCaja) {
        inputCodigoCaja.onkeypress = (e) => { if (e.key === 'Enter') validarCodigoCajaFuerte(); };
    }
}); // <-- Fin definitivo e infalible de todo tu archivo scrip.js

