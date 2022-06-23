<script setup>
import FormInputBindings from './FormInputBindings.vue'
import TextTest from './TextTest.vue'
import MultilineText from './MultilineText.vue'
import SingleCheckBox from './SingleCheckBox.vue'
import MultipleCheckboxes from './MultipleCheckboxes.vue'
import RadioButton from './RadioButton.vue'
import SingleSelect from './SingleSelect.vue'
import MultipleSelect from './MultipleSelect.vue'
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
        <h4>Radio button</h4>
        <RadioButton />
        <h4>Single Select</h4>
        <SingleSelect />
        <h4>Multiple Select</h4>
        <MultipleSelect />
    </div>
</template>