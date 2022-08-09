<script>
  import { createEventDispatcher } from 'svelte';
  export let categories = [];

  const dispatch = createEventDispatcher();

  let array = [];
  
$: (() => {
    dispatch('array', array);
  })()


</script>

<main class="categorias">

 <form>

  {#await categories}
  
  <progress class="progress is-small is-info" max="100">15%</progress>
    
    {:then categories}

      <h2 class="has-text-white is-family-sans-serif is-size-2 ml-4 is-underlined">Categories:</h2>

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
  Limpiar
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