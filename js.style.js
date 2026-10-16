const fisk1 = {
    navn: "fisk1",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "Christianfisk.png",
    xPos: 400,
    yPos: 150,
    speed: 12
}

const fisk2 = {
    navn: "fisk1",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "Christianfisk.png",
    xPos: 200,
    yPos: 150,
    speed: 12
}

//denne del har Sara lavet//
const fisk3 = {
    navn: "fisk1",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "Christianfisk.png",
    xPos: -200,
    yPos: 150,
    speed: 12
}

const fisk4 = {
    navn: "fisk1",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "Christianfisk.png",
    xPos: -400,
    yPos: 150,
    speed: 12
}


const knap = document.getElementById("lydknap1");
const lyd = document.getElementById("voice1");

if (knap && lyd) {
  knap.addEventListener("click", () => {
    lyd.currentTime = 0;
    lyd.play();
  });
}

const knap2 = document.getElementById("lydknap2");
const lyd2 = document.getElementById("voice2");

if (knap2 && lyd2) {
  knap2.addEventListener("click", () => {
    lyd2.currentTime = 0;
    lyd2.play();
  });
}

const knap3 = document.getElementById("lydknap3");
const lyd3 = document.getElementById("voice3");

if (knap3 && lyd3) {
  knap3.addEventListener("click", () => {
    lyd3.currentTime = 0;
    lyd3.play();
  });
}

const knap4 = document.getElementById("lydknap4");
const lyd4 = document.getElementById("voice4");

if (knap4 && lyd4) {
  knap4.addEventListener("click", () => {
    lyd4.currentTime = 0;
    lyd4.play();
  });
}