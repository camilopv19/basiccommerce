/** Arrow functions 

//Standard JS
let log = function(m){
    console.log(m);
}

let log2 = function(m){
    let a = 1;
    console.log(m + a);
}


//Arrow Function Way  (C# calls it "lambda functions")
let doLog = (m) =>console.log(m);  //When the function has only 1 line
                                    /**Even the parameter's parenthesis can be omitted but it's a
                                     * bad practice:
                                     * [BAD CODE] let doLog = m =>console.log(m);
                                     */
/*
let doLog2 = (m) =>{
    let a = 1;
    console.log(m + a);
}

let aLog = () => console.log(); //No parameters at all


let m = 'ass';

log(m);
doLog(m);

log2(m);
doLog2(m);
*/

/** Interfaces */

/// Inline assertions: Avoid by "verbose" 
let drawPoint = (point: { x: number, y: number}) =>{
 // ...code
}

drawPoint({
    x: 1,
    y: 2
})

/** Actual Interface*/

interface Point { //Pascal naming convention: Start with capital letters
    x: number,
    y: number
}

let drawPointWithInterface = (point: Point) =>{
    // ...code
   }
