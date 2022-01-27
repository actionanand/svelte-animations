<script>
  import progress from './app-store';
  import Spring from './Spring.svelte';

  export let appName;
</script>

<div class="title-warap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<!-- <progress value="{$progress}"></progress> -->
<Spring/>

<style>
  .title-warap {
    display: flex;
    justify-content: center;
  }

  .capitalize-it {
    text-transform: capitalize;
  }
</style>



