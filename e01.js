/*
01 Bubble sorting
The idea is to move the largest items to the end of the list by moving them as follows:

We consider the first element of our list and compare it to the second. If it is larger, they are inverted.
We now consider the second element and compare it to the third. If it is larger, they are inverted.
We continue like this until we get to the end of the list. At this stage, we necessarily put the largest element at the end of the list.
We start the first 3 steps again but this time going only to the penultimate position (since the largest is already in the last position)
We continue in this way by decreasing each time the place where we stop the comparisons.
This sorting is called bubbles because at each step, we bring up the largest "bubble" towards the end of the list.
For perhaps clearer explanations and examples we can go to Wikipedia

The goal of this exercise is to make a program that sorts a list using bubble sort.

INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY
*/

var arr = [29,-1,44,-3,7,13,0,-9,53,-4,24,56,27,-6,43,-5,5,38,59,1]

function bubble(arr) {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];// 
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
      };
    };
  
    return arr;
  };

console.log(bubble(arr));
