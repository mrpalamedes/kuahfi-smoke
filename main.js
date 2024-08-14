// references to DOM elements
const kuahfi = document.querySelector("#sebelum");
const btn = document.querySelector("#btn");

// images of kuahfi
const sudahImg = "./images/sesudah.png";
const belumImg = "./images/sebelum.png";

// sounds
const sudahSound = new Audio("./sound/kapi-wooo.m4a");
const belumSound = new Audio("./sound/kapi-fuck-u-bitch.m4a");

// event handlers (desktop)
btn.addEventListener("mousedown", afterSmoke);
btn.addEventListener("mouseup", beforeSmoke);

// event handlers (mobile)
btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  afterSmoke();
});

btn.addEventListener("touchend", function (e) {
  e.preventDefault();
  beforeSmoke();
});

// functions
function afterSmoke() {
  kuahfi.src = sudahImg;
  sudahSound.play();
}

function beforeSmoke() {
  kuahfi.src = belumImg;
  belumSound.play();
}
