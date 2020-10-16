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


const bubble = arr => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
      };
    };
  
    return arr;
  };
  
  console.log(bubble([3,2,4,5,7,1,6,87,4587,1244,6587,44112,112,35,012,14,321,2.36,-12]));