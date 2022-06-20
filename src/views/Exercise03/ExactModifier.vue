<script>
export default {
    methods: {
        onClick() {
            alert(event.target.tagName);
        }
    }
}
</script>

<template>
    <div class="exercise">
        <!-- this will fire even if Alt or Shift is also pressed -->
        <button @click.ctrl="onClick">A</button>

        <!-- this will only fire when Ctrl and no other keys are pressed -->
        <button @click.ctrl.exact="onClick">A</button>

        <!-- this will only fire when no system modifiers are pressed -->
        <button @click.exact="onClick">A</button>
    </div>
</template>