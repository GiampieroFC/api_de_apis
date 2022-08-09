<script>
  import { createEventDispatcher } from 'svelte';
  export let categories = [];

  const dispatch = createEventDispatcher();

  let array = [];
  
$: (() => {
    dispatch('array', array);
  })()


</script>

<main>

 <form>

  {#await categories}
  
  <progress class="progress is-small is-info" max="100">15%</progress>
    
    {:then categories}

      {#each categories as category}
         <!-- content here -->
         
         <label class="checkbox m-2 has-text-white" for={category}>
           <input type="checkbox" bind:group={array} name="array" id={category} value={category}>
         {category}
         </label>
      {/each}
      
    
    {:catch error}
  
      Ha habido un problema, creo que {error} recarga la página o escribe sobre tu problema en el formulario de abajo. 👇🏽
    
    {/await}

    
  </form>
  <div class="buttons has-addons is-centered">
<button class="button is-responsive is-outlined is-rounded" on:click={() => array = []}>
  Limpiar
</button>
</div>

</main>

<style>

  main {
    box-shadow: 10px 5px 5px black;
  }

</style>