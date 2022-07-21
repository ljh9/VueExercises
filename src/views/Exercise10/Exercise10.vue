<script setup>
import PropsDeclaration from './PropsDeclaration.vue'
import PropsDeclarationObject from './PropsDeclarationObject.vue'
import PropNameCasing from './PropNameCasing.vue'
</script>

<template>
    <div>
        <h4>Props Declaration</h4>
        <PropsDeclaration foo="Props Declaration!@#!@#???????"/>
        <h4>Props Declaration using object</h4>
        <PropsDeclarationObject title="Props Declaration using object" :likes="613"/>
        <h4>Prop Name Casing</h4>
        <PropNameCasing greeting-message="hello"/>
    </div>
</template>