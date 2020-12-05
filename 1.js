function hitungJarak(a,b){
  
  function jarak2tempat(a,b){
    const jarak = [0, 2, 5, 1.5, 2.5]
    var j = 0
    var i = a + 1
    for(i; i <= b; i++){
      j += jarak[i]
    }
    return j
  }

  function penggunaanBensin(jarak){
    const bensin = jarak/2.5
    const biaya = 7000*bensin
    return { jarak, bensin, biaya }
  }

  if(a<b){
    return penggunaanBensin(jarak2tempat(a,b))
  } else {
    return penggunaanBensin(jarak2tempat(b,a))
  }
}

function perjalananSales(...args){
  const tempat = {
    "toko": 0,
    "tempat a": 1,
    "tempat b": 2,
    "tempat c": 3,
    "tempat d": 4
  }
  var hasil = null
  var totalJarak = 0
  var totalBensin = 0
  var totalBiaya = 0

  args.forEach((v,k) => {
    if(k == args.length - 1){
      hasil = hitungJarak(tempat[args[k].toLowerCase()],tempat[args[0].toLowerCase()])
      totalJarak += hasil.jarak
      totalBensin += hasil.bensin
      totalBiaya += hasil.biaya
      console.log(`${args[k]}-${args[0]} = ${hasil.jarak} KM | Rp ${hasil.biaya} | ${hasil.bensin} liter`)
    } else {
      hasil = hitungJarak(tempat[args[k].toLowerCase()],tempat[args[k+1].toLowerCase()])
      totalJarak += hasil.jarak
      totalBensin += hasil.bensin
      totalBiaya += hasil.biaya
      console.log(`${args[k]}-${args[k+1]} = ${hasil.jarak} KM | Rp ${hasil.biaya} | ${hasil.bensin} liter`)
    }
  })

  console.log(`Total Jarak  = ${totalJarak.toFixed(2)} KM`)
  console.log(`Total Harga  = Rp ${totalBiaya.toFixed(2)}`)
  console.log(`Total Bensin = ${totalBensin.toFixed(2)} Liter`)
}

//console.log('')
//perjalananSales("Toko","Tempat A", "Tempat D", "Tempat C","Tempat A","tempat b","TempaT C","Tempat A","Tempat D","Toko","tempat A")
console.log('')
perjalananSales("Toko","Tempat A", "Tempat D", "Tempat C")
console.log('')