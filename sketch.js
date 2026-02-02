let input;
let words = ["geschichte der ungleich", "geschichte der ungleichheit", " entfaltung der neuen weib", "entfaltung der neuen weiblichkeit", "vielzahl der orientierungen", "matriarchat", "antiwerbung mit störaktionen"];

let sounds = [];

let soundSymbol;

let myFont; // <<< hinzugefügt

function preload(){
 /* sound.push("assets/sound0.mp3");
  sound.push("assets/sound1.mp3");
  sound.push("assets/sound2.mp3");
  ...*/
let myFont;

function preload() {
  myFont = loadFont('fonts/Montserrat/Montserrat-VariableFont_wght.ttf');
}



  
}

function setup() { 
  let canvas = createCanvas(400, 400);
  canvas.hide();


input = document.querySelector("#eingabe");
soundSymbol = select("#sound");
soundSymbol.hide();

// Placeholder setzen
input.placeholder = " Hier Text eingeben";

// Event Listener für Input
input.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();

  if (words.includes(value)) {
    input.placeholder = ""; // verschwindet
    console.log(`Eingabe stimmt mit '${value}' überein`);
    soundSymbol.show();     // Sound-Symbol optional anzeigen
  } else {
    input.placeholder = "Hier Text eingeben"; // wieder anzeigen
    soundSymbol.hide();                     // Symbol ausblenden
  }
}); 



  soundSymbol.hide();
  input.addEventListener ("input", (event) => {
    for(let i = 0; i<words.length; i++){
      if(event.target.value.trim().toLowerCase() == words[i]){

        for(let j = 0; j<sounds.length; j++){
          //sound[j].stop();
        }
        console.log(i + "-tes Wort entspricht der eingabe");
       // sound[i].play();
       soundSymbol.show();

      }
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
}

}



function draw() {
  background(220);
 
}

