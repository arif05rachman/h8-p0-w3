function groupAnimals(animals) {
    let tmp = []
    let hasil = []
    for(let i=0; i<animals.length; i++) {
        for(let j=0; j<animals.length-i-1; j++) {
            if(animals[j] > animals[j+1]) {
                let less = animals[j + 1];
                animals[j + 1] = animals[j];
                animals[j] = less;
            }
        }
    }
    let hurufAwal = animals[0][0]
    for (var i=0; i<animals.length; i++) {
        if(hurufAwal==animals[i][0]) {
            tmp.push(animals[i]);
        }else {
            hasil.push(tmp);
            tmp = [];
            tmp.push(animals[i]);
            hurufAwal = animals[i][0]; 
        }
    }
    hasil.push(tmp)
    return hasil
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]