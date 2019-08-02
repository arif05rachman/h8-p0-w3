var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(){
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    input.splice(4, 0, 'Pria');
    input.splice(5, 1, 'SMA Internasional Metro');
    console.log(input);
    var tanggal=input[3].split('/');
    switch(Number(tanggal[1])){
        case 1:
            bulan='Januari';
            break;
        case 2:
            bulan='Februari';
            break;
        case 3:
            bulan='Maret';
            break;
        case 4:
            bulan='April';
            break;
        case 5:
            bulan='Mei';
            break;
        case 6:
            bulan='Juni';
            break;
        case 7:
            bulan='Juli';
            break;
        case 8:
            bulan=' Agustus ';
            break;
        case 9:
            bulan=' September ';
            break;
        case 10:
            bulan=' Oktober ';
            break;
        case 11:
            bulan=' November ';
            break;
        default:
            bulan=' Desember '
    }    
    console.log(bulan)
    var date = [Number(tanggal[0]),Number(tanggal[1]),Number(tanggal[2])];
    var dateSort = date.sort(function (value1,value2) {
        return value1<value2
    });
    console.log(dateSort)
    console.log(tanggal.join('-'));
    var name = input[1].split('');
    var nameSlice = name.slice(0,15);
    var nameJoin = nameSlice.join('');
    console.log(nameJoin);
    return input;
}
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */