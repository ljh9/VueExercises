<script setup>
import AccessingTheRefs from './AccessingTheRefs.vue'
import RefsInsideVFor from './RefsInsideVFor.vue'
import Parent from './Parent.vue'
</script>

<template>
    <div>
        <h4>Accessing The Refs</h4>
        <AccessingTheRefs />
        <h4>Refs inside v-for</h4>
        <RefsInsideVFor />
        <h4>Ref on Component</h4>
        <Parent />
    </div>
</template>