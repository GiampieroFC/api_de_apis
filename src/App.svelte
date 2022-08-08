<script>
import fetchDataApi from "./helpers/fetchDataApi";
import fetchCategories from "./helpers/fetchCategories";
import fetchRandom from "./helpers/fetchRandom";

fetchDataApi();
fetchCategories();
fetchRandom();

</script>

<main class="container is-fluid">

  <div class="columns has-background-grey-darker is-mobile is-vcentered">
  <div class="column">
    <h1>Public API for Public APIs</h1> 
  </div>
  <div class="column is-one-quarter is-mobile">
    <div class="columns">
      <a href="http://github.com/davemachado/public-api" target="_blank" rel="noopener noreferrer">Github Project</a>
    </div>
    <div class="columns">
      <a href="http://api.publicapis.org/" target="_blank" rel="noopener noreferrer">Base URL</a>
    </div>
  </div>

</div>
<div class="columns">
  <div class="column has-background-grey is-one-quarter">
    First column
  </div>
  <div class="column">
    Second column
  </div>
</div>
</main>

<style>

* {
  border: 1px solid black;
}

</style>