<script>
export default {
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<template>
    <div class="exercise">
        <input v-model.trim="msg" />
        {{ msg }}
    </div>
</template>