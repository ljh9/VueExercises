<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
    <div class="exercise">
        <!-- equivalent of passing :disabled="true" -->
        <MyComponent disabled />


        <!-- equivalent of passing :disabled="false" -->
        <MyComponent />
    </div>
</template>