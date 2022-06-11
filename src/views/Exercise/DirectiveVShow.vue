<script>
export default {
  data() {
    return {
        ok: false,
    }
  }
}
</script>

<template>
    <div class="exercise">
        <h1 v-show="ok">Hello</h1>
    </div>
</template>