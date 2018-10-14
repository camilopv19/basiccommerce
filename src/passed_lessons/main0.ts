/*function log(message) {
    console.log(message);
}
var message = "Wie get's";
log(message);*/

/* -------------let - var
function sa(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Endlich: ' + i);
}

sa();*/

/***     Type annotations */
/*
let a: boolean;
let b: any;
let c: string;
let d: number = 2;
let e: number[] = [ 1, 2, 3];
let f: any[] = [ 1, true, 'f', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Colors { Red, Purple, Green = 4, Blue};
//Automatic values: { 0 , 1, 4 , Green + 1}

let bckgrndColor = Colors.Green;  // 4
console.log(bckgrndColor);
console.log(Colors.Blue); // 5

*/

/***     Type Assertions */

let msg;
msg = 'abc';
let endetMitC = (<string>msg).endsWith('c');
let altWay = (msg as string).endsWith('c');
console.log(altWay);
/*
*/




