function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var cek = true //set cek true terlebih dahulu
    for (var i=0; i<arr.length-1; i++) {
        if(arr[1]/arr[0]!==arr[i+1]/arr[i]){ 
            cek = false //ketika salahsatu selilih antar angka berbdea rubah cek menjadi false
        }
    }
    return cek
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
  console.log(tentukanDeretGeometri([1, 3, 4, 12])); // false
