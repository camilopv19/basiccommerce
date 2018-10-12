/** Classes */

class Point {
    x: number;
    y: number;
    // draw = () => void;

    draw() { //When a function is part of a class, it's called a METHOD
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point){
        // ...
    }
}

/** OBJECT = Instance of a class */
// let point: Point = new Point();
let point = new Point();  //Line 17 abbreviated: point is now "Point" type (cursor upon it shows it)


point.x = 1;
point.y = 4;

point.draw();

/** 
 * Class: Human, 
 * Object (instance of 'Human'): Bob */