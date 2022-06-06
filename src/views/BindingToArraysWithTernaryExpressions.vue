<script>
export default {
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-danger',
            isActive: true,
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :class="[isActive ? activeClass : '', errorClass]"></div>
    </div>
</template>