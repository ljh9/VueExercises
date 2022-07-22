<script>
import BlogPost from './BlogPost.vue'
export default {
  components: {
    BlogPost
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'Title Title',
        author: {
            name: 'Lee'
            
        }
      },
    }
  }
}
</script>

<template>
    <div class="exercise">
        <BlogPost title="Title222" />
        <!-- Dynamically assign the value of a variable -->
        <BlogPost :title="post.title" />
        <!-- Dynamically assign the value of a complex expression -->
        <BlogPost :title="post.title + ' by ' + post.author.name" />
    </div>
</template>