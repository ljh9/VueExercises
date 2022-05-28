<script>
export default {
    data() {
        return {
            rawHTML: '<span style="color: red">redred</span>'
        }
    }
}
</script>

<template>
  <div class="exercise2">
    <p>Using text interpolation: {{ rawHTML }}</p>
    <p>Using v-html directive: <span v-html="rawHTML"></span></p>
  </div>
</template>