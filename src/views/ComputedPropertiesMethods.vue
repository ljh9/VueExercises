<script>
export default {
  data() {
    return {
      author: {
        name: 'J H',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  methods: {
    calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>

<template>
    <div class="exercise">
        <p>Has published books:</p>
        <p>{{ calculateBooksMessage() }}</p>
    </div>
</template>