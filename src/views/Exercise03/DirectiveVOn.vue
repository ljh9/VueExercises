<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <div class="exercise">
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>
    </div>
</template>