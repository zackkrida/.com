<template>
  <div class="c-section c-section--posts u-bg--accent">
    <h2>recent writing</h2>
    <post-list />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: 'latest-posts',
  components: {
    PostList
  }
}
</script>

<style>
@media (min-width: 900px) {
  .c-section--posts {
    padding-left: 9rem;
  }
}
</style>
