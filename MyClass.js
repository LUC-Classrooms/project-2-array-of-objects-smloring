/**
 * Add code for your class constructor in this file
 */
// the Name of a constructor class should be capitalized
function MyClass (tempX, tempY){ 
    // this constructor expects two arguments
    // all object properties and methods begin with "this."
    this.x = tempX; // assign 1st argument to this.x 
    this.y = tempY; // assign 2nd argument to this.y
    this.d = 50; // initialize .d property to 50
    this.speed = random(-1, 1); // initialize .speed to a random number between 1 and -1
  
    // methods are functions that are assigned to property names
    this.move = function() {
    // define how the object will change location on screen each frame
      this.x += this.speed; // move by the value of .speed
      if (this.x > width || this.x < 0){
      // if the object reaches the right edge OR left edge
        this.speed = this.speed * -1; // reverse polarity!
      }
    }
    this.display = function(){ 
      // define how the object will look
      push();
      translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
      fill(255, 100, 200); // red
      ellipse(0, 0, this.d, this.d); // draw a circle at the center of the object image
      pop();
    

      // Draw eyes
  fill(0); // set fill color to black
  ellipse(this.x - 10, this.y - 10, 10, 10); // left eye
  ellipse(this.x + 10, this.y - 10, 10, 10); // right eye

  // Draw mouth
  fill(255, 192, 203); // set fill color to orange
  triangle(this.x, this.y + 5, this.x - 5, this.y + 15, this.x + 5, this.y + 15); // nose


};
    }
 // end of MyClass() constructor