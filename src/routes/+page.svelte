<script lang="ts">
	import { page } from "$app/state";

  const response = $state(page.data.data);
  
</script>
<div class="flex flex-col">
  <h3>Data from API:</h3>
  {#each response as item}
    <div>id: {item.id} name: {item.name}</div>
  {/each}
</div>