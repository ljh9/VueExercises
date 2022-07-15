<script>
import BlogPostBtn from './BlogPostBtn.vue'
export default {
  components: {
    BlogPostBtn
  },
  data() {
    return {
      posts: [
        { id: 1, title: '1111' },
        { id: 2, title: '22222' },
        { id: 3, title: '3333333333' }
      ],
      postFontSize: 3
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPostBtn
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            />  
        </div>
    </div>
</template>