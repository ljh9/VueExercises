<script>
export default {
  data() {
    return {
      selected: ""
    }
  }
}
</script>

<template>
    <div class="exercise">
        <select v-model="selected">
            <!-- inline object literal -->
            <option :value="{ number: 123 }">123</option>
        </select>

        <div>Value: {{ selected }}</div>
    </div>
</template>