<script>
export default {
  props: {
    title: String,
    likes: Number
  }
}
</script>

<template>
    <div class="exercise">
        <h6>{{title}}</h6>
        {{likes}} likes.
        
    </div>
</template>