import fetch from "node-fetch";

try {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  let dataJson = await fetchData.json();

  if (dataJson != []) {
    let result = dataJson.map((element) => element.name);
    console.log(result);
  }
} catch (error) {
  console.log(new Error("Data tidak ditemukan"));
}
