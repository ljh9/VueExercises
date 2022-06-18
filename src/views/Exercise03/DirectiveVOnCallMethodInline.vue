<script>
export default {
    methods: {
        say(message) {
            alert(message)
        }
    }
}
</script>

<template>
    <div class="exercise">
        <button @click="say('hello')">Say hello</button>
        <button @click="say('bye')">Say bye</button>
    </div>
</template>