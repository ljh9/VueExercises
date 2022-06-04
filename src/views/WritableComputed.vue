<script>
export default {
  data() {
    return {
      firstName: 'J',
      lastName: 'H'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
</script>

<template>
    <div class="exercise">
        <p>{{ fullName }}</p>
        <input v-model="firstName" />
        <input v-model="lastName" />
    </div>
</template>