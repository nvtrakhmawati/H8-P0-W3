function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var angka1=0, angka2=0, bayar=0
    var output = []
    for (var i=0; i<arrPenumpang.length; i++){
        for(var j=0; j<rute.length; j++){
            if (arrPenumpang[i][1] == rute[j]){
                angka1 = j
            }
            if (arrPenumpang[i][2] == rute[j]){
                angka2 =j
            }
        }
        bayar = Math.abs((angka2 - angka1)) * 2000
        output.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang [i][1],
            tujuan: arrPenumpang[i][2],
            bayar: bayar
        })
    }
    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
//   console.log(naikAngkot([])); //[]
