<script>
import BlogPost from './BlogPost.vue'
export default {
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [
        { id: 1, title: '11111' },
        { id: 2, title: '222' },
        { id: 3, title: '3333333333333' }
      ],
      postFontSize: 3
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
            />
        </div>
    </div>
</template>