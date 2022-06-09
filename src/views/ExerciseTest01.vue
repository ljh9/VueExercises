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
//////////////////////////////////////////////////////////////////
import ReactivityFundamentals from './ReactivityFundamentals.vue'
import ReactiveProxyVsOriginal from './ReactiveProxyVsOriginal.vue'
import DeclaringMethods from './DeclaringMethods.vue'
import DOMUpdateTiming from './DOMUpdateTiming.vue'
import DeepReactivity from './DeepReactivity.vue'
//////////////////////////////////////////////////////////////////
import ComputedProperties from './ComputedProperties.vue'
import ComputedPropertiesMethods from './ComputedPropertiesMethods.vue'
import WritableComputed from './WritableComputed.vue'
//////////////////////////////////////////////////////////////////
import BindingToObjects from './BindingToObjects.vue'
import BindingToObjectNotInline from './BindingToObjectNotInline.vue'
import BindingToObjectComputed from './BindingToObjectComputed.vue'
import BindingToArrays from './BindingToArrays.vue'
import BindingToArraysWithTernaryExpressions from './BindingToArraysWithTernaryExpressions.vue'
import BindingToArraysObjectSyntax from './BindingToArraysObjectSyntax.vue'
import WithComponentsBasic from './WithComponentsBasic.vue'
import WithComponentsClassBindings from './WithComponentsClassBindings.vue'
import WithComponentsMultipleRoots from './WithComponentsMultipleRoots.vue'
import InlineStylesBindingToObj from './InlineStylesBindingToObj.vue'
import InlineStylesBindingToObjAdvanced from './InlineStylesBindingToObjAdvanced.vue'
import InlineStylesBindingToArr from './InlineStylesBindingToArr.vue'
import InlineStylesMultipleValues from './InlineStylesMultipleValues.vue'
</script>

<template>
    <div>
        <h2>TextInterpolation</h2>
        <TextInterpolation msg="This is for test"/>
        <h2>-----------------------------------------------</h2>
        <h2>Raw HTML</h2>
        <RawHTML />
        <h2>-----------------------------------------------</h2>
        <h2>Attribute Bindings</h2>
        <AttributeBindings />
        <h2>-----------------------------------------------</h2>
        <h2>Boolean Attributes</h2>
        <BooleanAttributes />
        <h2>-----------------------------------------------</h2>
        <h2>Dynamically Binding Multiple Attributes</h2>
        <DynamicallyBindingMultipleAttributes />
        <h2>-----------------------------------------------</h2>
        <h2>Calling Functions</h2>
        <CallingFunctions />
        <h2>-----------------------------------------------</h2>
        <h2>Directives</h2>
        <DirectivesTest />
        <h2>-----------------------------------------------</h2>
        <h2>Arguments v-bind</h2>
        <ArgumentsBind />
        <h2>-----------------------------------------------</h2>
        <h2>Arguments v-on</h2>
        <ArgumentsOn />
        <h2>-----------------------------------------------</h2>
        <h2>Dynamic Arguments v-bind</h2>
        <DynamicArgumentsBind />
        <h2>-----------------------------------------------</h2>
        <h2>Dynamic Arguments v-on</h2>
        <DynamicArgumentsOn /> 
        <h2>-----------------------------------------------</h2>
        <!--                      -->
        <h2>Reactivity Fundamentals</h2>
        <ReactivityFundamentals />
        <h2>-----------------------------------------------</h2>
        <h2>Reactive Proxy Vs. Original</h2>
        <ReactiveProxyVsOriginal />
        <h2>-----------------------------------------------</h2>
        <h2>Declaring Methods</h2>
        <DeclaringMethods />
        <h2>-----------------------------------------------</h2>
        <h2>DOM Update Timing</h2>
        <DOMUpdateTiming />
        <h2>-----------------------------------------------</h2>
        <h2>Deep Reactivity</h2>
        <DeepReactivity />
        <h2>-----------------------------------------------</h2>
        <!--                      -->
        <h2>ComputedProperties</h2>
        <ComputedProperties />
        <h2>-----------------------------------------------</h2>
        <h2>ComputedPropertiesMethods</h2>
        <ComputedPropertiesMethods />
        <h2>-----------------------------------------------</h2>
        <h2>Writable Computed</h2>
        <WritableComputed />
        <h2>-----------------------------------------------</h2>
        <!--                      -->
        <h2>Binding to Objects</h2>
        <BindingToObjects />
        <h2>-----------------------------------------------</h2>
        <h2>Binding to Objects2</h2>
        <BindingToObjectNotInline />
        <h2>-----------------------------------------------</h2>
        <h2>Binding to Objects using computed</h2>
        <BindingToObjectComputed />
        <h2>-----------------------------------------------</h2>
        <h2>Binding to Arrays</h2>
        <BindingToArrays />
        <h2>-----------------------------------------------</h2>
        <h2>Binding to Arrays With Ternary Expressions</h2>
        <BindingToArraysWithTernaryExpressions />
        <h2>-----------------------------------------------</h2>
        <h2>Binding to Arrays using Object Syntax</h2>
        <BindingToArraysObjectSyntax />
        <h2>-----------------------------------------------</h2>
        <h2>With Components</h2>
        <WithComponentsBasic />
        <h2>-----------------------------------------------</h2>
        <h2>With Components using Class bindings</h2>
        <WithComponentsClassBindings />
        <h2>-----------------------------------------------</h2>
        <h2>With Components with mutiple roots</h2>
        <WithComponentsMultipleRoots />
        <h2>-----------------------------------------------</h2>
        <h2>Binding Inline Styles - Binding to Objects</h2>
        <InlineStylesBindingToObj />
        <h2>-----------------------------------------------</h2>
        <h2>Binding Inline Styles - Binding to Objects advanced</h2>
        <InlineStylesBindingToObjAdvanced />
        <h2>-----------------------------------------------</h2>
        <h2>Binding Inline Styles - Binding to Arrays</h2>
        <InlineStylesBindingToArr />
        <h2>Binding Inline Styles - Multiple Values</h2>
        <InlineStylesMultipleValues />

    </div>
</template>