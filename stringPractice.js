// Swapcase

var a = "thE QuICk bRoWN foX";
var newStr = ""; 
//reverse the case
 
for (var i = 0; i < a.length; i++){   // loop thru string
    var char = a[i];
    if (char === char.toLowerCase()){       // test if char is upper or lower
        newStr = newStr + char.toUpperCase();    // var holds uppser switch
    } else {
        newStr = newStr + char.toLowerCase();   // var holds lower switch
    } //Got it, now to return it in one line
    
}console.log(newStr);  // the var newStr has held all values and is printed outside function

// now do it 
1. every other word, 
2. every other letter, 
3. one word upper one lower.
4. last word caps, 
5. first letter cap last word cap, **** harder than I thought
6. return index position of items
7. replace each letter with next letter in alphabet
8. switch position of words
 

1. // Alt Case every other word

var a = "The Quick Brown Fox";
var b = a.split(" "); // breaks string into pieces seperated by " ", in array
var c = ""
for (var i = 0; i < b.length; i++) { // loop through array
    if (i%2 !== 0){
        c = c + " " + b[i].toLowerCase();
    } else {
        c = c + " "+ b[i].toUpperCase();
    }
    
    console.log(c);
}

2. // switch case every other letter 

var word = "The Quick Brown Fox";
newStr = " ";
for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (i%2 !== 0){
        letter === word[i].toLowerCase()
            newStr = newStr + ""+ letter.toUpperCase();
        } else {
        newStr = newStr + "" + letter.toLowerCase();
        }
}

console.log(newStr);

3. // switch case one word upper one word lower

var word = "The Quick Brown Fox";

var nArray = word.split(" "); // splits string into array seperated by " "
var newStr = " "; // placeholder for changed items

for (var i = 0; i < nArray.length; i++){ loop through array
    if (i%2 == 0){ // test which word or item I want Capped or Lowered
        newStr = newStr + " " + nArray[i].toUpperCase(); // concat to empty str
    }else {
        newStr = newStr + " " + nArray[i].toLowerCase(); // concat to empty str
    }
}
console.log(newStr); //Bang, done!!

4. // switch case for last word

var word = "The Quick Brown Fox";
var _array = word.split(" ");
var newStr = " ";
var z = _array.length;
for (var i = 0; i < z; i++){
    if (i !== z-1){
        newStr = newStr + " " + _array[i]
    }else{
        newStr =  newStr + " " + _array[i].toUpperCase();
    }
}console.log(newStr);


5. //all Caps
Best....console.log(word.toUpperCase());

ok
var word = "The Quick Brown Fox";
var _array = word.split(" ");
var newStr = " ";
for (var i = 0; i < _array.length; i++){
    newStr =  newStr + " " + _array[i].toUpperCase();
    
}console.log(newStr);

6.// First letter Cap, last word Cap 

/*var word = "the QUICK Brown Fox";
var nArray = word.split(" ");
var nStr = " ";
var last_element = nArray[nArray.length - 1];

for (var v = 0; v < nArray.length; v++) { // loop through array word by word
    // don't need to loop though word letter by letter because
    // nArray[1].toLowerCase() simply will lowercase the whole element
    if (nArray[0][0] !== nArray[0][0].toUpperCase()){ // test if first letter is upper
        nStr = nArray[0][0].toUpperCase(); // change to upper
        if (nArray)

}
        
    } 
    */
/*If given a string of a two word name formatted with any mix of capitalization,
  can you manipulate the string to ensure the first name has a capital first letter
  and the last name is totally capitalized? Assume there's a space 
  between the names. For instance, turning a string like "cAmEROn PittMAN" i
  nto "Cameron PITTMAN". Your answer should be a single string saved to the 
  variable called finalName.*/
  Like always, there are many ways of solving this problem. Here's what I came up with:

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
var names = oldName.split(" ")
/* 

Here, we're creating an array of names by breaking the original name at the space. At this point for 
our original example, names === ["AlbERt", "EINstEiN"]

names[1] = names[1].toUpperCase();

The string.toUpperCase() method does exactly what its name describes. It's acting on names[1], which is 
"EINstEiN" in the original example. So here, we're reassigning the second element in the names array to 
the all caps version of "EINSTEIN".

names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

This line builds Albert. names[0].slice(0,1).toUpperCase() starts by acting on the first element in the 
names array, which is "AlbERt" in the example. Then, we grab just the first letter by using .slice(0,1). 
Then we simply use the .toUpperCase() method again to make sure the first letter is capitalized. Also, notice
 how we chained two methods together here.

The next part, names[0].slice(1).toLowerCase() acts similarly, except this time we're using .slice(1) to grab
 the rest of the first string, which is "lbERt" in the example. Then we simply chain the .toLowerCase() method 
 to make sure that the rest of the letters in the first name are lower case. Once we have the first letter 
 capitalized and the rest of the name lower case, we concatenate them together with the +.

finalName = names.join(" ");

array.join([chars]) lets us put array elements together into a single string. Each element will be separated by the 
optional chars. In this case, we want a space between the two names, so we made the chars a single space, " ". With that, 
we've joined "Albert" and "Einstein" to form "Albert EINSTEIN"!
*/

var y = "cAmeROn PittMAN";
var _index = y.indexOf(" "); // finds where the first instance of space is
var last = y.substr([_index]).toUpperCase(); //caps last name
var first = y.substr(0,[_index]).toLowerCase(); //lowers first name

var cap = first.charAt(0); // finds first char
var z = cap.toUpperCase();// caps first char in first
finalName = first.replace(cap,z) + last;   
 






7.// replace each letter in string with the next letter in alphabet NOT DONE NOT DONE NOT DONE

var alpha = "abcdefghijklmnopqrstuvwxyz";
var _string = "Will this be as hard as the last one?";
var y = _string.toLowerCase();
var n = " ";

for (var i = 0; i < y.length -1; i++) { //y.length -1 provides the exact # of occurances

    var val = alpha.search(y[i]) // finds all indexes of occurances in y in alpha 
    var asx = y.replace(/[a-z]/g,alpha[val +1]);
    /* here, y is replacing the first letter, w, and the rest of the letters, with the            replacement item, that is why the whole sentence becomes xxxx, then jjj, etc.
    so I have to move this item elsewhere */
    
    n = n + " " + asx;
    //console.log(val +1);
    //console.log(n+" "+asx);
     //n.push(val); // is an array with index values of val
    //console.log(n); // if console.log is up here it will print as many imes as the loop runs
    
 
   // console.log(val);
    (y.match(/[a-z]/g)); // matches all letters and put them in an array

}
//console.log(n); //index positions of y found in alpha

// now take that index position and add 1
// take that number and pass it in to replace what's in y with whats found at index+1 in alpha

//console.log(n.shift(i)); // shift returns first element from an array
//console.log(n.shift(i)+1); // adds 1 to number
//console.log(n.shift(i)+1);
//console.log(y.replace(/[a-z]/g,alpha[val +1]));
console.log(n);

8. // Look for "E" in the text

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
		    // j is set to index position i, when text[i] =="E";
		    //myName.length  == 4 + j == 30
		    // so we'll traverse up to 34, by incrementing by 1
		    // and push to hits array
		    
		    // "If we find the first letter of the name, start the //second for loop!" This loop says: "I'm going to add characters to //the array until I hit the length of the user's name."
		    console.log(myName.length +i);
		    console.log(j);
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

9. 
//pallindrome. create a function that accepts a string and detect true if //pallindrome and false if not

// accounts for 1 letter, 2letters, and evern numbers, but not 3 like mom or dad


// so so

function isPallindrome(str){
    var section = str.substring(0, str.length/2);
    if (str.length%2 === 0){
        if(section === str.substring(str.length/2+1)){
        }return "is a pallindrome";
    }else {
        return "not a pallindrome";
    }
}
isPallindrome("ded");


var str = "deeeeeem"
console.log(str.split('').reverse().join(""));
/*var section = str.substring(0, str.length/2);
console.log(section);*/

//Best

function isPallindrome(str){
    if (str.split("").reverse().join("") === str){
        return "is pallindrome";
    }else {
        return "not a pallindrome";
    }
    
}
isPallindrome("mooom");



10. 

// vowel count

var vowels =  "aeiou";
var count = 0;

function vowelCount(str){
    for (var i = 0; i < str.length; i++){
        for (var q =  0; q < vowels.length; q++){
            if(vowels[q] === str[i]){
                count++;
            }

        }
    }return count;
}

11. // sum numbers from 1 to num;

var sum = 0;
function sumNum(num){
    while (num !==0){
       sum +=num;
       num--;
    }return sum;
}
sumNum(10);