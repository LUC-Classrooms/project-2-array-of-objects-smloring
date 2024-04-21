/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/
var objects = new Array(10); // the argument to Array() defines its size

// Global Variables go here
var obj1, obj2;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
    obj1 = new MyClass(100, 100);
    obj2 = new MyClass(200, 100);
    for(var i = 0; i < objects.length; i++) {
      objects[i] = new MyClass(random(width), random(height));
      }
    }




function draw(){
  background(115, 147, 179); //blue gray background
  obj1.move(); // move object 1 (obj1)
  obj1.display(); // display obj1 on screen
  obj2.move();
  obj2.display();
  for(var i = 0; i < objects.length; i++){
    objects[i].move(); // each time through the loop, move the next object in the array
    objects[i].display(); // call the display method for each object (0 - 9)
  }
}


