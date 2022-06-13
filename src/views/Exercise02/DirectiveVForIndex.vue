<script>
export default {
  data() {
    return {
        items: [{ message: 'aaa' }, { message: 'bbb' }]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <li v-for="{ message } in items" v-bind:key="message">
            {{ message }}
        </li>

        <!-- with index alias --> 
        <li v-for="({ message }, index) in items" v-bind:key="message">
            {{ message }} {{ index }}
        </li>
    </div>
</template>