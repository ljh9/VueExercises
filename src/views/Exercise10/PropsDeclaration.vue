<script>
export default {
  props: ['foo'],
  created() {
    console.log(this.foo)
    
  }
}
</script>

<template>
    <div class="exercise">
        Check the console
    </div>
</template>