<script>
export default {
    data() {
        return {
            styleObject: {
                color: 'red',
                fontSize: '13px'
            }
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :style="styleObject">test</div>test
    </div>
</template>