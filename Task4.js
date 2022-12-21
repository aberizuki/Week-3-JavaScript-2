//Contoh 1

const cekLaguNogi = (song) => {
  return new Promise((resolve, reject) => {
    const dataLagu = ["senpuuki", "fukayomi", "korekara", "i see", "arigachi"];
    let cek = dataLagu.find((item) => {
      return item === song;
    });
    if (cek) {
      resolve(cek + " adalah lagu Nogizaka46");
    } else {
      reject(new Error("Bukan lagu Nogizaka46"));
    }
  });
};

async function processLagu() {
  try {
    const cek = await cekLaguNogi("senpuuki");
    console.log(cek);
  } catch (error) {
    console.log(error);
  }
}

processLagu();

//Contoh 2

function tryJanji(ditepati) {
  return new Promise((resolve, reject) => {
    if (ditepati) {
      resolve("Janji telah ditepati");
    } else {
      reject("Janji diingkari");
    }
  });
}

tryJanji(true)
  .then((response) => console.log("OK! " + response))
  .catch((response) => console.log("NOT OK! " + response));

//Contoh 3

function cekNama(nama) {
  return new Promise((resolve, reject) => {
    if (nama != "") {
      resolve("Halo " + nama + ", nama berhasil di input");
    } else {
      reject(new Error("Nama belum diisi!"));
    }
  });
}

async function processNama() {
  try {
    const cek = await cekNama("Asuka");
    console.log(cek);
  } catch (error) {
    console.log(error);
  }
}

processNama();
