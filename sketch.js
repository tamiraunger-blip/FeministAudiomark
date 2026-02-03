let input;
let words = ["geschichte der ungleichheit", "entfaltung der neuen weiblichkeit", "matriarchat", "vielzahl der orientierungen",  "antiwerbung mit störaktionen"];

let sounds = [];

let soundSymbol;

let myFont; // <<< hinzugefügttt

function preload(){
  sounds.push (loadSound ("assets/Seite-26-Geschichte-der-Ungleichheit.mp3"));
  sounds.push (loadSound ("assets/Seite-104-Entfaltung-der-neuen-Weiblichkeit.mp3"));
  sounds.push (loadSound ("assets/Seite-190-Matriarchat.mp3"));
  sounds.push (loadSound ("assets/Seite-261-Vielzahl-der-Orientierungen.mp3"));
  sounds.push (loadSound ("assets/Seite-290-Antiwerbung-mit-Stoeraktionen.mp3"));
let myFont;

  myFont = loadFont('fonts/Montserrat/Montserrat-VariableFont_wght.ttf');
}



function setup() { 
  let canvas = createCanvas(400, 400);
  canvas.hide();


input = document.querySelector("#eingabe");
soundSymbol = select("#sound");
soundSymbol.hide();

// Placeholder setzen
input.placeholder = " Hier Text eingeben";

input.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();
  let found = false;

  for (let i = 0; i < words.length; i++) {
    if (value === words[i]) {
      // exaktes Wort → Sound starten
      for (let j = 0; j < sounds.length; j++) {
        sounds[j].stop();
      }
      sounds[i].play();
      soundSymbol.show();
      found = true;
      break;
    }
  }

  // sobald NICHT mehr alle Buchstaben stimmen
  if (!found) {
    for (let j = 0; j < sounds.length; j++) {
      sounds[j].stop();
    }
    soundSymbol.hide();
  }
});




  setTimeout(() => {
    console.log("delayed");
    let elements = document.querySelectorAll(".delayed");
    console.log(elements.length);
    elements.forEach(el => {
      console.log(el);
      el.classList.remove("delayed");
      el.classList.add("fadeIn");
    });
      
  }, 1500);

  function setup() {
  createCanvas(400, 200);
  textFont(myFont);
  textSize(32);  
  
  function touchStarted() {
  userStartAudio();
}

function mousePressed() {
  userStartAudio();
}
}

}



function draw() {
  background(220);
 }





