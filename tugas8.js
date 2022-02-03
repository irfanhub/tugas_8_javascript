
function spesikasiAndroid (){
  const realme = {
    ram: "3 GB",
    network: "4G",
    internal: "64 GB",
    harga: 2500000,
    // array dalam object
    tipe: ["realme 5", "realme 5i", "realme 5s"]
  }



  console.log("spesikasi untuk hp realme sebagai berikut: TIDAK BERUBAH")
  console.log(realme.ram)
  console.log(realme.network)
  console.log(realme.internal)
  console.log("dengan harga Rp.",realme.harga)
  console.log("berikut tipe pilihan anda")
  console.log(realme.tipe[2])
    console.log("")

// perubahan sebagai berikut
console.log("########################################")
realme.diskon = 2000000;
realme.internal = "32 GB"
realme.tipe[0] = "realme 5c"
realme.tipe[2] = "realme 5u"

  console.log("spesikasi untuk hp realme sebagai berikut: PERUBAHAN")
  console.log(realme.ram)
  console.log(realme.network)
  console.log(realme.internal)
  console.log("Harga normal Rp.",realme.harga)
  console.log("berikut tipe pilihan anda")
  console.log(realme.tipe[2])
  console.log("Hanya hari ini Rp.", realme.diskon)
}

spesikasiAndroid()
