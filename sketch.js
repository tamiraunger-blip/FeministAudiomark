let input;
let words = ["hund", "katze", "hase", "maus", "elefant"];

let sounds = [];

let soundSymbol;

function preload(){
 /* sound.push("assets/sound0.mp3");
  sound.push("assets/sound1.mp3");
  sound.push("assets/sound2.mp3");
  ...*/
let myFont;

function preload() {
  myFont = loadFont('assets/Roboto-Regular.ttf');
}



  
}

function setup() { 
  let canvas = createCanvas(400, 400);
  canvas.hide();
  input = document.querySelector("#eingabe");
  soundSymbol = select("#sound");

  for(let i = 0; i<sound.length; i++){
  sound[i].onended(()=>{
    soundSymbol.hide();
  })
}
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
      
  }, 3000);

  function setup() {
  createCanvas(400, 200);
  textFont(myFont);
  textSize(32);
}

}



function draw() {
  background(220);
 
}

