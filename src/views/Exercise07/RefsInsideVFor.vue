<script>
export default {
  data() {
    return {
      list: [
        1, 2, 3, 4, 5, 6
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

<template>
    <div class="exercise">
      <ul>
        <li v-for="item in list" ref="items" v-bind:key="item">
          {{ item }}
        </li>
      </ul>
    </div>
</template>