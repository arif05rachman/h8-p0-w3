function palindrome(kata) {
    // you can only write your code here!

    var palindrome = '';
    for(i=kata.length-1; i>=0; i--) {
        palindrome+=kata[i];
        console.log(kata[i])
    }
    return kata === palindrome;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false