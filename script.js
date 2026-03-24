gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".bg-video");

// garante que o vídeo pode ser controlado
video.pause();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true
  }
});

// anima vídeo pelo scroll
tl.to(video, {
  currentTime: 5, // controla quantos segundos do vídeo
  ease: "none"
}, 0);

// zoom leve no vídeo
tl.to(".bg-video", {
  scale: 1.2
}, 0);

// texto aparece suavemente
tl.fromTo(".title",
  { opacity: 0 },
  { opacity: 1 },
  0.3
);