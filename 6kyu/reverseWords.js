/*https://www.codewars.com/kata/reversed-words/

Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
should return "battle no requires which that is victory greatest The"
*/

function reverseWords(str) {
  /*First trim the given sentence of any extra leading and trailing spaces.
  /a|b|c/	Any one of several patterns
  /^/	Start of input
  /$/	End of input
  "g" = global: replace *all* leading spaces with empty string.*/
  var sentence = str.replace(/^\s+|\s+$/g, "");
  // Now consolidate multiple whitespace in a row as a single space character:
  sentence = sentence.replace(/\s+/g, " ");
  /* With our spacing now streamlined, using the split() to extract words into array elements; and then, use reverse() to invert the storage order of each array element: the first one becomes last, and son on */
  var words = sentence.split(" ").reverse();
  // Now convert the array into a string with join()
  str = words.join(" ");
  return str;
}

console.log(reverseWords("The greatest victory is that which requires no battle"));
