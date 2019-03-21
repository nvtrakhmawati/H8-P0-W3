function ubahHuruf(kata) {
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var after = ''

    for (var i=0; i<kata.length; i++){
        for ( var j=0; j<alfabet.length; j++){
            if (kata[i] == alfabet[j] && kata[i] !== 'z'){
                after += alfabet[j+1]
            } 
            if (kata[i] == alfabet[j] && kata[i] == 'z'){
                after += alfabet[0]
            }
        } 
    }
    return after
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
