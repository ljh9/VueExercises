<script>
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
    console.log("Public data: " + this.$refs.child.publicData);
    console.log("Private data: " + this.$refs.child.privateData);
    this.$refs.child.publicMethod();
    this.$refs.child.privateMethod();
  }
}
</script>

<template>
    <div class="exercise">
        <h1>Parent</h1>
        <Child ref="child" />
    </div>
</template>