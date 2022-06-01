<script setup>
import TextInterpolation from './TextInterpolation.vue'
import RawHTML from './RawHTML.vue'
import AttributeBindings from './AttributeBindings.vue'
import BooleanAttributes from './BooleanAttributes.vue'
import DynamicallyBindingMultipleAttributes from './DynamicallyBindingMultipleAttributes.vue'
import CallingFunctions from './CallingFunctions.vue'
import DirectivesTest from './DirectivesTest.vue'
import ArgumentsBind from './ArgumentsBind.vue'
import ArgumentsOn from './ArgumentsOn.vue'
import DynamicArgumentsBind from './DynamicArgumentsBind.vue'
import DynamicArgumentsOn from './DynamicArgumentsOn.vue'
</script>

<template>
    <div>
        <h2>TextInterpolation</h2>
        <TextInterpolation msg="This is for test"/>

        <h2>Raw HTML</h2>
        <RawHTML />

        <h2>Attribute Bindings</h2>
        <AttributeBindings />

        <h2>Boolean Attributes</h2>
        <BooleanAttributes />

        <h2>Dynamically Binding Multiple Attributes</h2>
        <DynamicallyBindingMultipleAttributes />

        <h2>Calling Functions</h2>
        <CallingFunctions />

        <h2>Directives</h2>
        <DirectivesTest />

        <h2>Arguments v-bind</h2>
        <ArgumentsBind />

        <h2>Arguments v-on</h2>
        <ArgumentsOn />

        <h2>Dynamic Arguments v-bind</h2>
        <DynamicArgumentsBind />

        <h2>Dynamic Arguments v-on</h2>
        <DynamicArgumentsOn /> 

    </div>
</template>