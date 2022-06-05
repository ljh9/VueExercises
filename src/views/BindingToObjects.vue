<script>
export default {
  data() {
    return {
        // isActive: true,
        // hasError: false
        isActive: false,
        hasError: true
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div
            class="static"
            :class="{ active: isActive, 'text-danger': hasError }"
        ></div>
    </div>
</template>