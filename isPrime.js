/*
Have the function PrimeTime(num) take the num parameter being passed and return 
the string true if the parameter is a prime number, otherwise return the string 
false. The range will be between 1 and 2^16.

*/

// prime checker
function isPrime(num){
	var count = 2;
	while(count !== num){
		if(num % count === 0){
			return false;
		}
		count++;
	}
	return true;
}

// generate primes
function genPrimes(num){
	var result = [];
	for(var i = 2; i < num; i++){
		if(isPrime(i)){
			result.push(i);
		}
	}
	return result;
}
genPrimes(200);

// get nth Prime
function nthPrime(num){
	console.log(genPrimes(num * num));
	return genPrimes(num * num)[num];
}

nthPrime(20);