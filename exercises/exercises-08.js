function pasanganTerbesar(num) {
    let arrDigit = [];
    let numStr = String(num);
    for(let i=0; i<numStr.length-1; i++) {
        let digit = '';
        digit += numStr[i]+numStr[i+1]
        arrDigit.push(digit)
    }
    for(let i=0; i<arrDigit.length; i++) {
        for (let j=0; j<arrDigit.length-i-1; j++) {
            if (arrDigit[j] < arrDigit[j+1]) {
                let high = arrDigit[j+1];
                arrDigit[j+1] = arrDigit[j];
                arrDigit[j] = high;
            }
        }
    }
    return arrDigit[0]
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99