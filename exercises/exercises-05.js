function palindrome(kata) {
    let balik = ''
    for(let i=kata.length-1; i>=0; i--) {
        balik += kata[i]
    }
    return balik === kata
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false