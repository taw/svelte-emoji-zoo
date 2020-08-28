<script>
  import { onMount } from "svelte";

  export let animalEmoji;
  export let foodEmojis;

  let mouseFoodEmoji = foodEmojis[0];
  let foodPositions = [];
  let animalX = 0;
  let animalY = 0;
  let domNode;
  let happy = false;

  $: animalStyle = `
    left: ${animalX}px;
    top: ${animalY}px;
  `;

  function foodStyle([x, y]) {
    return `
      left: ${x}px;
      top: ${y}px;
    `;
  }

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function giveMoreFood(event) {
    let { clientX, clientY } = event;
    let rect = event.target.getBoundingClientRect();
    let x = clientX - rect.x - 18;
    let y = clientY - rect.y - 8;

    foodPositions.push([
      clamp(x, 0, rect.width - 36),
      clamp(y, 0, rect.height - 36),
      mouseFoodEmoji
    ]);
    mouseFoodEmoji = randomElement(foodEmojis);
    foodPositions = foodPositions;
  }

  $: cursorCSS = `cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${mouseFoodEmoji}</text></svg>") 16 0,auto;`;

  function distanceTo([x, y]) {
    return Math.sqrt((x - animalX) ** 2 + (y - animalY) ** 2);
  }

  function findClosestFood() {
    return [...foodPositions].sort((a, b) => distanceTo(a) - distanceTo(b))[0];
  }

  function eatFood(foodX, foodY) {
    foodPositions = foodPositions.filter(([x, y]) => {
      return !(x === foodX && y === foodY);
    });
  }

  function moveAnimal() {
    if (!foodPositions.length) return;
    let [foodX, foodY] = findClosestFood();
    let dx = foodX - animalX;
    let dy = foodY - animalY;
    let d = Math.sqrt(dx ** 2 + dy ** 2);
    if (d > 1) {
      dx /= d;
      dy /= d;
    }
    if (d === 0) {
      eatFood(foodX, foodY);
      happy = true;
      setTimeout(() => (happy = false), 1000);
    }
    animalX += dx;
    animalY += dy;
  }

  function randomNumber(min, max) {
    return min + Math.random() * (max - min);
  }

  function randomPosition(rect, emojiSize) {
    return [
      randomNumber(0, rect.width - emojiSize),
      randomNumber(0, rect.height - emojiSize)
    ];
  }

  function randomFood() {
    return randomElement(foodEmojis);
  }

  function initalize() {
    let rect = domNode.getBoundingClientRect();
    [animalX, animalY] = randomPosition(rect, 36);
    foodPositions = [0, 0, 0].map(() => [
      ...randomPosition(rect, 24),
      randomFood()
    ]);
  }

  onMount(initalize);

  setInterval(moveAnimal, 1000 / 60);
</script>

<style>
  .enclosure {
    background-color: #afc;
    margin: 1em;
    height: 45vh;
    width: 45vw;
    margin: auto;
    position: relative;
  }
  .animal {
    font-size: 50px;
    position: absolute;
    pointer-events: none;
  }
  .animal::after {
    position: absolute;
    right: -6px;
    top: 0;
    content: "💖";
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .animal.happy::after {
    opacity: 1;
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
  style={cursorCSS}
  bind:this={domNode}>
  <span style={animalStyle} class:happy class="animal">{animalEmoji}</span>
  {#each foodPositions as food}
    <span style={foodStyle(food)} class="food">{food[2]}</span>
  {/each}
</div>
