/**
 * Create three variables, a, b, and c.
Set them to any numbers you please as long as:

a is not zero
b² is greater than or equal to 4 × a × c
Now use the quadratic formula (oh no) to calculate two value of two new variables, x1 and x2.
*/


// top:  -b +- sqrt(b^2-4ac)
// bottom:  2a

// a b c
let a = 1;
let b = 10;
let c = 2;

let inside = (b * b) - (4 * a * c);
let sqrt = Math.sqrt(inside);

let top1 = -b + sqrt;
let top2 = -b - sqrt;

let bottom = 2 * a;

let x1 = top1 / bottom;
let x2 = top2 / bottom;

console.log("The value of x1 is " + x1);
console.log("The value of x2 is " + x2);
