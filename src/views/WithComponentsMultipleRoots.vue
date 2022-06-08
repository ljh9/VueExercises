<script>
import MyComponentMultipleRoots from './MyComponentMultipleRoots.vue'
export default {
  components: {
    MyComponentMultipleRoots
  }
}
</script>

<template>
    <div>
        <h4>My Component with Multiple Roots</h4>
        <my-component-multiple-roots class="baz"></my-component-multiple-roots>
    </div>
</template>