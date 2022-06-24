<script>
export default {
  data() {
    return {
      pick: "",
      first: "1st",
      second: "2nd"
    }
  }
}
</script>

<template>
    <div class="exercise">
        <input type="radio" v-model="pick" :value="first" />
        <input type="radio" v-model="pick" :value="second" />

        <div>Value: {{ pick }}</div>
    </div>
</template>