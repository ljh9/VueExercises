<script>
export default {
    data() {
        return {
            baseStyles: {
                color: 'red',
                fontSize: '13px'
            },
            overridingStyles: {
                fontWeight: 'bold'
            }
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :style="[baseStyles, overridingStyles]">test</div>test
    </div>
</template>