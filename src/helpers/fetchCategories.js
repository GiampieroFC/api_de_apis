const url = "https://api.publicapis.org/categories";

const cabeceras = {
  origin: '*'
};

const fetchCategories = async () => {
  const fetchData = await fetch(url, cabeceras);
  const data = await fetchData.json();
  const categories = await data.categories

  return categories
}

export default fetchCategories;