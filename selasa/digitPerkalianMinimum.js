function digitPerkalianMinimum(angka) {
  var pembagi = []
  var perkalian = []
  
  for(var i=1; i<=angka; i++){
    if(angka%i==0){
        pembagi.push(i)
    } 
  }

  for(var i=0; i<pembagi.length/2; i++){
    for(var j=pembagi[pembagi.length-1]; j>=0; j--)
    if (pembagi[i] * pembagi[j] === angka){
      perkalian.push(pembagi[i].toString().length+pembagi[j].toString().length)
    }
  }

  for (var i=1; i<perkalian.length; i++){
    var key = perkalian[i]
    var j = i - 1
    while (j >= 0 && perkalian[j] > key) {
      perkalian[j+1] = perkalian[j]
      j--
    }
    perkalian[j+1] = key
  }
  return perkalian[0]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2