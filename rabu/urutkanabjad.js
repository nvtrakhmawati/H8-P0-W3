function urutkanAbjad(str) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var after = []
    var angka
    var hasil = ''
    for (var i=0; i<str.length; i++){
        for ( var j=0; j<alfabet.length; j++){
            if (str[i] == alfabet[j]){
                after.push(j)
            }
        }
    }
    
    for (var i=1; i<after.length; i++){
      var key = after[i]
      var j = i - 1
      while (j >= 0 && after[j] > key) {
        after[j+1] = after[j]
        j--
      }
      after[j+1] = key
    }

    for (var i=0; i<after.length; i++){
      angka = after[i]
      hasil += alfabet[angka]
    }
  return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'