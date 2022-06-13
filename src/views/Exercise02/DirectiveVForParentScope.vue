<script>
export default {
    data() {
        return {
            parentMessage: 'Parent',
            items: [{ message: 'aaaa' }, { message: 'bbbb' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <li v-for="(item, index) in items" v-bind:key="item"> 
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </div>
</template>