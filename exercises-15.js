function groupAnimals(animals) {
    animals.sort();
    var arrAnimal = [];

    var hurufAwal = animals[0][0];
    var arrayKelompok = []
    for (var i=0; i<animals.length; i++) {
        if(hurufAwal==animals[i][0]) {
            arrayKelompok.push(animals[i]);
        }else {
            arrAnimal.push(arrayKelompok);
            arrayKelompok = [];
            arrayKelompok.push(animals[i]);
            hurufAwal = animals[i][0]; 
        }
    }
    arrAnimal.push(arrayKelompok);
    return arrAnimal;
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]