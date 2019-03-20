function tukarBesarKecil(kalimat) {
    var out =''
    var spasi = ' '
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz'

    for(var i=0; i<kalimat.length; i++){
        for( var j=0; j<besar.length; j++){
            if (kalimat[i] == besar[j]){
                out += kecil[j]
            } else if(kalimat[i] == kecil[j]){
                out += besar[j]
            } 
        }
        if (kalimat[i] == spasi){
            out += spasi
        } else if (kalimat[i] == '0'){
            out += '0'
        } else if (kalimat[i] == '1'){
            out += '1'
        } else if (kalimat[i] == '2'){
            out += '2'
        } else if (kalimat[i] == '3'){
            out += '3'
        } else if (kalimat[i] == '4'){
            out += '4'
        } else if (kalimat[i] == '5'){
            out += '5'
        } else if (kalimat[i] == '6'){
            out += '6'
        } else if (kalimat[i] == '7'){
            out += '7'
        } else if (kalimat[i] == '8'){
            out += '8'
        } else if (kalimat[i] == '9'){
            out += '9'
        } else if (kalimat[i] == '-'){
            out += '-'
        } else if (kalimat[i] == '!'){
            out += '!'
        }     
    }
    return out
}
    
    


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"