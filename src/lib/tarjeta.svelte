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


      $: selecteds ? comparar() : console.error('🤔 Algo pasó, inténtalo de nuevo');
      // $: console.log('true', apis2);
      $: apis2 ? console.log("Lista modificada") : console.error('🤔 Algo pasó, inténtalo de nuevo');


      </script>

      <main class="mt-3">
      <div class="columns is-multiline is-centered">

      {#if apis2.length > 0}

      {#each apis2 as api}
      <!-- content here -->
      <div class="column is-narrow-desktop is-outlined">
      <div class="box has-text-centered content">
      <h2 class="is-size-3">
      <a href={api.Link} target="_blank" rel="noopener noreferrer">{api.API}</a>
      </h2>

      <blockquote class="mb-"><code>{api.Description}</code></blockquote>

      
      <div class="field is-grouped is-grouped-multiline is-justify-content-center">

      <div class="control">
      <div class="tags has-addons">
      <span class="{api.HTTPS ? 'tag is-success has-text-weight-bold' : 'tag is-light has-text-grey-light'}">HTTPS</span>
      </div>
      </div>

      <div class="control">
      <div class="tags has-addons">
      <span class="{api.Cors === 'yes' ? 'tag is-success has-text-weight-bold' : 'tag is-light has-text-grey-light'}">Cors</span>
      </div>
      </div>

      <div class="control">
      <div class="tags has-addons">
        {#if api.Auth === ''}
          <span class="tag is-light has-text-grey-light">Auth</span>
          {:else}
          <span class="tag is-success">Auth</span>
          <span class="tag is-primary has-text-weight-bold">{api.Auth}</span>
        {/if}
      </div>
      </div>

      </div>
      <div class="field is-grouped is-grouped-multiline is-justify-content-center">

        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-info">Category</span>
            <span class="tag is-link">{api.Category}</span>
          </div>
        </div>
      </div>

      </div>
      </div>
      {/each}

      {:else}

      {#if apis.length > 0}

      {#each apis as api}
      <!-- content here -->
      <div class="column is-narrow-desktop is-outlined">
      <div class="box has-text-centered content">
      <h2 class="is-size-3">
      <a href={api.Link} target="_blank" rel="noopener noreferrer">{api.API}</a>
      </h2>

      <blockquote class="mb-"><code>{api.Description}</code></blockquote>

      
      <div class="field is-grouped is-grouped-multiline is-justify-content-center">

      <div class="control">
      <div class="tags has-addons">
      <span class="{api.HTTPS ? 'tag is-success has-text-weight-bold' : 'tag is-light has-text-grey-light'}">HTTPS</span>
      </div>
      </div>

      <div class="control">
      <div class="tags has-addons">
      <span class="{api.Cors === 'yes' ? 'tag is-success has-text-weight-bold' : 'tag is-light has-text-grey-light'}">Cors</span>
      </div>
      </div>

      <div class="control">
      <div class="tags has-addons">
        {#if api.Auth === ''}
          <span class="tag is-light has-text-grey-light">Auth</span>
          {:else}
          <span class="tag is-success">Auth</span>
          <span class="tag is-primary has-text-weight-bold">{api.Auth}</span>
        {/if}
      </div>
      </div>

      </div>
      <div class="field is-grouped is-grouped-multiline is-justify-content-center">

        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-info">Category</span>
            <span class="tag is-link">{api.Category}</span>
          </div>
        </div>
      </div>

      </div>
      </div>
      {/each}

      {:else}
   <progress class="progress is-small is-info" max="100">Loading...</progress>
      

      {/if}


      {/if}


      </div>

      </main>

      <style>
        
      .box {
      border: 1px solid black;
      background-color: rgba(256, 256, 256, 0.2);
      box-shadow: 10px 5px 5px black;
      }

       main {
        box-sizing: content-box;
      }
      </style>