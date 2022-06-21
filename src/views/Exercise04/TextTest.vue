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
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
    </div>
</template>