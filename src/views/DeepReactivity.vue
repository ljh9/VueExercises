<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}
</script>

<template>
    <div class="exercise">
        <button @click="mutateDeeply">{{ obj.nested.count }} {{ obj.arr }}</button>
    </div>
</template>