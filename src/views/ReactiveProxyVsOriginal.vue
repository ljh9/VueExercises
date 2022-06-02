<script>
export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject
    console.log(newObject === this.someObject) // false
  }
}
</script>

<template>
    <div class="exercise">
        Check the console
    </div>
</template>