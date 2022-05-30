<script>
export default {
    data() {
        return {
            isButtonDisabled: true
        }
    }
}
</script>

<template>
  <div class="exercise">
    <button :disabled="isButtonDisabled">When isButtonDisabled is TRUE</button>
    <br/>
    <button :disabled="!isButtonDisabled">When isButtonDisabled is FALSE</button>
  </div>
</template>