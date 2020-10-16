/*
02 Sort by insertion
Insertion sorting is similar to the way we put cards in our hands when playing.
When we add a card to a hand already sorted, we insert it directly in its place and we repeat the operation for each card to add to our hand.

The idea of ​​sorting by insertion is the same:

We start with the second element of the list. We put it aside (in a variable). If it is smaller than the first, we put the first in place of the second and the second (which was saved in a variable) in place of the first.
We now consider the third element. We put it aside in a variable. If it is smaller than the second, we put the second in place of the third. If it is smaller than the first, we put the first in place of the second.
So on, by shifting each time by one notch to the right all the elements which are larger than the element considered.
You can find explanations and examples on Wikipedia

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY
*/
var arr = [29,-1,44,-3,7,13,0,-9,53,-4,24,56,27,-6,43,-5,5,38,59,1];//mettre chiffre 

function Inse(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(Inse(arr));