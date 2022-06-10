<script>
export default {
  data() {
    return {
        awesome: true,
    }
  }
}
</script>

<template>
    <div class="exercise">
        <button @click="awesome = !awesome">Toggle</button>

        <h1 v-if="awesome">awesome!</h1>
        <h1 v-else>no</h1>
    </div>
</template>