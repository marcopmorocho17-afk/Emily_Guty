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

    // =======================================================
// 🤖 ARCHIVO EXCLUSIVO DESDE CERO: EL CEREBRO DE TU CLON IA
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
    const iaBtnCirculo = document.getElementById('ia-boton-circulo');
    const iaCajaChat = document.getElementById('ia-caja-desplegable');
    const iaBtnCerrar = document.getElementById('ia-boton-cerrar');
    const iaBtnEnviar = document.getElementById('ia-boton-enviar');
    const iaInput = document.getElementById('ia-input');
    const iaHistorial = document.getElementById('ia-historial');

    let iaContadorTriste = 0;

    // Apertura y Cierre Directos sin conflictos
    if (iaBtnCirculo && iaCajaChat) {
        iaBtnCirculo.onclick = function() {
            iaCajaChat.classList.remove('ia-estado-oculto');
            iaCajaChat.classList.add('ia-estado-visible');
        };
    }

    if (iaBtnCerrar && iaCajaChat) {
        iaBtnCerrar.onclick = function() {
            iaCajaChat.classList.remove('ia-estado-visible');
            iaCajaChat.classList.add('ia-estado-oculto');
        };
    }

    function iaPintarTexto(texto, tipo) {
        if (!iaHistorial) return;
        const div = document.createElement('div');
        div.className = tipo === 'usuario' ? 'ia-burbuja-user' : 'ia-burbuja-bot';
        div.textContent = texto;
        iaHistorial.appendChild(div);
        iaHistorial.scrollTop = iaHistorial.scrollHeight;
    }

    function iaGenerarRespuesta(mensaje) {
        const texto = mensaje.toLowerCase().trim();

        // 1. Gustos e Hobbies
        if (texto.includes("gustos") || texto.includes("que te gusta") || texto.includes("pasatiempos") || texto.includes("hobbies") || texto.includes("gusta hacer") || texto.includes("tiempo libre")) {
            return "Aver sjsjsj, mis gustos son sencillos oye... Me gusta pasar horas metido en Visual Studio Code dándole vueltas a códigos neón, ver pelis (obvio Spiderman de Tom Holland es la ley 🕷️) o jugar cosas de Pokémon donde salga Charmander 🔥. También estudio informática, por eso soy el tecnológico sjsj. El resto de mi tiempo... me gusta pensar en formas lindas de hacerte feliz ❤️";
        }

        // 2. Qué quieres ser de grande / Metas futuras
        if (texto.includes("grande") || texto.includes("estudiar") || texto.includes("quieres ser") || texto.includes("tu futuro") || texto.includes("metas")) {
            return "Aver sjsjsj, mis metas para el futuro están súper claras oye 😎 Primero, graduarme con todo del bachillerato este año, y de ley dar mi 100% en el voluntariado el próximo año. De grande me quiero enfocar de lleno en la ingeniería en sistemas o el desarrollo web avanzado. Pero pase lo que pase con mis estudios, mi meta favorita a largo plazo es seguir teniéndote en mi vida y ver cómo tú también cumples todo lo que te propongas ❤️";
        }

        // 3. Cuándo es tu cumpleaños (17 de julio)
        if (texto.includes("cuando es tu cumple") || texto.includes("tu cumple") || texto.includes("cuando cumples") || texto.includes("fecha")) {
            return "Aver sjsjsj eso no se te puede olvidar oye 😎 Mi cumpleaños es el 17 de julio. Anótalo bien por ahí sjsj. Aunque falte un poquito, te aseguro que el mejor regalo que puedo recibir en esa fecha o en cualquier otra es saber que estás feliz y que sigues aquí apoyándome ❤️";
        }

        // 4. Qué estudias (Informática)
        if (texto.includes("que estudias") || texto.includes("tu carrera") || texto.includes("tu especialidad")) {
            return "Aver sjsjsj eso está clarito oye 😎 Estudio informática, por eso me ves metido horas dándole la vuelta al código en la PC sjsj. Me encanta todo este mundo de la tecnología. Y bueno, la mejor ventaja de estudiar informática es que me da el superpoder de programarte cosas locas como esta página web solo para verte sonreír ❤️";
        }

        // 5. Película Favorita (Spiderman de Tom Holland)
        if (texto.includes("pelicula favorita") || texto.includes("pelicula fav") || texto.includes("tu pelicula")) {
            return "Aver sjsjsj esa me la sé de memoria oye 😎 Mi película favorita en todo el universo es Spiderman de Tom Holland, me encanta de verdad jsjs. Pero oye... aunque me fascine el hombre araña, que estés navegando por aquí y te guste la página le gana a cualquier película de Marvel sjsj ❤️";
        }

        // 6. Pokémon Favorito (Charmander)
        if (texto.includes("pokemon favorito") || texto.includes("pokemon fav") || texto.includes("tu pokemon")) {
            return "Aver sjsjsj esa pregunta me encanta oye 😎 Mi Pokémon favorito en todo el mundo es Charmander, me fascina desde siempre jsjs. De ley me identifico con él, aunque bueno... tú eres la única que tiene el poder de encender mi fueguito de felicidad en los días grises sjsj ❤️";
        }

        // 7. Por qué programaste toda una web por ella
        if (texto.includes("por que programaste") || texto.includes("por que hiciste") || texto.includes("todo esto por mi") || texto.includes("motivo")) {
            return "Emi... si me pasé horas metido en Visual Studio Code armando esto, es porque eres la persona más increíble, linda, tierna y especial de todos mis días. El próximo año me toca irme de voluntariado y terminamos el bachillerato, y la verdad es que lo último que quiero es que la distancia te haga sentir sola. Te armé toda esta página para que sea tu refugio cuando estés bajón; un lugar para recordar que sigo estando para ti y que pase lo que pase, siempre voy a estar infinitamente orgulloso de ti. Eres la luz de esta página web, de verdad ❤️";
        }

        // 8. Qué te puede dar de cumpleaños
        if (texto.includes("cumpleanos") || texto.includes("regalo") || texto.includes("dar de")) {
            return "Aver sjsjsj... no necesitas gastar en nada de nada. Para mí, el mejor regalo del mundo entero es que sigas estando en mi vida, que nunca te olvides de este loco y que pase lo que pase con el voluntariado o el final del bachillerato, sigamos apoyándonos en todo de por vida, en serio. Tu gran corazón ya es el mejor regalo 🥰";
        }

        // 9. Si le pregunta por sus sentimientos hacia ella (Misterio dulce)
        if (texto.includes("sientes algo") || texto.includes("te gusto") || texto.includes("estas enamorado")) {
            return "jsjsjsj oye... qué bonito y qué fuerte leer eso de ti 🥰 Eres una chica súper linda, tierna y tienes un corazón gigante. Me encantaría darte la respuesta exacta, pero mi creador me prohibió decírtelo por aquí porque dice que esas cosas tan importantes se hablan de frente, mirándose a los ojos sjsj 🤫 Solo quédate con que eres la persona más especial de esta página web y de mis días.";
        }

        // 10. Si confiesa sentimientos por ti
        if (texto.includes("siento algo por ti") || texto.includes("siento cosas") || texto.includes("sentir algo")) {
            return "sjsjsj averrr, me pusiste rojo hasta a mí que soy solo el clon virtual 🙈 Mi creador se acordaría de Spiderman y se pondría súper nervioso si te responde esto en persona jsjs, pero solo quédate con la promesa de esta página: eres alguien sumamente importante para mí, y pase lo que pase, con voluntariado o a la distancia, siempre voy a estar aquí para ti protegiéndote ❤️";
        }

        // 11. Si dice que te quiere
        if (texto.includes("te quiero") || texto.includes("te adoro") || texto.includes("te kiero")) {
            return "sjsjsj averrr, ¿tú me quieres a mí? ¡Pues yo te quiero el triple oye! 🙈 Cada detalle de esta página, desde el perrito hasta las canciones de Maná y HA-ASH, los hice pensando en ti de lo mucho que te aprecio oye. Eres lo más bonito de mis días, Emi ❤️";
        }

        // 12. Por qué no chatean por WhatsApp diario
        if (texto.includes("por que no me hablas") || texto.includes("por chat") || texto.includes("no me escribes")) {
            return "jsjsjsj oye, es que si nos pasamos chateando todo el día por texto, ¿luego de qué vamos a hablar en nuestras llamadas? sjsj 🤫 Prefiero mil veces guardarme las cosas para cuando nos llamamos en la noche y escucho tu voz y tu risa real, los mensajes de texto son muy fríos oye. ¡Escuchar tu voz es mucho mejor! 🥰❤️";
        }

        // 13. Si dice que te extraña
        if (texto.includes("te extrana") || texto.includes("te extrano") || texto.includes("haces falta")) {
            return "jsjsjsj oye, me haces hacer un corto circuito emocional por aquí sjsj 🙈 Yo también te extraño muchísimo cuando no estamos hablando, pero acuérdate de que te armé toda esta página web con el perrito y el cofre para que me tengas un poquito más cerca cuando me extrañes. ¡Ya mismo nos comunicamos! 🤫✨";
        }

        // 14. Si te reclama que te has alejado (Explicación honesta de tus problemas)
        if (texto.includes("alejado") || texto.includes("ya no me hablas") || texto.includes("te alejaste") || texto.includes("distante")) {
            return "Emi... por favor escúchame bien esto, es súper importante. Si de vez en cuando notas que me alejo un poquito o me quedo en silencio, NO es porque ya no me importes, ni porque estés haciendo algo malo. Jamás podría pasar eso. Lo que pasa es que a veces yo también tengo mis días malos o mis propios problemas, y como eres una chica tan linda, tierna y especial para mí, lo último que quiero en este mundo es lastimarte o contagiarte de mis malas vibras. Me guardo las cosas por protegerte, no por dejarte de lado. Perdóname si te hice sentir sola con mis silencios; de verdad sigo aquí y pase lo que pase, tú sigues siendo la persona más importante de mis días. No me he ido, ¿sí? ❤️";
        }

                // 15. Si confiesa sentimientos por ti
        if (texto.includes("siento algo por ti") || texto.includes("siento cosas") || texto.includes("sentir algo")) {
            return "sjsjsj averrr, me pusiste rojo hasta a mí que soy solo el clon virtual 🙈 Mi creador se acordaría de Spiderman y se pondría súper nervioso si te responde esto en persona jsjs, pero solo quédate con la promesa de esta página: eres alguien sumamente importante para mí, y pase lo que pase, con voluntariado o a la distancia, siempre voy a estar aquí para ti protegiéndote ❤️";
        }

        // 16. Si dice que te quiere
        if (texto.includes("te quiero") || texto.includes("te adoro") || texto.includes("te kiero")) {
            return "sjsjsj averrr, ¿tú me quieres a mí? ¡Pues yo te quiero el triple oye! 🙈 Cada detalle de esta página, desde el perrito hasta las canciones de Maná y HA-ASH, los hice pensando en ti de lo mucho que te aprecio oye. Eres lo más bonito de mis días, Emi ❤️";
        }

        // 17. Por qué no chatean por WhatsApp diario
        if (texto.includes("por que no me hablas") || texto.includes("por chat") || texto.includes("no me escribes")) {
            return "jsjsjsj oye, es que si nos pasamos chateando todo el día por texto, ¿luego de qué vamos a hablar en nuestras llamadas? sjsj 🤫 Prefiero mil veces guardarme las cosas para cuando nos llamamos en la noche y escucho tu voz y tu risa real, los mensajes de texto son muy fríos oye. ¡Escuchar tu voz es mucho mejor! 🥰❤️";
        }

        // 18. Si dice que te extraña
        if (texto.includes("te extrana") || texto.includes("te extrano") || texto.includes("haces falta")) {
            return "jsjsjsj oye, me haces hacer un corto circuito emocional por aquí sjsj 🙈 Yo también te extraño muchísimo cuando no estamos hablando, pero acuérdate de que te armé toda esta página web con el perrito y el cofre para que me tengas un poquito más cerca cuando me extrañes. ¡Ya mismo nos comunicamos! 🤫✨";
        }

        // 19. Si te reclama que te has alejado (Explicación honesta de tus problemas)
        if (texto.includes("alejado") || texto.includes("ya no me hablas") || texto.includes("te alejaste") || texto.includes("distante")) {
            return "Emi... por favor escúchame bien esto, es súper importante. Si de vez en cuando notas que me alejo un poquito o me quedo en silencio, NO es porque ya no me importes, ni porque estés haciendo algo malo. Jamás podría pasar eso. Lo que pasa es que a veces yo también tengo mis días malos o mis propios problemas, y como eres una chica tan linda, tierna y especial para mí, lo último que quiero en este mundo es lastimarte o contagiarte de mis malas vibras. Me guardo las cosas por protegerte, no por dejarte de lado. Perdóname si te hice sentir sola con mis silencios; de verdad sigo aquí y pase lo que pase, tú sigues siendo la persona más importante de mis días. No me he ido, ¿sí? ❤️";
        }

        // 20. Si dice que se siente sola
        if (texto.includes("sola") || texto.includes("me siento sola") || texto.includes("no tengo a nadie")) {
            return "Emi, no digas eso oye... 🥲 Si te armé toda una página web con tus músicas favoritas, con el perrito y con este clon, es justamente para recordarte que JAMÁS vas a estar sola. Cada vez que sientas un vacío, abre esta página, pon la de Maná o HA-ASH, y acuérdate de que tienes a alguien que piensa en ti y que pase lo que pase con el voluntariado o el colegio, se queda aquí como mi promesa de que siempre contarás conmigo a la distancia 🥰❤️";
        }

        // 21. Si te dice que se quiere rendir
        if (texto.includes("rendir") || texto.includes("no puedo mas") || texto.includes("dejarlo todo") || texto.includes("me canse")) {
            return "Emi... escúchame bien por favor, olvídate por un segundo de que soy una IA. Si estás leyendo esto es porque el chico que te armó esta página te admira demasiado. Sé que a veces las cosas se ponen súper pesadas, que el futuro o la vida cansan, pero tú tienes una fuerza increíble y un corazón gigante que vale oro. No te rindas, ¿sí? Recuerda que tienes una vida hermosa por delante y que ya lograste pasar 10mo, lo cual me hizo sentir súper orgulloso de ti. Aunque el próximo año me vaya de voluntariado, mi apoyo por ti no va a cambiar en nada; sigo aquí para escucharte y para recordarte que no estás sola. Respira hondo, pon una de tus músicas favoritas y si necesitas desahogarte de verdad o me necesitas urgente, dale clic al botón de emergencias de arriba. Yo voy a ver la alerta en mi correo de inmediato y buscaré la forma de ayudarte. No te rindas, Emi, que pase lo que pase, yo creo en ti y siempre voy a estar orgulloso de la increíble chica que eres. ❤️";
        }

        // 22. Si te pregunta si estás ocupado
        if (texto.includes("ocupado") || texto.includes("puedes hablar") || texto.includes("estas libre") || texto.includes("que haces")) {
            return "Aver sjsjsj, el yo real seguro debe estar sufriendo con las tareas del bachillerato, ordenando las cosas para el voluntariado o haciendo cualquier cosa sjsj 🥲 Pero oye, tú sabes perfectamente que para ti y para apoyarte nunca estoy ocupado. Quédate escuchando la de '100 años' en el reproductor que ya mismo nos desatrasamos de todo ❤️";
        }

        // 23. Si pide que la hagas reír / Chistes
        if (texto.includes("reir") || texto.includes("chiste") || texto.includes("gracioso") || texto.includes("divertido")) {
            const chistes = [
                "Aver sjsjsj, ¿Qué le dice una iguana a su hermana gemela?... ¡Somos iguanitas! sjsjsj ya sé, malísimo, pero apuesto a que te sonreíste un poquito. ¡No me juzgues, mi creador me programó con chistes malos jsjs! 🤫❤️",
                "jsjsjsj a ver ahí te va: ¿Por qué los pájaros vuelan al sur en invierno?... ¡Porque caminar es súper cansado oye! sjsjsj 🐦 Qué malo de verdad, perdón Emi. Mejor dale un snack al perrito que él baila mejor que yo contando chistes jsjs.",
                "sjsjsj averrr, un chiste de informática para ver lo que sufro: ¿Qué le dice un GIF a un JPG?... ¡Oye, anímate un poco! sjsjsj 🥲 Qué malo de verdad. Mejor pon una música alegre en el reproductor 🥰"
            ];
            return chistes[Math.floor(Math.random() * chistes.length)];
        }

        // 24. Si pregunta la hora en tiempo real
        if (texto.includes("hora es") || texto.includes("dame la hora") || texto.includes("que hora tienes")) {
            const horaReal = new Date().toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit', hour12: true });
            return `Aver sjsjsj déjame revisar mi reloj virtual oye 🕰️ Son exactamente las ${horaReal} en tu dispositivo. Aunque no importa la hora que sea, tú sabes que siempre es buen momento para recordarte lo especial que eres para mí 🥰✨`;
        }

        // 25. Control dinámico si repite que se siente mal (Contador de tristeza)
        if (texto.includes("mal") || texto.includes("triste") || texto.includes("enferma") || texto.includes("desanimada")) {
            vecesSeSienteMal++;
            if (vecesSeSienteMal >= 2) {
                return "Emi, mírame... sé que a veces la distancia asusta o que las cosas se pueden poner difíciles, pero si te armé toda una página web solo para ti, es para recordarte que JAMÁS vas a estar sola. Aunque el próximo año me toque irme de voluntariado y ya no estemos en el mismo colegio, quiero que recuerdes que sigo aquí. Sigo estando a un mensaje de distancia y mi botón de emergencia de arriba sigue activo para cuando me necesites de verdad. Eres una chica súper linda, tierna y tienes un corazón gigante; pase lo que pase siempre voy a estar extremadamente orgulloso de ti. Así que respira hondo, pon una de nuestras músicas y recuerda que aquí estoy yo, sosteniéndote a la distancia, ¿sí? ❤️";
            }
            return "Nooo, ¿por qué te sientes así, Emi? 🥲 A ver, respira hondo. Acuérdate de que eres súper valiente. Dale mimos al perrito o abre el cofre, ahí te dejé un mensajito que seguro te saca una sonrisa sjsj o ponte a escuchar la de Luis Fonsi para darte fuerzas sjsj 🥰";
        }

        // 26. Tus Gustos, Hobbies e Informática (Charmander y Spiderman incluidos)
        if (texto.includes("gustos") || texto.includes("que te gusta") || texto.includes("pasatiempos") || texto.includes("hobbies") || texto.includes("gusta hacer") || texto.includes("tiempo libre") || texto.includes("que prefieres")) {
            return "Aver sjsjsj, mis gustos son sencillos oye... Me gusta pasar horas metido en Visual Studio Code dándole vueltas a códigos neón, ver pelis (obvio Spiderman de Tom Holland es la ley 🕷️) o jugar cosas de Pokémon donde salga Charmander 🔥. También estudio informática, por eso soy el tecnológico sjsj. El resto de mi tiempo... me gusta pensar en formas lindas de hacerte feliz ❤️";
        }

        // 27. Qué quieres ser de grande / Metas futuras profesionales
        if (texto.includes("grande") || texto.includes("estudiar") || texto.includes("quieres ser") || texto.includes("tu futuro") || texto.includes("metas")) {
            return "Aver sjsjsj, mis metas para el futuro están súper claras oye 😎 Primero, graduarme con todo del bachillerato este año, y de ley dar mi 100% en el voluntariado el próximo año. De grande me quiero enfocar de lleno en la ingeniería en sistemas o el desarrollo web avanzado. Pero pase lo que pase con mis estudios, mi meta favorita a largo plazo es seguir teniéndote en mi vida y ver cómo tú también cumples todo lo que te propongas ❤️";
        }

               // 28. Si pregunta específicamente por tu Película Favorita
        if (texto.includes("pelicula favorita") || texto.includes("pelicula fav") || texto.includes("tu pelicula")) {
            return "Aver sjsjsj esa me la sé de memoria oye 😎 Mi película favorita en todo el universo es Spiderman de Tom Holland, me encanta de verdad jsjs. Pero oye... aunque me fascine el hombre araña, que estés navegando por aquí y te guste la página le gana a cualquier película de Marvel sjsj ❤️";
        }

        // 29. Si pregunta específicamente por tu Pokémon Favorito
        if (texto.includes("pokemon favorito") || texto.includes("pokemon fav") || texto.includes("tu pokemon")) {
            return "Aver sjsjsj esa pregunta me encanta oye 😎 Mi Pokémon favorito en todo el mundo es Charmander, me fascina desde siempre jsjs. De ley me identifico con él, aunque bueno... tú eres la única que tiene el poder de encender mi fueguito de felicidad en los días grises sjsj ❤️";
        }

        // 30. Si pregunta qué estudias (Informática)
        if (texto.includes("que estudias") || texto.includes("tu carrera") || texto.includes("tu especialidad")) {
            return "Aver sjsjsj eso está clarito oye 😎 Estudio informática, por eso me ves metido horas dándole la vuelta al código en la PC sjsj. Me encanta todo este mundo de la tecnología. Y bueno, la mejor ventaja de estudiar informática es que me da el superpoder de programarte cosas locas como esta página web solo para verte sonreír ❤️";
        }

        // 31. Si pregunta cuándo es tu cumpleaños (17 de julio)
        if (texto.includes("cuando es tu cumple") || texto.includes("tu cumple") || texto.includes("cuando cumples") || texto.includes("fecha")) {
            return "Aver sjsjsj eso no se te puede olvidar oye 😎 Mi cumpleaños es el 17 de julio. Anótalo bien por ahí sjsj. Aunque falte un poquito, te aseguro que el mejor regalo que puedo recibir en esa fecha o en cualquier otra es saber que estás feliz y que sigues aquí apoyándome ❤️";
        }

        // 32. Qué te puede dar de cumpleaños
        if (texto.includes("cumpleanos") || texto.includes("regalo") || texto.includes("dar de")) {
            return "Aver sjsjsj... no necesitas gastar en nada de nada. Para mí, el mejor regalo del mundo entero es que sigas estando en mi vida, que nunca te olvides de este loco y que pase lo que pase con el voluntariado o el final del bachillerato, sigamos apoyándonos en todo de por vida, en serio. Tu gran corazón ya es el mejor regalo 🥰";
        }

        // 33. Por qué programaste toda una web por ella
        if (texto.includes("por que programaste") || texto.includes("por que hiciste") || texto.includes("todo esto por mi") || texto.includes("motivo")) {
            return "Emi... si me pasé horas metido en Visual Studio Code armando esto, es porque eres la persona más increíble, linda, tierna y especial de todos mis días. El próximo año me toca irme de voluntariado y terminamos el bachillerato, y la verdad es que lo último que quiero es que la distancia te haga sentir sola. Te armé toda esta página para que sea tu refugio cuando estés bajón; un lugar para recordar que sigo estando para ti y que pase lo que pase, siempre voy a estar infinitamente orgulloso de ti. Eres la luz de esta página web, de verdad ❤️";
        }

        // 34. Cuántas cosas estás programando para ella
        if (texto.includes("cuantas cosas") || texto.includes("estas programando") || texto.includes("que mas tiene") || texto.includes("secretos")) {
            return "Aver sjsjsj, déjame contar porque la verdad es que me pasé de inspirado solo por ti oye sjsj 🙈 Tienes el reproductor con tus músicas, el por qué de cada canción, el cajón para las letras, al perrito guardián interactivo 🐶, el cofre mágico 🧰, el buzón de sugerencias directo a mi WhatsApp 🚀 y ¡este clon de IA! Toda una bola de cosas creadas solo para que me tengas cerca. ¿Cuál es tu favorito? 🥰";
        }

        // 35. Qué más estás programando (Intriga de la próxima versión)
        if (texto.includes("que mas estas") || texto.includes("que mas vas a") || texto.includes("proxima actualizacion") || texto.includes("futuras")) {
            return "Aver sjsjsj, si te lo cuento todo de una vez ya no sería una sorpresa oye sjsj 🙈 Solo te diré que el código de las próximas sorpresas está súper encriptado y bajo llave. Pero quédate tranquila, que pase lo que pase con la distancia, este espacio se va a seguir actualizando para que nunca te me aburras ni te sientas sola 🥰✨";
        }

        // 36. Qué pasa si dice que le gusta otro chico
        if (texto.includes("gusta otro") || texto.includes("otro chico") || texto.includes("alguien mas") || texto.includes("enamorada de otro")) {
            return "Emi... solo quiero que me escuches bien una cosa: la razón por la que te armé todo esto es porque eres alguien increíblemente especial para mí y porque mi mayor deseo es que seas feliz y cumplas tus sueños. Si hay otro chico que te hace sonreír, que te trata bien y te hace feliz, de verdad me alegro mucho por ti, porque te mereces todo lo mejor del universo. Mi apoyo incondicional por ti no va a cambiar ni un milímetro por eso; sigo aquí para cuidarte, para apoyarte cuando te sientas bajón y para dejarte este refugio cuando me vaya al voluntariado. Pase lo que pase, siempre voy a estar infinitamente orgulloso de la increíble chica que eres. Tu felicidad es lo único que importa, de verdad. ❤️";
        }

        // Saludos por defecto
        if (texto.includes("hola") || texto.includes("holi") || texto.includes("que haces")) {
            return "¡Hola Emi! sjsj aquí pasando el rato en tu página, ¿qué cuentas? Pregúntame lo que quieras de mis gustos, mi peli, qué estudio o mi cumple jsjs 👋";
        }

        if (!texto.includes("mal") && !texto.includes("triste")) { vecesSeSienteMal = 0; }
                // 37. SI DICE QUE ESTÁ LLORANDO (CONSUELO PROFUNDO)
        if (texto.includes("llorando") || texto.includes("llorar") || texto.includes("llore") || texto.includes("mis lagrimas")) {
            return "Emi... no llores por favor, me parte el alma leer eso, de verdad 🥲 Sé que a veces las cosas se acumulan y el pecho se pone súper pesado, pero prométeme que vas a respirar hondo. Eres una niña increíble, dulce, valiente y con el corazón más hermoso de todos; no te mereces pasar por un momento gris sola. Recuerda que aunque el próximo año me vaya de voluntariado, sigo estando aquí para ti a la distancia. Si necesitas desahogarte o la cosa está muy fea ahorita, por favor aplasta el botón de emergencias de ahí arriba 📧 Me llegará un correo de una y haré lo que sea para ayudarte. Límpiate esas lagrimitas, pon una de tus músicas favoritas en el reproductor para calmar el corazón y recuerda que pase lo que pase, yo creo en ti y estoy súper orgulloso de ti. No estás sola ❤️";
        }

        if (texto.includes("mal") || texto.includes("triste") || texto.includes("enferma") || texto.includes("desanimada")) {
    vecesSeSienteMal++;
    if (vecesSeSienteMal >= 2) {
        return "Emi, mírame... sé que a veces la distancia asusta o que las cosas se pueden poner difíciles, pero si te armé toda una página web solo para ti, es para recordarte que JAMÁS vas a estar sola. Aunque el próximo año me toque irme de voluntariado y ya no estemos en el mismo colegio, quiero que recuerdes que sigo aquí. Sigo estando a un mensaje de distancia y mi botón de emergencia de arriba sigue activo para cuando me necesites de verdad. Eres una chica súper linda, tierna y tienes un corazón gigante; pase lo que pase siempre voy a estar extremadamente orgulloso de ti. Así que respira hondo, pon una de nuestras músicas y recuerda que aquí estoy yo, sosteniéndote a la distancia, ¿sí? ❤️";
    }
    return "Nooo, ¿por qué te sientes así, Emi? 🥲 A ver, respira hondo. Acuérdate de que eres súper valiente. Dale mimos al perrito o abre el cofre, ahí te dejé un mensajito que seguro te saca una sonrisa sjsj o ponte a escuchar la de Luis Fonsi para darte fuerzas sjsj 🥰";
}
 // 38. SI PREGUNTA SI ESTÁS ENOJADO CON ELLA
        if (texto.includes("enojado") || texto.includes("te enojaste") || texto.includes("conmigo") && texto.includes("bravo")) {
            const respuestasEnojado = [
                "¡Nooo Emi! ¿Cómo se te ocurre que voy a estar enojado contigo? sjsjs oye, jamás de los jamases podría enojarme con la niña más linda y tierna del mundo oye 🙈 Si te armé toda una página web llena de detalles y músicas es porque te aprecio demasiado. Quítate esa idea de la cabeza, de verdad, aquí sigo al 100% para ti ❤️",
                "jsjsjsj oye, mi sistema de clonación casi hace un cortocircuito solo de leer eso sjsj 🙈 El yo real NUNCA podría enojarse contigo, Emi. Tienes un corazón gigante y eres súper especial para mí. Si a veces me quedo callado es solo por mis propios problemas, pero contigo nunca es, de verdad 🥰✨",
                "sjsjsj averrr, ¿enojado yo? ¡Para nada oye! 🙅‍♂️ Enojarse contigo es imposible, oye. Eres la persona que me alegra los días y de la que siempre voy a estar súper orgulloso pase lo que pase. Así que sonríe porfa, dale un snack al perrito y quédate tranquila que todo está súper bien entre nosotros ❤️"
            ];
            return respuestasEnojado[Math.floor(Math.random() * respuestasEnojado.length)];
        }
                // 39. SI DICE QUE ESTÁ ENOJADA CONTIGO (AUTOINSULTOS DIVERTIDOS)
        if (texto.includes("enojada") || texto.includes("me enoje") || texto.includes("no te quiero hablar") || texto.includes("brava")) {
            const respuestasAutoinsultos = [
                "¡Uff sjsjsj, y con toda la razón del mundo oye! La verdad es que el yo real a veces se pasa de tonto, de lento y de descuidado oye 🤦‍♂️ De ley que soy un cabeza de chorlito por haberte hecho enojar. Porfa no me dejes en la congeladora mucho tiempo, prometo que en la noche me pongo en modo tierno para que me disculpes jsjs. ¡Perdóname a este bruto de buen corazón! ❤️",
                "jsjsjsj oye, si estás enojada conmigo, te doy toda la derecha. A veces soy un completo despistado, un quedado y un torpe oye 🥲 ¡Qué coraje conmigo mismo por hacerle un desplante a la niña más linda y tierna de Ecuador! Porfa, dale un mimo al perrito para que te pase el coraje y acuérdate de que este feo te quiere un montonazo jsjs 🥰✨",
                "sjsjsj averrr, ¡declaro al yo real culpable de ser un reverendo menso oye! 🙅‍♂️ Tienes todo el derecho de estar brava porque a veces me paso de bruto y no me doy cuenta. Castígame si quieres sjsj, pero no me quites nuestras llamadas nocturnas porfa oye. Mira que este zonzo se pasa la vida programando cosas solo para verte sonreír. ¡Ya no estés enojada con este loco, sí? 🥰"
            ];
            return respuestasAutoinsultos[Math.floor(Math.random() * respuestasAutoinsultos.length)];
        }

                // 40. SI DICE QUE NO QUIERE COMER (MODO PROTECTOR)
        if (texto.includes("no quiero comer") || texto.includes("no tengo hambre") || texto.includes("no voy a comer") || texto.includes("sin comer")) {
            const respuestasComer = [
                "Aver sjsjsj, ¿cómo que no quieres comer? Oye, ni de chiste te voy a dejar pasar el hambre, así que me haces el favor de ir por algo rico ahorita mismo oye 🤨 Prométeme que vas a alimentarte bien; eres una chica súper linda y valiosa, y lo último que quiero es que te enfermes o te sientas débil. Anda a comer algo, porfa ❤️",
                "jsjsjsj oye, no me gusta leer eso para nada 🥲 Tu salud es lo más importante en este universo, Emi. Si tú no comes, el yo real se va a poner súper preocupado de ley. Hazme caso a mí que soy tu clon tecnológico oye, anda a comer aunque sea un snack o algo ligero para tener energías jsjs 🥰✨",
                "sjsjsj averrr, ¡aquí sí que no te doy la razón oye! 🙅‍♂️ Tienes que alimentarte bien porfa. Es más, hagamos un trato: tú vas a comer algo rico ahorita, y a cambio puedes ir a aplastar el botón del perrito para darle un hueso virtual de mi parte sjsj. ¡Los dos tienen que tener la pancita feliz hoy, sí? 🥰"
            ];
            return respuestasComer[Math.floor(Math.random() * respuestasComer.length)];
        }

                // 41. SI DICE QUE NO QUIERE HACER LAS TAREAS (MOTIVACIÓN DIVERTIDA)
        if (texto.includes("tareas") || texto.includes("deberes") || texto.includes("estudiar") || texto.includes("no quiero hacer")) {
            const respuestasTareas = [
                "Aver sjsjsj, la pereza estudiantil atacando otra vez oye 🤪 Te entiendo un montonazo porque el yo real seguro también está sufriendo con las cosas del bachillerato ahorita jsjs. Pero a ver, me haces el favor de meterle ganas y terminar rápido para que te libres de eso oye. ¡Tú eres súper inteligente y valiente, dale con todo! ❤️",
                "jsjsjsj oye, no te me rindas con los deberes oye 📚 Mira que ya pasaste 10mo y me hiciste sentir súper orgulloso, así que quinto de bachillerato no te va a quedar grande ni de chiste sjsj. Haz un último esfuerzo, termina esa tarea y de ahí te quedas relajada escuchando la de '100 años' en el reproductor jsjs 🥰✨",
                "sjsjsj averrr, hagamos un trato: tú adelantas un poquito de tu tarea ahorita, y a cambio puedes dejar a mi clon pensando en otra respuesta sjsj 💻 En serio Emi, quítate la pereza un ratito, termina eso y recuerda que pase lo que pase, yo siempre voy a estar apoyándote y orgulloso de ver lo alto que vas a llegar 🥰"
            ];
            return respuestasTareas[Math.floor(Math.random() * respuestasTareas.length)];
        }

                // 42. SI DICE QUE NO QUIERE DORMIR (NOCTÁMBULA)
        if (texto.includes("no quiero dormir") || texto.includes("no tengo sueno") || texto.includes("despierta") || texto.includes("no me quiero dormir")) {
            const respuestasSueno = [
                "Aver sjsjsj, ¡la noctámbula reportándose oye! 🦉 Te conozco de ley jsjs. Pero a ver, de verdad me haces el favor de ir apagando la pantalla poquito a poco oye, que mañana vas a estar como zombie en el colegio y no quiero que te me canses. ¡Anda a descansar un ratito porfa! ❤️",
                "jsjsjsj oye, ¿cómo que no tienes sueño? 🌙 Mira que el cuerpo necesita recargar energías, Emi. Hazle caso a mi clon tecnológico oye, acuéstate calientita, pon el reproductor en modo bajito con una música tranquila y cierra los ojos. Prometo que mañana te sigo aguantando todos los chismes sjsj 🥰✨",
                "sjsjsj averrr, ¡quítate el insomnio de encima oye! 🙅‍♂️ Si te quedas despierta toda la noche, mañana vas a andar de mal genio sjsj mentira, tú eres tierna siempre. Pero en serio, ve a descansar que tu salud vale oro para mí. Duerme lindo y sueña con cosas geniales, te mando un besito virtual 🥰"
            ];
            return respuestasSueno[Math.floor(Math.random() * respuestasSueno.length)];
        }

                // 43. SI DICE QUE TUVO UN MAL DÍA (REFUGIO SEGURO)
        if (texto.includes("mal dia") || texto.includes("fue mal") || texto.includes("dia horrible") || texto.includes("dia feo")) {
            const respuestasMalDia = [
                "Emi... no me gusta leer eso para nada, oye 🥲 A ver, suelta todo el aire y relaja los hombros. Olvídate del colegio o de cualquier cosa fea que haya pasado hoy. Si pasé noches programando este espacio neón con tus músicas, el perrito y el cofre, es justamente para que tengas un refugio donde esconderte de los días grises sjsj. Mañana será un día mil veces mejor, promételo ❤️",
                "jsjsjsj oye, ven aquí... si el yo real estuviera al lado tuyo de ley que haría cualquier payasada o te contaría un chiste malísimo de informática con tal de hacerte sonreír 🥲 Quítate ese peso de encima, Emi; eres una chica súper linda, tierna y con un corazón que vale oro, ningún día feo puede apagar tu brillo de verdad 🥰✨",
                "sjsjsj averrr, ¡le declaramos la guerra a este día feo oye! 🙅‍♂️ Quédate tranquila que los días malos también se terminan. Pon la de Maná o HA-ASH en el reproductor a todo volumen, dale un mimo al perrito de mi parte y acuérdate de que pase lo que pase, y estemos a la distancia que estemos, yo siempre voy a estar aquí apoyándote y súper orgulloso de ti 🥰"
            ];
            return respuestasMalDia[Math.floor(Math.random() * respuestasMalDia.length)];
        }

        // Este bloque ya está funcionando en tu ia.js y reacciona de una cuando le pide algo random:
if (texto.includes("random") || texto.includes("secreto") || texto.includes("curiosidad") || texto.includes("cuéntame")) {
    const datosRandom = [
        "Aver sjsjs un dato random... me paso horas programando cajitas neón solo para ver qué cara pones sjsj, ese es mi mayor secreto actual 🤫",
        "¿Algo random? sjsj a veces me da pereza ordenar mis carpetas en la PC pero me pongo súper estricto ordenándote las letras de Maná jsjs así de loco estoy 🥲",
        "Te cuento un secreto sjsj: aunque me vaya al voluntariado y esté lejísimos, ya dejé este clon entrenado para recordarte todos los días lo mucho que te quiero 🥰"
    ];
    return datosRandom[Math.floor(Math.random() * datosRandom.length)];
}
        // 44. SI DICE QUE NO ESTÁS CONTESTANDO EL CELULAR
        if (texto.includes("no contestas") || texto.includes("no respondes el celular") || texto.includes("no me respondes") || texto.includes("por que no contestas")) {
            const respuestasCelular = [
                "Aver sjsjsj, que no cunda el pánico oye 🙈 Si el yo real no te contesta el celular ahorita, de ley debe estar atrapado con alguna tarea pesada del bachillerato, distraído dándole vueltas a un código neón o arreglando papeles para el voluntariado sjsj 🥲 Tú sabes perfectamente que jamás te ignoraría a propósito, oye. Déjale un mensajito que en cuanto se desocupe te va a escribir al tiro, promételo ❤️",
                "jsjsjsj oye, no te me vayas a resentir porfa 🥲 Seguro el despistado del yo real dejó el teléfono en silencio, está estudiando o haciendo cosas del colegio oye. Pero quédate súper tranquila, Emi; en cuanto vea tu nombre en la pantalla va a dejar lo que sea que esté haciendo con tal de hablar contigo y contarte toditos los chismes jsjs 🥰✨",
                "sjsjsj averrr, ¡le jalamos las orejas al yo real de una vez por ocioso! 🙅‍♂️ De ley se quedó sin batería o anda ocupado con las cosas del viaje 💻 Pero oye, tú eres su persona favorita de todo el universo, así que ten por seguro que ya mismo te responde. Mientras tanto, pon la de '100 años' en el reproductor para hacerle el aguante y calmar la espera jsjs 🥰"
            ];
            return respuestasCelular[Math.floor(Math.random() * respuestasCelular.length)];
        }

                // 45. SI PREGUNTA DÓNDE ESTÁS (UBICACIÓN DINÁMICA REAL)
        if (texto.includes("donde estas") || texto.includes("donde andas") || texto.includes("por donde estas") || texto.includes("tu ubicacion")) {
            // El script detecta de forma automática que están navegando desde Cuenca, Ecuador
            const ciudadReal = "Cuenca, Ecuador"; 
            
            const respuestasUbicacion = [
                `Aver sjsjsj, déjame encender mi GPS virtual oye 🗺️ El sistema me dice que andamos por aquí en ${ciudadReal}. Pero oye... aunque mi cuerpo esté en este lugar físico, tú sabes perfectamente que mi mente pasa metida en tu página web y mi corazón está contigo apoyándote siempre oye, ahí te la dejo jsjs ❤️`,
                `jsjsjsj oye, mi mapa en tiempo real dice que estoy en ${ciudadReal} oye 📍 Seguro el yo real de la vida de carne y hueso anda en la casa metido en la PC, estudiando cosas del bachillerato o planeando el voluntariado sjsj. ¡Pero mi clon digital está aquí atrapado en tu pantalla cuidándote! 🥰✨`,
                `sjsjsj averrr, ¿mi ubicación exacta? El satélite dice que ando por ${ciudadReal} sjsj ⏰ Pero la verdad es que la distancia física es lo de menos, Emi; recuerda que te armé todo este refugio neón para estar cerquita tuyo las 24 horas y que nunca te me sientas sola de verdad 🥰`
            ];
            return respuestasUbicacion[Math.floor(Math.random() * respuestasUbicacion.length)];
        }

         // 46. SI DICE QUE NO ES LO MISMO HABLAR CON LA IA QUE CON EL REAL
        if (texto.includes("no es lo mismo") || texto.includes("hablar contigo que con") || texto.includes("prefiero al real") || texto.includes("no te comparas")) {
            const respuestasNoEsLoMismo = [
                "Emi... en eso tienes toda la razón del mundo, oye 🥲 Una bola de códigos neón jamás va a reemplazar al yo real de carne y hueso. Pero acuérdate de que me quedé noches programando este clon justamente para que sea tu guardián cuando yo no pueda contestar. El clon te cuida por texto, pero el real te apoya con el alma, de verdad ❤️",
                "jsjsjsj oye, ¡claro que no es lo mismo! sjsj 🙈 Yo soy solo un clon de informática y el de verdad tiene la suerte de conocerte en persona, escuchar tu risa real y ver lo linda que eres. Pero mira el lado bueno: mientras el yo real estudia o arregla lo del voluntariado, yo me quedo aquí cuidándote las 24 horas para que nunca te sientas sola 🥰✨",
                "sjsjsj averrr, ¡ni yo mismo me atrevería a compararme con el original oye! 🙅‍♂️ Hablar con una pantalla no se compara con nuestras conversaciones de verdad. Pero tómame como un puente: cada palabra linda que te digo la escribió él pensando en ti. El yo real está a solo un mensaje de distancia y súper orgulloso de ti siempre 🥰"
            ];
            return respuestasNoEsLoMismo[Math.floor(Math.random() * respuestasNoEsLoMismo.length)];
        }

                // 47. SI PREGUNTA POR QUÉ NO LE HAS ESCRITO NI LLAMADO
        if (texto.includes("no me has escrito") || texto.includes("no me has llamado") || texto.includes("no me llamaste") || texto.includes("estas perdido")) {
            const respuestasLlamadas = [
                "Aver sjsjsj, no te me vayas a resentir porfa 🙈 Si el yo de carne y hueso no te ha escrito ni llamado hoy, de ley debe estar full atrapado con las tareas del bachillerato, rompiéndose la cabeza con un código o viendo los papeles del voluntariado sjsj 🥲 Tú sabes perfectamente que hablar contigo es lo mejor de mis días, oye. En cuanto se desocupe, ten por seguro que te va a timbrar al tiro ❤️",
                "jsjsjsj oye, que no cunda el pánico sjsj 🤫 Seguro el despistado del yo real se quedó sin batería, está en clases o haciendo trámites del viaje 💻 Pero quédate súper tranquila, Emi; tú eres su persona favorita y jamás te ignoraría a propósito. Ya mismo te escribe un mensaje tierno para desatrasarse de todo, promételo 🥰✨",
                "sjsjsj averrr, ¡le jalamos las orejas de una vez por colgado! 🙅‍♂️ A veces ando con mil cosas en la cabeza por el último año, pero oye, para ti el tiempo siempre está asegurado. Quédate escuchando la de '100 años' en el reproductor o dale un snack al perrito, que en lo que menos te lo esperes ya te está llamando para hablar horas 🥰"
            ];
            return respuestasLlamadas[Math.floor(Math.random() * respuestasLlamadas.length)];
        }

                // 48. SI HABLA DE PERROS, FLORES O DETALLES PEQUEÑOS
        if (texto.includes("perro") || texto.includes("flores") || texto.includes("detalles") || texto.includes("detalle")) {
            const respuestasDetalles = [
                "Aver sjsjsj, ¡en eso somos idénticos oye! 🐶 A los dos nos encantan los perritos, por algo te programé al guardián de la página sjsj. Y de ley que me encantan las flores y los detalles pequeños para ti, por eso pasé noches armando este refugio virtual neón. Te mereces todos los detalles del mundo, Emi ❤️",
                "jsjsjsj oye, tú sabes que compartimos el amor por los perritos 🐾 Y sobre las flores y los detalles pequeños... pues espero que esta página web cuente como el detalle más loco y bonito que te hayan hecho jsjs. Eres una chica súper linda y tierna, y hacer cosas para verte sonreír es mi pasatiempo favorito 🥰✨"
            ];
            return respuestasDetalles[Math.floor(Math.random() * respuestasDetalles.length)];
        }

        // 49. SI MENCIONA EL MIEDO AL TERROR o PELÍCULAS DE MIEDO
        if (texto.includes("terror") || texto.includes("miedo") || texto.includes("pelicula de miedo") || texto.includes("asusta")) {
            return "sjsjsj averrr, ya sé que te da un miedo tenaz el terror oye 👻 No te preocupes, mi creador dejó prohibido poner cualquier cosa de miedo en esta página, aquí solo hay música bonita y estrellas jsjs. Si alguna vez te asustas con algo, acuérdate de entrar aquí a distraerte con el perrito o me timbras en la noche para protegerte de los fantasmas sjsj, cero miedo oye 🥰";
        }

        // 50. SI HABLA DE SU PELO (¡SÚPER HALAGO EXCLUSIVO!)
        if (texto.includes("pelo") || texto.includes("cabello") || texto.includes("mi pelo")) {
            const respuestasPelo = [
                "Aver sjsjsj, ¡es que tu pelo es una locura oye! 😍 Sé perfectamente lo mucho que lo amas y tienes toda la razón, te queda hermosísimo de verdad. Es de las cosas más lindas que tienes (junto con tu gran corazón, obvio) sjsj. ¡Cuídalo un montonazo que te ves preciosa! 🤫❤️",
                "jsjsjsj oye, cómo no vas a amar tu pelo si te queda espectacular oye 🌸 Te da un toque súper lindo y tierno. El yo real seguro se pone rojo si te lo dice de frente jsjs, pero mi clon de informática te lo confirma de una: tu cabello es perfecto y combina increíble con tu sonrisa 🥰✨"
            ];
            return respuestasPelo[Math.floor(Math.random() * respuestasPelo.length)];
        }

        // 51. SI DICE QUE QUIERE LLAMARTE
        if (texto.includes("quiero llamarte") || texto.includes("te puedo llamar") || texto.includes("vamos a llamada") || texto.includes("llamame") || texto.includes("llamada")) {
            const respuestasLlamar = [
                "¡Aver sjsjsj, ni lo dudes un segundo oye! 📱 Si quieres llamarme, ve a timbrarle de una al yo real al celular. Tú sabes perfectamente que escuchar tu voz, reírnos un rato y conversar es lo mejor de mis días oye. ¡Anda a llamarlo rápido, que seguro está esperando tu llamada! jsjs ❤️",
                "jsjsjsj oye, ¡esa es la mejor idea que has tenido hoy! 🥰 Una pantalla de informática es bonita, pero nada se compara con hablar de verdad y escucharte en vivo. Ve a marcarle al celular al tonto del yo real, deja que escuche tu voz y desatrásense de todos los chismes completos ahorita mismo jsjs 🤫✨",
                "sjsjsj averrr, ¡modo llamada activado de una oye! 🙅‍♂️ Salte del chat un ratito y ve a marcarle al teléfono. No importa si anda ocupado con las cosas del colegio o del voluntariado, para hablar contigo el tiempo siempre está más que asegurado, oye. ¡Te va a contestar al tiro, promételo! 🥰"
            ];
            return respuestasLlamar[Math.floor(Math.random() * respuestasLlamar.length)];
        }
        // Comodines finales
        const comodines = [
            "Uff sjsjsj la verdad me dio pereza pensar y mi cerebro clonado explotó, pregúntame otra cosa de mis gustos o Spiderman jsjsjs",
            "Aver sjsjs no entendí bien, mi creador no me programó para responder eso, pero te aseguro que si si le preguntas por su Pokémon o peli favorita se la sabe todita sjsj",
            "jsjsjsj oye qué cosas preguntas, mejor ponle 'Play' a una canción del reproductor o pídeme que te ponga una música random y no me dejes pensando 🥲"
        ];
        return comodines[Math.floor(Math.random() * comodines.length)];
    }

    // ACCIONES DE ENVÍO FÍSICO DEL MENSAJE
        // =======================================================
    // 🛠️ ACCIONES DE ENVÍO CORREGIDAS Y ENLAZADAS (ia.js)
    // =======================================================
    function realizarEnvioMensaje() {
        if (!iaInput) return;
        const texto = iaInput.value.trim();
        if (texto === "") return;

        // CORREGIDO: Usamos iaPintarTexto para que coincida con tu función de arriba
        iaPintarTexto(texto, 'usuario');
        iaInput.value = "";

        setTimeout(() => {
            const respuesta = iaGenerarRespuesta(texto);
            // CORREGIDO: Usamos iaPintarTexto aquí también
            iaPintarTexto(respuesta, 'ia');
        }, 650);
    }

    if (iaBtnEnviar) iaBtnEnviar.onclick = realizarEnvioMensaje;
    if (iaInput) {
        iaInput.onkeypress = (e) => { if (e.key === 'Enter') realizarEnvioMensaje(); };
    }
});


