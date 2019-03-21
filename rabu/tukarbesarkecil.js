function tukarBesarKecil(kalimat) {
    var out = ''
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz'

    for(var i=0; i<kalimat.length; i++){
        var found = false
        for( var j=0; j<besar.length; j++){
            if (kalimat[i] == besar[j]){
                out += kecil[j]
                found = true;
            } else if(kalimat[i] == kecil[j]){
                out += besar[j]
                found = true;
            } 
        }
        if (found == false){
            out  +=kalimat[i]
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
