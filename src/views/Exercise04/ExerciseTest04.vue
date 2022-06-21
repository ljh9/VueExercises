<script setup>
import FormInputBindings from './FormInputBindings.vue'
import TextTest from './TextTest.vue'
import MultilineText from './MultilineText.vue'
import SingleCheckBox from './SingleCheckBox.vue'
import MultipleCheckboxes from './MultipleCheckboxes.vue'
</script>

<template>
    <div>
        <h4>Form Input Bindings</h4>
        <FormInputBindings />
        <h4>Text</h4>
        <TextTest />
        <h4>Multiline text</h4>
        <MultilineText />
        <h4>Checkbox</h4>
        <SingleCheckBox />
        <h4>Multiple Checkbox</h4>
        <MultipleCheckboxes />
    </div>
</template>