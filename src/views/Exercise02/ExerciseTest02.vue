<script setup>
import DirectiveVFor from './DirectiveVFor.vue'
import DirectiveVForParentScope from './DirectiveVForParentScope.vue'
import DirectiveVForIndex from './DirectiveVForIndex.vue'
</script>

<template>
    <div>
        <h2>Exercise 06</h2>
        <h4>Directive v-for</h4>
        <DirectiveVFor />
        <h4>Directive v-for access to all parent scope properties</h4>
        <DirectiveVForParentScope />
        <h4>Directive v-for with index</h4>
        <DirectiveVForIndex />
        
    </div>
</template>