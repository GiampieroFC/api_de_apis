<script>
  import fetchCategories from "./helpers/fetchCategories";
  import Tarjeta from "./lib/Tarjeta.svelte";
  import CheckBoxCategory from "./lib/CheckBoxCategory.svelte";
// import fetchDataApi from "./helpers/fetchDataApi";
// import fetchRandom from "./helpers/fetchRandom";
// fetchRandom();

// let apis = fetchDataApi();
let categories = fetchCategories();

let selecteds = []


 const array = async (event) => {
    
   selecteds = await event.detail

  // categories = await categories.filter( async (el) => await el.Category === selecteds[0])
  

	}

</script>

<main class="container is-fluid">

  <div class="columns has-background-grey-darker is-mobile is-vcentered">
  <div class="column">
    <h1>Public API for Public APIs</h1> 
  </div>
  <div class="column is-one-quarter is-mobile">
    <div class="columns">
      <a href="http://api.publicapis.org/" target="_blank" rel="noopener noreferrer">Base URL</a>
    </div>
    <div class="columns">
      <a href="http://github.com/davemachado/public-api" target="_blank" rel="noopener noreferrer">Github Project</a>
    </div>
  </div>

</div>
<div class="columns">
  <div class="column has-background-grey is-one-quarter">
    <CheckBoxCategory {categories} on:array={array} />
  </div>
  <div class="column">
    <Tarjeta selecteds={selecteds} />
  </div>
</div>
</main>

<style>

/* :global(*) {
  border: 1px solid black;
} */

</style>