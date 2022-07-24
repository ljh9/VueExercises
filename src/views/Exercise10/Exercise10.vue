<script setup>
import PropsDeclaration from './PropsDeclaration.vue'
import PropsDeclarationObject from './PropsDeclarationObject.vue'
import PropNameCasing from './PropNameCasing.vue'
import StaticAndDynamicProps from './StaticAndDynamicProps.vue'
import BindingPropertiesObject from './BindingPropertiesObject.vue'
import OneWayDataFlow from './OneWayDataFlow.vue'
</script>

<template>
    <div>
        <h4>Props Declaration</h4>
        <PropsDeclaration foo="Props Declaration!@#!@#???????"/>
        <h4>Props Declaration using object</h4>
        <PropsDeclarationObject title="Props Declaration using object" :likes="613"/>
        <h4>Prop Name Casing</h4>
        <PropNameCasing greeting-message="hello"/>
        <h4>Static vs. Dynamic Props</h4>
        <StaticAndDynamicProps />
        <h4>Binding Multiple Properties Using an Object</h4>
        <BindingPropertiesObject />
        <h4>One-Way Data Flow</h4>
        <OneWayDataFlow />
        
    </div>
</template>