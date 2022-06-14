<script>
export default {
    data() {
        return {
            myObject: {
            aa: 'Vue1',
            bb: 'Vue2',
            cc: 'Vue3'
            }
        }
    }
}
</script>

<template>
    <div class="exercise">
        <ul>
            <li v-for="value in myObject" v-bind:key="value">
                {{ value }}
            </li>
        </ul>
    </div>
</template>