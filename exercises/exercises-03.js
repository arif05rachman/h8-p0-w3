var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataArray(array){
    for(let i=0; i<array.length; i++) {
        let data = ''
        for(let j=0; j<array.length; j++) {
            data = 
            `Nomor ID:  ${array[i][j++]}\nNama Lengkap:  ${array[i][j++]}\nTTL:  ${array[i][j++]} ${array[i][j++]}\nHobi:  ${array[i][j]}\n`
        }
        console.log(data)
    }
}
dataArray(input);

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca