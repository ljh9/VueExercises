<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    console.log(this.count) // => 1
    this.count = 2
  }
}
</script>

<template>
    <div class="exercise">
        Count is: {{ count }}
    </div>
</template>