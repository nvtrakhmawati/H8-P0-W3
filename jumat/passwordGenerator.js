function changeVocals (str) {
    var vokal= 'AaIiUuEeOo'
    var setelah = 'BbJjVvFfPp'
    var after =''

    for(var i=0; i<str.length; i++){
        var found = false
        for(var j=0; j<vokal.length; j++){
            if(str[i] == vokal[j]){
                after += setelah[j]
                found = true
            } 
        }
        if (found == false){
            after += str[i]
        }
    }
    return after
}
  
function reverseWord (str) {
    var c ='';
    for (var i = str.length-1; i>=0; i--){
        c = c + str[i];
    }
    return c
}
  
  function setLowerUpperCase (str) {
    var out = ''
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz'

    for(var i=0; i<str.length; i++){
        var found = false
        for( var j=0; j<besar.length; j++){
            if (str[i] == besar[j]){
                out += kecil[j]
                found = true;
            } else if(str[i] == kecil[j]){
                out += besar[j]
                found = true;
            } 
        }
        if (found == false){
            out  +=str[i]
        }
    }

    return out
  }
  
  function removeSpaces (str) {
      var hasil=''
      for(var i=0; i<str.length; i++){
          if(str[i] == " "){
            hasil += ''
          }else{
            hasil += str[i]
          }
      }
    return hasil
  }
  
function passwordGenerator (name) {
   var vokal = changeVocals(name)
   var balik = reverseWord (vokal)
   var tukar = setLowerUpperCase(balik)
   var remove = removeSpaces(tukar)

   return remove
}


  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'