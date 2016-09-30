 /*
 Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers
  stored in arr and return the string true if any combination of numbers in the array can be 
  added up to equal the largest number in the array, otherwise return the string false. 
  For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
  The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
 */

// using power set to find all combinations and test for answer

function arrAdd(arr){
    var maxNum = Math.max(...arr);
    arr.splice(arr.indexOf(maxNum),1);
    var sets = [[]];
    
    for(var i = 0; i < arr.length; i++){
        var len = sets.length;
        for(var j = 0; j < len; j++){
            var group = sets[j].concat(arr[i]);
            sets.push(group);

            var total = group.reduce(function(all, item){
                return all + item;
            });
            if(total === maxNum){
                return true;
            }
        }
    }
    return false;
}
//arrAdd([2,3,5,7]);

// powerSet example...

function powerSet(arr){
    var set = [],
        len = arr.length,
        combinationsCount = Math.pow(2, len),
        combination;

    for (var i = 1; i < combinationsCount ; i++ ){
        combination = [];
        for (var j=0;j<len;j++){
            if ((i & (Math.pow( 2, j )))){
                combination.push(arr[j]);
            }
        }
        set.push(combination);
    }
    return set;
}
var sets = powerSet(["a", "b", "c", "d"]);
sets;


/*
[ [ 'a' ],
  [ 'b' ],
  [ 'a', 'b' ],
  [ 'c' ],
  [ 'a', 'c' ],
  [ 'b', 'c' ],
  [ 'a', 'b', 'c' ],
  [ 'd' ],
  [ 'a', 'd' ],
  [ 'b', 'd' ],
  [ 'a', 'b', 'd' ],
  [ 'c', 'd' ],
  [ 'a', 'c', 'd' ],
  [ 'b', 'c', 'd' ],
  [ 'a', 'b', 'c', 'd' ] ]
*/





 // wrong ---i did this as add all elements to equal max # in array
 // it needs to be any combination
 var arr = [1,2,3,4];
 var arrMax = [];
 var sum = 0;
 
 
 function getMax(arr){
     var x = Math.max.apply(null,arr); // find max
     var index = arr.indexOf(x); // need index to cut from array
     var nArray = arr.splice(index,1); // new var
     console.log(nArray);
     for (var i = 0; i < arr.length; i++){
         sum += arr[i];
         console.log(sum);
        }if (sum == x){
            
            return true;
        }else{
            return false;
        }
     

 }

 /*
 
 var arr = [4, 6, 23, 10, 1, 3];
var arrayMax = [];
var sum = 0;


function getMaxOfArray(arr){
    var x =  Math.max.apply(null, arr);
    var spot = arr.indexOf(x);
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }console.log( x, sum, spot);

        function arrayAdd(x, sum){
            if(sum - x == x){
                return true;
            }else{
                return false;
            }
    }return x, sum;
}      

getMaxOfArray(arr);

*/