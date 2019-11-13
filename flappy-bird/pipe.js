function Pipe() {
this.top = random(height/2);
this.bottom = random(height/2);
this.x = width;
this.w = 70;
this.speed = speed;






 
this.highlight = false;

if (this.hits = true) {
    health++;
}


// Condition for bird hitting pipe


this.hits = function(bird) {
    if(bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
            this.highlight = true;

                // Resets the score to 0 and speed to 2 for each hit.
                score = 0;
                speed = 2;
                
                

                
                
            return true;

                // If we want a sound effect it would be added here
            
            
            
            
            
        }
        
    }
    this.highlight = false;
   return false
}

this.show = function() {

    // Color for pipes in rgb
    fill(209,151,75);
    
    if (this.highlight) {

        // Color for pipes when hit in rgb///
        fill(255,0,0);
    }
    // rect(this.x, 0 , this.w, this.top);
    // rect(this.x, height - this.bottom, this.w, this.bottom);
    image(barber, this.x, 0, this.w, this.top);
    image(barber, this.x,  height - this.bottom, this.w, this.bottom)
}

this.update = function() {
    this.x -= this.speed;
}

this.offscreen = function() {
    if(this.x < -this.w) {
        return true;
    }else {
        return false;
    }
}
}