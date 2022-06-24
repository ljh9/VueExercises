<script>
export default {
  data() {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <select v-model="selected">
            <option v-for="option in options" :value="option.value" v-bind:key="option">
                {{ option.text }}
            </option>
        </select>

        <div>Selected: {{ selected }}</div>
    </div>
</template>