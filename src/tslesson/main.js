/** Classes */
var Point = /** @class */ (function () {
    function Point() {
    }
    // draw = () => void;
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
/** OBJECT = Instance of a class */
// let point: Point = new Point();
var point = new Point(); //Line 17 abbreviated: point is now "Point" type (cursor upon it shows it)
point.x = 1;
point.y = 4;
point.draw();
