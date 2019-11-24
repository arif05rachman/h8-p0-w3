function tentukanDeretAritmatika(arr) {
    var arrBanding = []
    var banding = 0
    var hasil = true
    for(let i=0; i<arr.length-1; i++) {
        banding = arr[i+1]-arr[i]
        arrBanding.push(banding)
    }
    for(let i=0; i<arrBanding.length-1; i++) {
        // if (arrBanding[i] != arrBanding[i+1]){
        //     hasil = false
        // }
        (arrBanding[i] != arrBanding[i+1]) ? hasil = false : hasil
    }
    return hasil
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false