<script>
export default {
    data() {
        return {
            message: ''
        }
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