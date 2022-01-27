<script>
  import progress from './app-store';

  export let appName;
</script>

<div class="title-warap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<progress value="{$progress}"></progress>

<style>
  .title-warap {
    display: flex;
    justify-content: center;
  }

  .capitalize-it {
    text-transform: capitalize;
  }
</style>



