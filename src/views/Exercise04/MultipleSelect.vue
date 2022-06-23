<script>
export default {
  data() {
    return {
      selected: []
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div>Selected: {{ selected }}</div>

        <select v-model="selected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>