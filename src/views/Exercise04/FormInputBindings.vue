<script>
export default {
    data() {
        return {
            text: 'text'
        }
    }
}
</script>

<template>
    <div class="exercise">
        <input
            :value="text"
            @input="event => text = event.target.value">
        <br />
        {{ text }}
        <br />
        <input v-model="text">
    </div>
</template>