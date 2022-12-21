const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("sabtu")
  .then((e) => console.log(e))
  .catch((error) => console.log(error));

async function processCek() {
  //deklarasi async function
  try {
    //
    let result = await cekHariKerja("senin"); //menunggu hasil input dan menjalankan function cekHariKerja
    console.log(result);
  } catch (error) {
    //jika ada error, catch akan menangkap error tersebut dan tetap menjalankan kode nya berdasarkan percabangan diatas
    console.log(error);
  }
}
processCek();
