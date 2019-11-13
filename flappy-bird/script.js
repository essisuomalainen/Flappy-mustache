var bird;
var pipes = [];
var score= 0;
var speed = 2;
let health = 0;






// variables for the images
var duck;
var bamboo;





// Lives 





// Preload for images. See https://p5js.org/reference/#/p5/image for more info.
function preload() {

    barber = loadImage("assets/barber.png");
    mustache = loadImage("assets/mustache.png")
    blackM = loadImage("assets/black.png");
    redM = loadImage("assets/red.png")
   
}


function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    bird = new bird();
    pipes.push(new Pipe());
   

    
    
    
}

function draw() {
   background(mustache);

   for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
        console.log('hit')
    }

    if(pipes[i].offscreen()) {
        pipes.splice(i,1)
    }
}
   bird.update();
   bird.show();


   if (frameCount % 100 == 0) {
       pipes.push(new Pipe());
   }


//    image(duck,60, 46, 55, 55)
//    image(duck,120, 46, 55, 55)
//    image(duck,180, 46, 55, 55)





 
   


   // More about text
  textAlign(CENTER);
  drawWords(width * 0.5);


   
}



// Checks if spacebar is pressed.
function keyPressed() {
    if (key == ' ') {
        bird.up()

    }
}

setInterval(function() {

    score++;
    speed += 0.1;
    console.log(health);


    
    

    

}, 1000)





// Draws "score" similar function can be used for other text if needed.
function drawWords(x) {
  fill(0);
  

  fill(255);
  text('Score: ' + score, x, 330,);

  


}


