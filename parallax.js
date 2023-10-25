const layers = document.querySelectorAll(".parallax-layer");
const container = document.querySelector(".parallax-container");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

container.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  layers.forEach(layer => {
    const depth = layer.getAttribute("data-depth");
    const movementX = -(mouseX * depth);
    const movementY = -(mouseY * depth);
    layer.style.transform = `translate3d(${movementX}px, ${movementY}px, 0)`;
  });
});