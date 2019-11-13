var music = new Audio();
music.src = "assets/music.mp3"; 


function bird() {
    this.y = height/2;
    this.x = 53;


    // How fast the bird object falls
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;

    this.show = function () {

        music.play();
        // Image of mustache
        image(blackM,this.x,this.y)
    }
    this.up = function() {
       this.velocity +=  this.lift; 
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
  
        if(this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 0) {
            this.y = height;
            this.velocity = 0;
        }



    }
} 