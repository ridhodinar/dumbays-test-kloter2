function cariKata(kata){
  const arr = ["Pagi itu sangatlah cerah, mentari pagi muncul memancarkan sinar cerah dengan semangat 67 eh semangat 45 maksudnya","Sama denganku, hari ini adalah hari ulang tahun orang yang sangat aku kagumi bahkan kucintai","Semua sudah aku persiapkan termasuk kue ultah serta kadonya","Aku masuk ke kelas dengan hati gembira dan bibir tersenyum-senyum sendiri","Kakiku melangkah tepat di depan pintu masuk kelas dan disambut ceria oleh sahabat sahabatku Syarif dan Renata","Yaps! Aku hampir lupa, aku Sherly kepanjangan dari Sherlyna rantika putri","Cewek manis berkumis tipis yang kini sedang dilanda asmara cinta."]

  var hasil = []

  arr.forEach((v1, k1) => {
    const split = v1.split(' ')
    var jumlahKata = 0
    split.forEach((v2, k2) => {
      if(v2.toLowerCase() === kata){
        jumlahKata += 1
      }
    })
    if(jumlahKata != 0){
      hasil.push({index: k1, jumlah: jumlahKata})
    }
  })

  hasil.forEach((v,k) => {
    console.log(`Result ${k+1}: kalimat "${kata}" muncul ${v.jumlah} kali pada index ${v.index}`)
  })
}

//cariKata("hari")
//cariKata("sudah")
cariKata("aku")