function angkaPalindrome(num) {
    function balikAngka(num) {

        var numPalindrome = ''; 
        for(var i=String(num).length-1; i>=0; i--) {
            numPalindrome+=String(num)[i];
        }
        console.log(numPalindrome)
        return numPalindrome;
    }
    var numString=num.toString();
    var stringBalikAngka=balikAngka(num);
    if(numString!=stringBalikAngka) {
        while(num!=balikAngka(num)) {
            num++;
            console.log(num)
        }
    } else {
        num++
    }
    return num;

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001