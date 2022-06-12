<script setup>
import DirectiveVIf from './DirectiveVIf.vue'
import DirectiveVElse from './DirectiveVElse.vue'
import DirectiveVElseIf from './DirectiveVElseIf.vue'
import DirectiveVIfOnTemplate from './DirectiveVIfOnTemplate.vue'
import DirectiveVShow from './DirectiveVShow.vue'
</script>

<template>
    <div>
        <h4>Directive v-if</h4>
        <DirectiveVIf />
        <h4>Directive v-else</h4>
        <DirectiveVElse />
        <h4>Directive v-else-if</h4>
        <DirectiveVElseIf />
        <h4>Directive v-if on template</h4>
        <DirectiveVIfOnTemplate />
        <h4>Directive v-show</h4>
        <DirectiveVShow />
    </div>
</template>