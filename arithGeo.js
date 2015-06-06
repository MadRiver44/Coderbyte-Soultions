var arr = [1,2,3,4,5,10,20];
var nArr = [];
var value = [];

//for (var i = arr.length-1; i > 0; i--){ // loop from end of array

function ag(arr){
for (var i = 0; i < arr.length-1; i++) {
    
    var multiple = arr[1]/arr[0]; // is there a geo common ratio
    var diff = arr[1] - arr[0]; // is there a diff between i and next i
    
    if (arr[i]/multiple === arr[i-1] || 1 * arr[1] * arr[1] === arr[2]){
        value = "Geometric";
    }else if (arr[i+1] - arr[i] === diff){
        value = "Arithmetic";
    }else 
        value = -1;
    }return value;
}
ag(arr);
 4/5 some cases failed

