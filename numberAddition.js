 Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for 
 all the numbers in the string, add them together, then return that final number. For example: if str 
 is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit 
 numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return 
 two different answers. Each string will contain at least one letter or symbol. 

var str = "88Hello99 3World!";
var sum = 0;

var searchNum = function numberString(str){
 var s = str.match(/\d+/g); // match returns an array of values resulting from regex
     for (var i = 0; i < s.length; i++){ // loop through s
         sum += parseInt(s[i]); // sums result after converting elements to integers
        }return sum;
     };
searchNum(str);
