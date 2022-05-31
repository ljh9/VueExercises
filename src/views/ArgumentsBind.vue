<script>
export default {
    data() {
        return {
            url: 'https://www.naver.com'
        }
    }
}
</script>

<template>
  <div class="exercise">
    <a v-bind:href="url">https://www.naver.com</a>
    <br/>
    <!-- shorthand -->
    <a :href="url">https://www.naver.com</a>
  </div>
</template>