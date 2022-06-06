<script>
export default {
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :class="[activeClass, errorClass]"></div>
    </div>
</template>