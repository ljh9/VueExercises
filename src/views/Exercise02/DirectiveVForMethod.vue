<script>
export default {
    data() {
        return {
            sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
        }
    },
    methods: {
        even(numbers) {
            return numbers.filter(number => number % 2 === 0)
        }
    }
}
</script>

<template>
    <div class="exercise">
        <ul v-for="numbers in sets" v-bind:key="numbers">
            <li v-for="n in even(numbers)" v-bind:key="n">{{ n }}</li>
        </ul>
    </div>
</template>