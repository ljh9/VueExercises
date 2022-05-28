<script setup>
import TextInterpolation from './TextInterpolation.vue'
import RawHTML from './RawHTML.vue'
import AttributeBindings from './AttributeBindings.vue'
</script>

<template>
    <div>
        <h2>TextInterpolation</h2>
        <TextInterpolation msg="This is for test"/>

        <h2>Raw HTML</h2>
        <RawHTML />

        <h4>Attribute Bindings</h4>
        <AttributeBindings />
    </div>
</template>