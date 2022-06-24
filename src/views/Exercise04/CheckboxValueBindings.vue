<script>
export default {
  data() {
    return {
      toggle: ""
    }
  }
}
</script>

<template>
    <div class="exercise">
        <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no" />

        <div>Value: {{ toggle }}</div>
    </div>
</template>