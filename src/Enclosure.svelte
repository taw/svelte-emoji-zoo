<script>
  export let animalEmoji;
  export let foodEmoji;

  let foodPositions = [[100, 200], [300, 150]];
  let animalPosition = [50, 50];

  function animalStyle() {
    let [x, y] = animalPosition;
    return `
      left: ${x}px;
      top: ${y}px;
    `;
  }

  function foodStyle([x, y]) {
    return `
      left: ${x}px;
      top: ${y}px;
    `;
  }

  function giveMoreFood(event) {
    let { clientX, clientY } = event;
    let rect = event.target.getBoundingClientRect();
    foodPositions.push([clientX - rect.x, clientY - rect.y]);
    foodPositions = foodPositions;
  }

  function cursorCSS() {
    return `cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${foodEmoji}</text></svg>") 16 0,auto;`;
  }
</script>

<style>
  .enclosure {
    background-color: #afc;
    margin: 1em;
    height: 40vh;
    width: 40vw;
    margin: auto;
    position: relative;
  }
  .animal {
    font-size: 36px;
    position: absolute;
    pointer-events: none;
  }
  .food {
    font-size: 36px;
    position: absolute;
    pointer-events: none;
  }
</style>

<div
  class="enclosure"
  on:click={giveMoreFood}
  style={cursorCSS()}
  >
  <span style={animalStyle()} class="animal">{animalEmoji}</span>
  {#each foodPositions as food}
    <span style={foodStyle(food)} class="food">{foodEmoji}</span>
  {/each}
</div>
