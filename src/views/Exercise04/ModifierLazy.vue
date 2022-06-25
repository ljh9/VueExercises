<script>
export default {
    data() {
        return {
            msg: '',
            text: ''
        }
    }
}
</script>

<template>
    <div class="exercise">
        Default: <input v-model="text">
        {{ text }}
        <br/>
        Lazy: <input v-model.lazy="msg" />
        {{ msg }}
    </div>
</template>