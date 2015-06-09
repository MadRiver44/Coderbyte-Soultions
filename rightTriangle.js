// FIRST A WHILE LoOP 

/* produce a 90 degree right triangle with 9 lines
of "#"
*/

var x = ""; // initializes x as an empty string
var y = 1; // starts my counter at one, so I finish w/ 9 #
	while (x.length < 9 ){ // my condition, <9 produces 9, <=9 does 10
	x += "#"; //concatenating the string
	console.log(x); // writes to the console
	y++; // my counter increment
	console.log(\n);

// NOW AS A FOR LOOP 
// for loop have a var, a condition, and a counter

var z = ""; // empty string
	for (var a = 0; a < 9; a++) {
		z += "#";
		console.log(z) // to dev console instead of to browser
	}