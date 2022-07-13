<script>
import BlogPost from './BlogPost.vue'
export default {
  components: {
    BlogPost  
  },
  data() {
    return {
      posts: [
        { id: 1, title: '11111111111' },
        { id: 2, title: '22222222222' },
        { id: 3, title: '33333333333' }
      ]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
        />
    </div>
</template>