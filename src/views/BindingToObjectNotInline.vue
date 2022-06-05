<script>
export default {
  data() {
    return {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div :class="classObject"></div>
    </div>
</template>