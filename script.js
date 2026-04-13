document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HLS Video Stream Setup ---
    const video = document.getElementById('hero-video');
    const videoSrc = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';

    if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: false });
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play().catch(e => console.log("Autoplay prevented by browser:", e));
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc; // Fallback for Safari
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }

    // --- 2. Mobile Menu Toggle ---
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuOpen && menuClose && mobileMenu) {
        menuOpen.addEventListener('click', () => mobileMenu.classList.add('active'));
        menuClose.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }
});