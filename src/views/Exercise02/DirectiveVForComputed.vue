<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0)
        }
    }
}
</script>

<template>
    <div class="exercise">
        <li v-for="n in evenNumbers" v-bind:key="n">{{ n }}</li>
    </div>
</template>