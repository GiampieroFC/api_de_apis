const url = "https://api.publicapis.org/categories";

const cabeceras = {
  origin: '*'
};

const fetchCategories = async () => {
  const fetchData = await fetch(url, cabeceras);
  const data = await fetchData.json();

  console.log(data);
}

export default fetchCategories;