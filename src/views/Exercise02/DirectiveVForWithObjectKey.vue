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
            <li v-for="(value, key) in myObject" v-bind:key="value">
                {{ key }}: {{ value }}
            </li>
        </ul>
    </div>
</template>