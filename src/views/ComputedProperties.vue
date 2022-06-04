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
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>

<template>
    <div class="exercise">
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
    </div>
</template>