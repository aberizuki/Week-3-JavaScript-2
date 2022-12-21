const getMonth = (callback, isError) => {
  setTimeout(() => {
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!isError) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 1000);
};

function showMonth(errorMessage, dataArray) {
  if (dataArray != "") {
    dataArray.map((e) => console.log(e));
  } else {
    console.log(errorMessage);
  }
}

getMonth(showMonth, true);
