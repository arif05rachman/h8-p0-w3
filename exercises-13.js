function targetTerdekat(arr) {
    // you can only write your code here!
    var arrayO = [];
    var arrayX = [];
    var jarakArray = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]==='x') {
            arrayX.push(i);
        }else if(arr[i]==='o') {
            arrayO.push(i);
        }else {
            
        }
    }
    if (arrayX.length === 0 || arrayO.length === 0) {
        jarakArray.push(0) 
    } else {
        for(i=0; i<arrayX.length; i++) {
            jarakArray.push(Math.abs(arrayO[0]-arrayX[i]));
        }
    }
    jarakArray.sort()
    return jarakArray[0]
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2