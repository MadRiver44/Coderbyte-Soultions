
//while

function fact(num){
	var sum = 1;
	while(num !== 0){
		sum *= num;
		num--;
	}
	return sum;
}

// if/ else

var factorial =  function fact(num){
	var total = 1;
	if(num === 1){
		return 1;
	}else{
		while(num > 0){
			total *= num;
			num--;
		}
	}
	return total;
};

// for loop
 
function FirstFactorial(num){
    var fact = num;
    for (var i = num - 1; i > 1; i--){
        fact *= i;
    }
    return fact;
}
FirstFactorial(8);

/* Why this works

The problem asks for the factorial (ex fact(4) = 4 * 3 * 2 * 1)
First I had to initialize a variable  fact = num, to hold the result.
with the for loop, I was looking to decrement to 1 and cycle down from
num to 1. When the condition becomes false it would break the loop.

First i starts at 3, the condition is true because it's greater than 1. Thus
fact is incremented by multiplying by i. Fact is updated with the first value 4 * 3 (12).
The loop starts again, num is now 3-1 (2), 2 is greater than 1, true. Fact, currently 12,
is incremented by multiplying by 2. It kicks back up to decrement i.