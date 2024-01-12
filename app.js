import * as rive from "@rive-app/canvas"

let animation =  anime({
    targets: '.square',
    translateX: {
      value: 250,
      duration: 3000
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });

  const r = new rive.Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "bumpy",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
});