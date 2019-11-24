var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
function dataHandling2(array){
    array.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
    array.splice(4,2, 'Pria', 'SMA Internasional Metro')
    console.log(array);
    let tanggal = array[3].split('/')
    let bulan = tanggal[1];
    switch (bulan) {
        case '01':
            bulan='Januari';
            break;
        case '02':
            bulan='Februari';
            break;
        case '03':
            bulan='Maret';
            break;
        case '04':
            bulan='April';
            break;
        case '05':
            bulan='Mei';
            break;
        case '06':
            bulan='Juni';
            break;
        case '07':
            bulan='Juli';
            break;
        case '08':
            bulan=' Agustus ';
            break;
        case '09':
            bulan=' September ';
            break;
        case '10':
            bulan=' Oktober ';
            break;
        case '11':
            bulan=' November ';
            break;
        default:
            bulan=' Desember '
            break;
    }
    console.log(bulan);
    var date = [tanggal[0],tanggal[1],tanggal[2]];
    var dateSort = date.sort((a,b) => b-a);
    console.log(dateSort);
    console.log(tanggal.join('-'));
    console.log(array[1].slice(0,14));
    
}
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */