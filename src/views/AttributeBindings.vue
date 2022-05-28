<script>
export default {
    data() {
        return {
            dynamicId: 'testId'
        }
    }
}
</script>

<template>
  <div class="exercise3">
    <!-- <div v-bind:id="dynamicId"></div> -->
    <div :id="dynamicId"></div>
  </div>
</template>