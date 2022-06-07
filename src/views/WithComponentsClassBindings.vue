<script>
import MyComponent from './MyComponent.vue'
export default {
  data() {
    return {
        isActive: true
    }
  },
  components: {
    MyComponent
  }
}
</script>

<template>
    <div>
        <h4>My Component</h4>
        <my-component :class="{ active: isActive }"></my-component>
    </div>
</template>