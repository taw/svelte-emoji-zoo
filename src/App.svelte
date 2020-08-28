<script>
  import Enclosure from "./Enclosure.svelte";
</script>

<style>
  .zoo {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100wh;
  }
</style>

<div class="zoo">
  <Enclosure animalEmoji="🐧" foodEmoji="🍭" />

  <Enclosure animalEmoji="🐼" foodEmoji="🍬" />

  <Enclosure animalEmoji="🐯" foodEmoji="🍧" />

  <Enclosure animalEmoji="🐄" foodEmoji="🍨" />
</div>
