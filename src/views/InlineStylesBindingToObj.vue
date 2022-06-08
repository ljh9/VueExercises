<script>
export default {
    data() {
        return {
            activeColor: 'red',
            fontSize: 30
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">test</div>test
    </div>
</template>