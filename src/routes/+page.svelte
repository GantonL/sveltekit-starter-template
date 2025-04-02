<script lang="ts">
	import { page } from "$app/state";
  
  const response = $state(page.data);
  let results = $state(response.results);

</script>
<div class="flex flex-col items-center w-full p-8">
  <div  class="flex flex-col w-full overflow-hidden h-full">
    <h1>Results:</h1>
    <div class="overflow-auto grow">
      {#each results as result}
        <div>id: {result.id}, name: {result.name}</div>
      {/each}
    </div>
  </div>
</div>