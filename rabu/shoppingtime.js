function shoppingTime(memberId, money) {
    var barang = []
    var obj = {}
    if(memberId == '' || memberId == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else {
        obj.memberId = memberId
    }
    if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    } else {
        obj.money = money
    }
    if (money > 1500000){
        money = money - 1500000
        barang.push('Sepatu brand Stacattu')
    }
    if (money > 500000){
        money = money - 500000
        barang.push('Baju brand Zoro')
    }
    if (money > 250000){
        money = money - 250000
        barang.push('Baju brand H&N')
    }
    if (money > 175000){
        money = money - 175000
        barang.push('Sweater brand Uniklooh')
    }
    if (money > 50000){
        money = money - 50000
        barang.push('Casing Handphone')
    }
    
    obj.listPurchased = barang
    obj.ChangeMoney = money
    // if(money)
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