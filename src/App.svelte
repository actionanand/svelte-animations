<script>
  import { fade, fly, slide, scale } from 'svelte/transition';

  import progress from './app-store';
  import Spring from './Spring.svelte';
  import { cubicIn } from 'svelte/easing';

  export let appName;

  let boxInput;
  let boxes = [];
  let showPara = false;

  function addBox() {
    boxes = [...boxes, boxInput.value];
    boxInput.value = '';
  }

  function discard(box) {
    boxes = boxes.filter(el => el !== box)
  }
</script>

<div class="title-warap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<!-- <progress value="{$progress}"></progress> -->
<!-- <Spring/> -->

<button on:click="{() => showPara = !showPara}">Toggle</button>
{#if showPara}
  <p transition:fly="{{x: 300}}">Can you see me?</p>
{/if}

<hr>

<input type="text" bind:this="{boxInput}">
<button on:click="{addBox}">Add Box</button>
{#if showPara}
  {#each boxes as box (box)}
    <!-- <div class="box" transition:fade>{box}</div>   -->
    <!-- <div class="box" transition:scale>{box}</div> -->
    <!-- if loacal modifier added, animation will be only for individual items, not when added altogether -->
    <div class="box" transition:fly|local="{{easing: cubicIn, opacity: 0, x: 0, y: 300}}"
      on:click="{discard.bind(this, box)}"
      on:introstart="{() => console.log('Adding Animation begins')}"
      on:introend="{() => console.log('Adding animation ends')}"
      on:outrostart="{() => console.log('Removing Animation begins')}"
      on:outroend="{() => console.log('Removing animation ends')}">
      {box}
    </div>
  {/each}
{/if}

<style>
  .title-warap {
    display: flex;
    justify-content: center;
  }

  .capitalize-it {
    text-transform: capitalize;
  }

  .box {
    width: 10rem;
    height: 10rem;
    background: #ccc;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: 1rem;
  }
</style>



