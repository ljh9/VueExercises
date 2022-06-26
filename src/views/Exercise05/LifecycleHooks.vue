<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    created() {
        console.log(`the component is now created.`)
    },
    mounted() {
        console.log(`the component is now mounted.`)
    },
    updated() {
        console.log(`the component is now updated.`)
    }
}
</script>

<template>
    <div class="exercise">
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </div>
</template>