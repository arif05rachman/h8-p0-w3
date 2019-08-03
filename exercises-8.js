function pasanganTerbesar(num) {
    // you can only write your code here!
    var numToString = num.toString();
    var arrayString = '';
    var j=0;
    for (var i=0; i<numToString.length-1; i++) {
        j++
        arrayString+=numToString[i]
        arrayString+=numToString[j]
        arrayString1=arrayString+='-'
    }
    var pairNum = arrayString.split('-');
    pairNum.pop()
    pairNum.sort(function(a,b){return b-a});
    return Number(pairNum[0]); 
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(64157300)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99