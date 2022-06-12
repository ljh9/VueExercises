<script>
export default {
  data() {
    return {
        items: [{ message: '11111111111' }, { message: '22222222222222' }]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <li v-for="item in items" v-bind:key="item">
            {{ item.message }}
        </li>
    </div>
</template>