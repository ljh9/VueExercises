<script>
export default {
  data() {
    return {
      picked: ""
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
    </div>
</template>