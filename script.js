const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");
const log = document.getElementById("log");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cities = [
  { name: "Berlin", x: 500, y: 200 },
  { name: "New York", x: 100, y: 250 },
  { name: "Tokyo", x: 900, y: 300 },
  { name: "Moscow", x: 700, y: 180 },
  { name: "Paris", x: 480, y: 220 },
  { name: "Beijing", x: 850, y: 260 },
];

function drawLine(from, to, color) {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1 + Math.random();
  ctx.stroke();
}

function fakeAttack() {
  const src = cities[Math.floor(Math.random() * cities.length)];
  let dest;
  do {
    dest = cities[Math.floor(Math.random() * cities.length)];
  } while (src === dest);

  drawLine(src, dest, "lime");

  const message = `[${new Date().toLocaleTimeString()}] Attack from ${src.name} to ${dest.name}`;
  const entry = document.createElement("div");
  entry.textContent = message;
  log.prepend(entry);

  if (log.childNodes.length > 50) {
    log.removeChild(log.lastChild);
  }
}

setInterval(() => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}, 5000);

setInterval(fakeAttack, 500);
