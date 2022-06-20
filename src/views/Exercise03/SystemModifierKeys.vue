<script>
export default {
    methods: {
        clear() {
            document.getElementById("inputClear").value = "";
        },
        doSomething() {
            alert(event.target.tagName);
        }
    }
}
</script>

<template>
    <div class="exercise">
        <!-- Alt + Enter -->
        <input @keyup.alt.enter="clear" id="inputClear" />

        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>
    </div>
</template>