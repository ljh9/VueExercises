<script>
import ButtonCounter from './ButtonCounter.vue'
export default {
  components: {
    ButtonCounter
  }
}
</script>

<template>
    <div class="exercise">
        <h1>Here are many child components</h1>
        <ButtonCounter />
        <ButtonCounter />
        <ButtonCounter />
    </div>
</template>