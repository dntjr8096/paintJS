const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

let painting = false;

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "rgb(0,0,0)";
ctx.lineWidth = 2.5;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

Array.from(colors).forEach(colors =>
  colors.addEventListener("click", handleColorClick)
);
