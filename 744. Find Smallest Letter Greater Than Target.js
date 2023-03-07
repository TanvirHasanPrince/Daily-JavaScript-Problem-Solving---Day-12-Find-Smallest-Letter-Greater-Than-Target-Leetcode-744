/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
*/

const letters = ["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i',];
const target = "d";

function nextGreatestLetter(letters, target) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2); 
    console.log(mid); 
    if (letters[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(start)

  return letters[start % letters.length]; // reaminder = 0, letters[0] == give us the first letter.

  //letters.length = 9, we were searching for D, which has 4, 4/9.. give us - 4. 
}

console.log(nextGreatestLetter(letters, target));


/*
How are you comparing the number with letter?

In JavaScript, characters are represented as Unicode code points, which are essentially integers. When you compare a character to another character or a number, JavaScript compares their Unicode code points.

For example, the Unicode code point of the character "a" is 97, and the code point of the character "b" is 98. So if you compare "a" to "b" using the less-than operator ("<"), JavaScript will return true, because 97 is less than 98.

In the case of the nextGreatestLetter function, we are comparing characters (which are represented as elements of the letters array) to the target character, which is passed as an argument to the function. We compare these characters by comparing their Unicode code points. The comparison is done using the less-than or greater-than operators ("<" or ">"), just like you would compare numbers.

*/

/*----------------------------------------------------------------
In the nextGreatestLetter function, we use the line letters[start % letters.length] to return the smallest character in letters that is lexicographically greater than target.

The reason we use the modulo operator (%) here is to handle the case where left is equal to letters.length. This can happen if target is greater than or equal to all the characters in letters. In this case, we want to "wrap around" to the beginning of the letters array and return the first character.

For example, suppose letters is ['a', 'b', 'c'] and target is 'd'. After running the binary search, start will be 3, which is equal to letters.length. To return the first character in letters, we can use letters[start % letters.length], which is equivalent to letters[3 % 3], which is letters[0], which is 'a'.

If start is less than letters.length, then start % letters.length will simply return start, and we'll return the character at index start in letters.

So letters[start % letters.length] is a concise way to "wrap around" to the beginning of the letters array if we've reached the end of the array, and it works because the % operator returns the remainder of a division operation, which "wraps around" to the beginning of the dividend if the divisor is larger than the dividend.

*/