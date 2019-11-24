function targetTerdekat(arr) {
    let posisiX = []
    let posisiO = []
    let jarak = []
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === 'x'){
            posisiX.push(i)
        }
        if (arr[i] === 'o'){
            posisiO.push(i)
        }
    }
    // for(let i=0; i<posisiX.length; i++) {
    //     for(let j=0; j<posisiO.length; j++) {
    //         if (jarak > posisiX[i] - posisiO[j]) {
    //             jarak = posisiX[i] - posisiO[j]
    //         }
    //     }
    // }
    if (posisiO.length == 0 || posisiX == 0){
        return 0
    } else {
        for(let i=0; i<posisiX.length; i++) {
            for(let j=0; j<posisiO.length; j++) {
                jarak.push(Math.abs(posisiX[i]-posisiO[j]))
            }
        }
    }
    for(let i=0; i<jarak.length; i++) {
        for(let j=0; j<jarak.length-i-1; j++) {
            if(jarak[j] > jarak[j+1]) {
                let less = jarak[j + 1];
                jarak[j + 1] = jarak[j];
                jarak[j] = less;
            }
        }
    }
    return jarak[0]
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
