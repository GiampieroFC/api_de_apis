<script>
import { onMount } from "svelte";

  import fetchDataApi from "../helpers/fetchDataApi";
export let selecteds;



let apis = [];
let apis2 = [];

const comparar = async () => {

  apis2 = []
  
  apis = await fetchDataApi();
  
  selecteds.map((s) => {apis.map((a) => {if (a.Category === s) { apis2.push(a)} } )})
  
  return apis2 = apis2
}

onMount(comparar)

$: selecteds ? comparar() : console.log('algo paso');
$: console.log('true', apis2);
$: console.log('apis', apis);


</script>

<main>
  <div class="columns is-multiline is-centered">
    
    {#if apis2.length > 0}
    {#await apis2}
    esperando respuesta...
    {:then}
      <!-- promise was fulfilled -->
      {#each apis2 as selected}
         <!-- content here -->
           <div class="column is-narrow-mobile">
             <div class="box has-text-centered">
               <p>{selected.API}</p>
               <p>{selected.Description}</p>
               <p>{selected.Auth}</p>
               <p>{selected.HTTPS}</p>
               <p>{selected.Cors}</p>
               <p>{selected.Link}</p>
               <p>{selected.Category}</p>
             </div>
           </div>
           {/each}
           
           {/await}
       <!-- content here -->
    {:else}
    {#each apis as selected}
         <!-- content here -->
           <div class="column is-narrow-mobile">
             <div class="box has-text-centered">
               <p>{selected.API}</p>
               <p>{selected.Description}</p>
               <p>{selected.Auth}</p>
               <p>{selected.HTTPS}</p>
               <p>{selected.Cors}</p>
               <p>{selected.Link}</p>
               <p>{selected.Category}</p>
             </div>
           </div>
           {/each}
       <!-- else content here -->
    {/if}

         
  </div>

</main>

<style>

</style>