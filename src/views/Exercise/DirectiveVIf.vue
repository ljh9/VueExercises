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
        <h1 v-if="awesome">awesome</h1>
    </div>
</template>