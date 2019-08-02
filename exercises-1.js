//input "hello world!"
//output
//"!dlrow olleh"
function balikString(word){
    var balik=''
    for (var  i= word.length-1; i >=0; i--){
        balik=balik+word[i]
    }
    return balik;
}
console.log(balikString('hello world!'));