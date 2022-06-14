<script>
export default {
  data() {
    return {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <li v-for="item of items" v-bind:key="item">
            {{ item.message }}
        </li>
    </div>
</template>