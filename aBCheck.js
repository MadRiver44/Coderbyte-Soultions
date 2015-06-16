

// Create the function "aBCheck(string)" that accepts a string parameter. Return the STRING value "true" if the characters 
// a or b are separated by 3 places anywhere in the string at least one time. Otherwise return the STRING value "false"
 
// EXAMPLES:
// INPUT: aBCheck("pane borrowed");
// OUTPUT: "true"
// INPUT: aBCheck("chainsbreak")
// OUTPUT: "true"
// INPUT: aBCheck("painsarc");
// OUTPUT: "true"

//correct

function ABcheck(str){
    for (var i = 0; i < str.length; i++){
        //console.log(str[i], str[i+4]);
        if(str[i] == "a"){
            if(str[i +4] == "b"){
                return true;
            }
        }
    }return false;
}
ABcheck("lane borrowed");











function aBCheck(string){
    // cant do index position because spaces in string throw count off
    
    // 1. what i want to do is find the first occurance of a or b
    // 2. from that, count to another occurance of a or b
    // 3. determine if the distance is 3
    // 4. return true if 3, false if less or more than 3
    
    //for (var i = string.indexOf("a"); i <= string.length; i++)
    //if(string[i] - string.indexOf())
        var firstA = string.indexOf("a");
    //console.log(firstA);
        var firstB = string.indexOf("b");
    //console.log(firstB);
    if (firstB - firstA <= 3 ){
        return true;
    } else {
        return false;
    }
}

aBCheck("pane borrowed");
//aBCheck("chainbreak");
//aBCheck("painsarc");


//1. find first instance of string.indexOf("a")
//set that to a var firstA, 
//2. var array2 = string.slice([firstA], string[firstA] +3)
// forms new array that has values from first a to a +3
//3 if array2[2] === "b" || "a",
//return true
//else false

// Solution 2/22

function aBCheck(string){
    var firstA = string.indexOf("a");
    console.log(firstA);
        // console.log(string[firstA]);
        // string[firstA] returns what is at index position 1, 'a'
    console.log(firstA + 3)
       if (string[firstA + 3] == "a" || string[firstA + 3] == "b"){
            return true;
        }else{
            return false;
        }
    }