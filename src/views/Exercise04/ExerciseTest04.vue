<script setup>
import FormInputBindings from './FormInputBindings.vue'
import TextTest from './TextTest.vue'
import MultilineText from './MultilineText.vue'
import SingleCheckBox from './SingleCheckBox.vue'
import MultipleCheckboxes from './MultipleCheckboxes.vue'
import RadioButton from './RadioButton.vue'
import SingleSelect from './SingleSelect.vue'
import MultipleSelect from './MultipleSelect.vue'
import BindingSelectOptions from './BindingSelectOptions.vue'
import CheckboxValueBindings from './CheckboxValueBindings.vue'
import RadioValueBindings from './RadioValueBindings.vue'
import SelectValueBindings from './SelectValueBindings.vue'
import ModifierLazy from './ModifierLazy.vue'
import ModifierTrim from './ModifierTrim.vue'
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
        <h4>Binding Select Options</h4>
        <BindingSelectOptions />
        <h4>Value Bindings - Checkbox</h4>
        <CheckboxValueBindings />
        <h4>Value Bindings - Radio</h4>
        <RadioValueBindings />
        <h4>Value Bindings - Select</h4>
        <SelectValueBindings />
        <h4>Modifier - Lazy</h4>
        <ModifierLazy />
        <h4>Modifier - Trim</h4>
        <ModifierTrim />
    </div>
</template>