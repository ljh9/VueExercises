<script>
export default {
  props: {
    greetingMessage: String
  }
}
</script>

<template>
    <div class="exercise">
        <span>{{ greetingMessage }}</span>
    </div>
</template>