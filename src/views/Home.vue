<template>
  <div class="c-section c-section--content u-bg--accent">
    <h2>recent writing</h2>
    <post-list />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  name: 'latest-posts',
  components: {
    PostList,
  },
}
</script>
