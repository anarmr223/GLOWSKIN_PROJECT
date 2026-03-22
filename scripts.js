
function navbarTransition() {
    window.addEventListener('scroll', function () {
        const title = document.querySelector('.header'); // Cambia por tu clase real
        const scrollPos = window.scrollY;

        // Si el usuario bajó más de 50px, empezamos a quitar el título
        if (scrollPos > 50) {
            title.style.opacity = "0";
            title.style.pointerEvents = "none"; // Para que no se pueda clickear si tiene links
        } else {
            title.style.opacity = "1";
            title.style.pointerEvents = "auto";
        }
    });
}

function videoAutoplay() {
    const videoPlayer = document.getElementById('glowskinVideoPlayer');
    const playlist = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4']; // Reemplaza esto con los nombres de tus videos
    const path = 'utils/videos/';
    let currentVideoIndex = 0;

    // Asignar la ruta del primer video al iniciar
    videoPlayer.src = path + playlist[currentVideoIndex];

    videoPlayer.addEventListener('ended', () => {
        currentVideoIndex++;
        if (currentVideoIndex >= playlist.length) {
            currentVideoIndex = 0; // Vuelve al primer video cuando termina la lista
        }
        videoPlayer.src = path + playlist[currentVideoIndex];
        videoPlayer.play();
    });
}


function fotosAutoScroll() {
    const productImages = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png']; // Ajusta según tus imágenes
    const imagePath = 'utils/img/';
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselContainer = document.getElementById('carouselContainer');

    const imageWidth = 300; // px
    const gap = 15; // px
    const scrollSpeed = 0.2; // px por frame (ajusta para más/menos velocidad)
    const containerWidth = 500; // px (ancho visible)

    // Crear función para generar imágenes
    function createImageElement(src) {
        const img = document.createElement('img');
        img.src = imagePath + src;
        img.style.minWidth = imageWidth + 'px';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '0.5rem';
        img.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        return img;
    }

    // Agregar imágenes inicial (duplicadas para efecto infinito)
    [...productImages, ...productImages].forEach(img => {
        carouselTrack.appendChild(createImageElement(img));
    });

    // Variable para controlar el desplazamiento
    let scrollPosition = 0;

    // Función de desplazamiento automático
    function autoScroll() {
        scrollPosition += scrollSpeed;
        carouselContainer.scrollLeft = scrollPosition;

        // Cuando llega al final, resetear al inicio (efecto infinito)
        const maxScroll = carouselTrack.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            carouselContainer.scrollLeft = 0;
        }

        requestAnimationFrame(autoScroll);
    }

    // Iniciar desplazamiento automático
    autoScroll();
}
