<script>
  import fetchCategories from "./helpers/fetchCategories";
  import Tarjeta from "./lib/tarjeta.svelte";
  import CheckBoxCategory from "./lib/CheckBoxCategory.svelte";
import fetchDataApi from "./helpers/fetchDataApi";
// import fetchRandom from "./helpers/fetchRandom";
// fetchRandom();

let apis = fetchDataApi();
let categories = fetchCategories();

let selecteds = []

let toCat = []

const sendToCat = async (e) => {
  if (e.detail.length === 0) {
    let api = await apis
    toCat = api
  } else {
    toCat = await e.detail
  }
}

$: toCat
$: async () => {await apis; console.log(apis);}

 const array = async (event) => {
    
   selecteds = await event.detail

  // categories = await categories.filter( async (el) => await el.Category === selecteds[0])
  

	}

</script>

<main>
  <div class="cabecera columns has-background-black">
  <div class="column">
    <h1 class="has-text-white is-size-1">Public API for Public APIs</h1>  
  </div>
  <div class="column is-narrow">
    <div class="block">

      <a class="button is-link is-outlined is-primary" href="http://api.publicapis.org/" target="_blank" rel="noopener noreferrer">Base URL</a>

    </div>
    <div class="block">

      <a class="button is-link is-outlined is-primary" href="http://github.com/davemachado/public-api" target="_blank" rel="noopener noreferrer">Github Project</a>
    </div>
  </div>

</div>

<div class="columns ">

  <div class="categorias column is-3 mt-3">

      <CheckBoxCategory results={toCat} {categories} on:array={array} />

  </div>
  <div class="column">
    <Tarjeta on:key={sendToCat} selecteds={selecteds} />
  </div>
</div>

</main>

<style>

main {
  margin: auto;
  background-color: #222;
  box-sizing: content-box;
}

.categorias {
  border-bottom: 1px solid white ;
  border-right: 1px solid white ;
  border-left: 1px solid white ;
  
}

.cabecera {
  margin: auto;
  border: 1px solid white;
  border-radius: 1rem;
}



</style>