<script>
export default {
    data() {
        return {
            objectOfAttrs: {
                id: 'ttContainer',
                class: 'ttWrapper'
            }
        }
    }
}
</script>

<template>
  <div class="exercise">
    <div v-bind="objectOfAttrs"></div>
  </div>
</template>