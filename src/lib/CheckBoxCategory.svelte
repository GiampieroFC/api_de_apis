<script>
  import { createEventDispatcher } from 'svelte';
  export let categories = [];
  export let results;

  const dispatch = createEventDispatcher();

  let array = [];
  
$: (() => {
    dispatch('array', array);
  })()

$: results.length > 0 ? console.log(results.length) : console.log(results.length)

</script>

<main class="categorias">

 <form>

<div class="box m-2 p-2">
  {#await results}
  <p>Results:</p> <div class="field">
  <div class="control is-small is-loading">
    <input class="input is-small" type="text" placeholder="Small loading input">
  </div>
</div> 
  {:then results} 
  <p>Results: {results.length}</p>
  {/await}
  
  <p>Selected categories: {array.length}</p>
</div>

<h2 class="has-text-white is-family-sans-serif is-size-2 ml-4 is-underlined">Categories:</h2>
  
{#await categories}
  
  <progress class="progress is-small is-info" max="100">15%</progress>
    
    {:then categories}

      

      {#each categories as category}
         <!-- content here -->
         
         <label class="checkbox m-2 p-2 has-text-white" for={category}>
           <input type="checkbox" bind:group={array} name="array" id={category} value={category}>
         {category}
         </label>
      {/each}
      
    
    {:catch error}
  
      Ha habido un problema, creo que {error} recarga la página o escribe sobre tu problema en el formulario de abajo. 👇🏽
    
    {/await}

    
  </form>
  <div class="buttons has-addons is-centered">
<button class="button is-info is-outlined is-rounded" on:click={() => array = []}>
  Clean
</button>
</div>

</main>

<style>

  .categorias {
    border-radius: 1rem;
    box-sizing: border-box;
  }

  /* main {
    box-shadow: 10px 5px 5px black;
  } */

</style>