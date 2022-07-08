<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
    <div class="exercise">
      <input ref="input" />
    </div>
</template>