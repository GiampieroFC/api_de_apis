const url = "https://api.publicapis.org/random";

const cabeceras = {
  origin: '*'
};

const fetchRandom = async () => {
  const fetchData = await fetch(url, cabeceras);
  const data = await fetchData.json();

  console.log(data);
}

export default fetchRandom;