/*Problem - Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Some examples -
[1] // => 1 (odd number of ones, no other numbers)
[1, 1, 2] // => 2 (even number of ones, odd number of twos)
[1, 1, 3, 5, 5] // => 3 (even number of ones and fives, odd number of threes)
[1, 2, 1, 2, 1] // => 1 (even number of twos, odd number of ones)
[1, 1, 2, 2] // => undefined behavior (no number with an odd number of occurrences)
[1, 2] // => undefined behavior (more than one number with an odd number of occurrences)*/


function findOdd(A) {
    var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });

/*  Note on the above code - creates the associative array object 'count' that will have a key-value pair for each unique element in the array, where the key is the unique element value and the value is the count. Then iterating over the array and for each value either increments the value or creates the key value pair (the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1)*/

    // console.log(count);

    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            //  var value = count[key];
            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}

// In the above, I am using Number() function to convert the keys to number, otherwise codewars tests was failing.
console.log(findOdd([1, 1, 9, 2]));
