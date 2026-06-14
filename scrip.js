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

        /* 🔴 CORREGIDO: El nombre del botón entre comillas, luego DOS PUNTOS, y el mensaje entre comillas */
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
            15. Hasta alli por que no quiero decir cosas mas alla solo las superficiales 😖😖`
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

