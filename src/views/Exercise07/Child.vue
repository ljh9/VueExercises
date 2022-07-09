<script>
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      console.log("This is public method");
    },
    privateMethod() {
      console.log("This is private method");
    }
  }
}
</script>

<template>
    <div class="exercise">
        <h3>Child</h3>
    </div>
</template>