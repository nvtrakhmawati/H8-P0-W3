function shoppingTime(memberId, money) {
    var sisa = 0
    var barang = [
        {namabarang : 'Sepatu brand Stacattu',
        hargabarang : 1500000
        },
        {namabarang : 'Baju brand Zoro',
        hargabarang : 500000
        },
        {namabarang : 'Baju brand H&N',
        hargabarang : 250000
        },
        {namabarang : 'Sweater brand Uniklooh',
        hargabarang : 175000
        },
        {namabarang : 'Casing Handphone',
        hargabarang : 50000
        },
    ]

    var obj ={}
        obj.memberId =  memberId,
        obj.money = money,
        obj.listPurchased = []
    

    if(memberId == '' || memberId == undefined && money == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }

    for(var i=0; i<barang.length; i++){
        if (money >= barang[i].hargabarang){
            obj.listPurchased.push(barang[i].namabarang)
            money -= barang[i].hargabarang
        }
        
    }
    obj.changeMoney = money
    return obj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
