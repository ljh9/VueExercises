<script>
export default {
    data() {
        return {
            isActive: true,
            error: null
        }
        },
        computed: {
            classObject() {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
    }
}
</script>

<template>
    <div class="exercise">
        <div :class="classObject"></div>
    </div>
</template>