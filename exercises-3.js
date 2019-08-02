//contoh input
/*
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca
 */
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
    ["0005", "Arif", "Tasikmalaya", "5/9/1993", "Tidur"]
]

var label = ['Nomor ID: ','Nama Lengkap: ','TTL: ',' ','Hobi: '];

function dataHandling(input,label) {
    var biodata = '';
    for (i=0; i<input.length; i++) {
        for (j=0; j<=input[0].length-1; j++) {
            if(j==2) {
                biodata+=label[j];
                biodata+=input[i][j];
                biodata+=' ';
            }else if(j==3) {
                biodata+=input[i][j];
                biodata+='\n';
            }else {
            biodata+=label[j];
            biodata+=input[i][j];
            biodata+='\n';
            }
        }biodata+='\n'


    }
    return biodata;
}

console.log(dataHandling(input,label));