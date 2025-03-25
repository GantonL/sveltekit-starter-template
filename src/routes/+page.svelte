<script lang="ts">
	import { page } from "$app/state";
  
  const response = $state(page.data);
  let count = $state(response.count);
  let next = $state(response.next);
  let prev = $state(response.prev);
  let results = $state(response.results);
  let searchTerm = '';

  function onSearch(event: Event) {
    searchTerm = event?.target?.value ?? '';
    getResults();
  }

  function onPrev() {
    getResults(prev ?? 1);
  }
  
  function onNext() {
    getResults(next ?? 1);
  }

  function getResults(page?: number) {
    console.log(page);
    fetch(`/?search=${searchTerm}&page=${page ?? ''}`)
    .then(res => res.json().then(res => {
      count = res.count;
      next = res.next;
      prev = res.prev;
      results = res.results;
    }));
  }

</script>
<div class="flex flex-col items-center w-full p-8">
  <div class="flex flex-col items-center min-w-2xl gap-4">
    <header class="flex flex-row items-center justify-between w-full">
      <h3 class="font-bold text-xl">Start Wars Explorer</h3>
      <input
        onchange={onSearch} 
        class="h-6 border rounded-md" 
        placeholder="search..."/>
    </header>
    <main class="flex flex-col gap-4 w-full">
      {#each results as item}
        <div class="flex flex-row items-center justify-between p-4 border rounded-md w-full">
          <span class="flex-">{item.name}</span>
          <div class="flex flex-row items-center gap-4">
            <span>{item.gender}</span>
            <span>{item.homeworld}</span>
          </div>
        </div>
      {/each}
    </main>
    <footer class="flex flex-row items-center justify-between w-full">
      <span>Total results: {count}</span>;
      <div class="flex flex-row items-center gap-4">
        <button
        class="border rounded-md p-2"
        class:cursor-pointer={!!prev}
        onclick={onPrev}
        disabled={!prev}
        >Prev</button>
        <button
        class="border rounded-md p-2"
        class:cursor-pointer={!!next}
        onclick={onNext}
        disabled={!next}
        >Next</button>
      </div>
    </footer>
  </div>
</div>