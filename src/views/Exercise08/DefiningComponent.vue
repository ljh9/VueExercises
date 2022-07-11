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
        <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>