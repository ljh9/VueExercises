<script>
export default {
    methods: {
        onPageDown() {
            alert(event.target.tagName);
        }
    }
}
</script>

<template>
    <div class="exercise">
        <input @keyup.page-down="onPageDown" />
    </div>
</template>