<script>
import ChildComponentForDataFlow from './ChildComponentForDataFlow.vue'
export default {
  components: {
    ChildComponentForDataFlow
  },
  data() {
    return {
        initialCounter: 1,
        size: 'small'
    }
  }
}
</script>

<template>
    <div class="exercise">
        Initial Counter Value: 
        <input v-model="initialCounter" />
        <br/>
        Size: 
        <input v-model="size" />
        <ChildComponentForDataFlow :initialCounter2="initialCounter" :size2="size" />
        
    </div>
</template>