

var a = ["a","b","a",,3,"b",["a","ds","b",[42,19,"a","z","c","b"]],[]];

a.join();

'a,b,a,,3,b,a,ds,b,42,19,a,z,c,b,'

// converts all elements to strings and concatenates them 
// a.join flattens the array into one string. 
// That is, the arrays in the array are 'extracted up' and are no
// longer nested.

a;

[ 'a', 'b', 'a', 3, 'b', [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ], [] ]

// calling a; still means the original list is in tact. a.join() creates 
// a new string.

a.pop();

[]

// removes last element off the array and returns what was popped.
// a is now updated without the value that was popped.

a.push(["t","t"]);

8 // reurns the index position at the insertion point

a;

[ 'a',
  'b',
  'a',
  3,
  'b',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  [ 't', 't' ] ]

// a.push inserts the array ["t","t"] to the end of the array.

a.reverse();

[ [ 't', 't' ],
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  'b',
  3,
  'a',
  'b',
  'a' ]

// reverses the entire array 

a.reverse(); // just unreversing it

a.shift();

'a'
// returns the FORMER first element in the array ..'a'

a;

[ 'b', 'a', 3, 'b', [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ], [ 't', 't' ] ]

// first element in the array ..'a', is now removed

a.unshift("Zero");

[ 'Zero',
  'b',
  'a',
  3,
  'b',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  [ 't', 't' ] ]

// inserts the string "Zero" into the first index of the array
a;



a.slice(1,3);

[ 'b', 'a' ]

// returns an array with the elements starting at index 1 and up to BUT 
// NOT INCLUDING 3, thus elements 1 and 2 only
// slice() does not modify the array, only wxtracts what you call for
a;

a.sort();

[ 3,
  'Zero',
  'a',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  'b',
  'b',
  [ 't', 't' ] ]

// sorts in place the elements of the array
// the array is sorted by alphabetical order or more precisely the order
// determined by the character encoding
// there is no copy, the array is altered

// if you wish to unsort either make a copy first or use map to index value pairs
a;

a.toLocaleString();

'3,Zero,a,a,ds,b,42,19,a,z,c,b,b,b,t,t,'

// returns an array to a localized string ?? more on that later
// returns a string
a;

[ 3,
  'Zero',
  'a',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  'b',
  'b',
  [ 't', 't' ] ]

a.toString();

'3,Zero,a,a,ds,b,42,19,a,z,c,b,b,b,t,t,'

// returns the array as a string
// 
a;

[ 3,
  'Zero',
  'a',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  'b',
  'b',
  [ 't', 't' ] ]

var b = [ "more alpha"];
a.concat(b);

[ 3,
  'Zero',
  'a',
  [ 'a', 'ds', 'b', [ 42, 19, 'a', 'z', 'c', 'b' ] ],
  'b',
  'b',
  [ 't', 't' ],
  'more alpha' ]

// concatenates array a and array b


a.indexOf("a");

2 

// returns the first index position of argument passed or if not 
// present in the array, returns -1
// accepts two arguments, the item to look for and the optional index 
// to start looking
// indexOf starts at the front of the array
// 

a.lastIndexOf("ds");

-1

// lastIndexOf also accepts two arguments but starts at the back of
// the array and also does not dive into sub arrays
