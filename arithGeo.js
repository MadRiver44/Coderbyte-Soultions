// cleaner version, helper functions to test for pattern
// 5/5 test cases pass

function arith(arr){
	for(var i = 0; i < arr.length-1; i++){
		var diff = arr[1] - arr[0];
		var seq = arr[i + 1] - arr[i];
		if(seq !== diff){
			return false;
		}
	}
	return true;
}

function geo(arr){
	for(var i = 0; i <arr.length -1; i++){
		var diff = arr[1] % arr[0];
		var seq = arr[i+1]% arr[i];
		if(seq !== diff){
			return false;
		}
	}
	return true;
}

function arithgeo(arr){
	if (arith(arr)){
		return "arithmetic";
	}else if(geo(arr)){
		return "geometric";
	}else{
		return -1;
	}
}

//arithgeo([2,4,8,16,32,64]);



// poor version, test cases do fail..

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

