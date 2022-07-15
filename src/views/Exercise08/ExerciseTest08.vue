<script setup>
import DefiningComponent from './DefiningComponent.vue'
import UsingComponent from './UsingComponent.vue'
import UsingComponentNTimes from './UsingComponentNTimes.vue'
import UsingProps from './UsingProps.vue'
import UsingPropsWithArray from './UsingPropsWithArray.vue'
import ListeningToEvents from './ListeningToEvents.vue'
import ListeningToEventsBtn from './ListeningToEventsBtn.vue'
</script>

<template>
    <div>
        <h4>Defining a Component</h4>
        <DefiningComponent />
        <h4>Using a Component</h4>
        <UsingComponent />
        <h4>Using Components</h4>
        <UsingComponentNTimes />
        <h4>Using Props</h4>
        <UsingProps />
        <h4>Using Props with array</h4>
        <UsingPropsWithArray /> 
        <h4>Listening to Events</h4>
        <ListeningToEvents />
        <h4>Listening to Events - btn</h4>
        <ListeningToEventsBtn />    
    </div>
</template>