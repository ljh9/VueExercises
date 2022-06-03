<script>
import { nextTick } from 'vue'
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
      console.log("before nextTick" + this.count)
      nextTick(() => {
        console.log("inside of nextTick" + this.count)
      })
      console.log("after nextTick" + this.count)
    }
  },
  mounted() {
    this.increment()
  }
}
</script>

<template>
    <div class="exercise">
        <button @click="increment">{{ count }}</button>
    </div>
</template>