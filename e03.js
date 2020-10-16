/*
03 (bonus) Sorting by selection
Sorting by selection consists of finding the smallest element in the list and placing it first, then finding the smallest among those that remain and placing it second etc.

You can find explanations and examples on Wikipedia

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY
*/
var arr = [29,-1,44,-3,7,13,0,-9,53,-4,24,56,27,-6,43,-5,5,38,59,1];

function Sele(arr) { 
    var arlen = arr.length; 
    for (var i = 0; i < arlen - 1; i++) { 
      let lowest = i; 
  
      for (let n = i + 1; n < arlen; n++) { 
        if (arr[n] < arr[lowest]) lowest = n; 
      } 
  
      if (lowest !== i) {
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]]; 
      } 
    } 
    return arr;
}

console.log(Sele(arr));