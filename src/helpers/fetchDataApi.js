const url = "https://api.publicapis.org/entries";

const cabeceras = {
  origin: '*'
};

const fetchDataApi = async () => {
  const fetchData = await fetch(url, cabeceras);
  const data = await fetchData.json();

  console.log(data);
}

export default fetchDataApi;