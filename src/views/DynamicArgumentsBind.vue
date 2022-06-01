<script>
export default {
    data() {
        return {
            url: 'https://www.naver.com',
            attributeName: 'href'
        }
    }
}
</script>


<template>
  <div class="exercise">
    <a v-bind:[attributeName]="url">https://www.naver.com</a>
    <br/>
    <!-- shorthand -->
    <a :[attributeName]="url">https://www.naver.com</a>
  </div>
</template>