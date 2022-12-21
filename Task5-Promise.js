async function getData() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  let dataJson = await fetchData.json();

  return new Promise((resolve, reject) => {
    if (dataJson != "") {
      resolve("Import success");
    } else {
      reject(new Error("Data not found"));
    }
    try {
      let result = dataJson.map((element) => element.name);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
}

getData();
