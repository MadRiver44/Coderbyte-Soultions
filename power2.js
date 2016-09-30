/*
Have the function PowersofTwo(num) take the num parameter being passed which 
will be an integer and return the string true if it's a power of two. If it's 
not return the string false. For example if the input is 16 then your program 
should return the string true but if the input is 22 then the output should be 
the string false.
*/


//recursion

function power2(num){
	if(num / 2 === 1){
		return true;
	}else if(num % 2 !== 0){
		return false;
	}
	console.log(num);
	return power2(num/2);
}
power2(64);

//or

function power2(num){
	while(num % 2 === 0 && num !== 0){
		num = num / 2;
			if(num === 2){
			return true;
		}
		console.log(num);
	}return false;
}
power2(32)

// beginner...

function power2(num){
    while (num % 2 === 0 && num !== 0){ 
    	/*IT'S ALL ABOUT THE CORRECT CONDITIONAL!!
    	KEEPS CHECKING EVEN-NESS AND LIMITING
    	DIVISION TO 2/2 == 1. */

        num = num /2; // division
        if (num === 1){ // test to limit division decrementing
            return true; // to get to 2/2 == 1, then int must be even
        }
    }  return false; // kicks out of loop once while or if condition !== true 
}

power2(8);