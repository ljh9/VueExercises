<script>
import BlogPostObject from './BlogPostObject.vue'
export default {
  components: {
    BlogPostObject
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'title gogogo'
        
      }
    }
  }
}
</script>

<template>
    <div class="exercise">
        <BlogPostObject v-bind="post" />
        <BlogPostObject :id="post.id" :title="post.title" />
    </div>
</template>