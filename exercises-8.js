function pasanganTerbesar(num) {
    // you can only write your code here!
    var numToString = num.toString();
    var arrayString = '';
    var j=0;
    for (var i=0; i<numToString.length-1; i++) {
        j++
        arrayString+=numToString[i]
        arrayString+=numToString[j]
        arrayString1=arrayString+='-' //penambahan karakter '-' ke setiap pasangan angka. misal 64-41-15-57-73-30-00-
    }
    var pairNum = arrayString.split('-'); //merubah string menjadi array dengan karakter '-' sebagai pembatas antar value ['64',41','15','57','73','30','00','']
    pairNum.pop() //menghapus indeks terakhir dari array ['64',41','15','57','73','30','00']
    pairNum.sort(function(a,b){return b-a}); //mengurutkan secara descending ['73',64','57','41','30','15','00']
    return Number(pairNum[0]); //mengembalikan isi dari array dengan indexs ke 0 setelah di urutkan yaitu 73
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(64157300)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99