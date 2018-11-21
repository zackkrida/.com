<template>
  <div v-tilt="tiltSettings" class="c-postlist">
    <article class="c-postlist-post">
      <router-link class="u-plain-link" to="/bits-and-bites">
        <h3>'bits n' bites! ✨new✨</h3>
        <p>tiny bits of content i post semi-regularly. fun articles and snippets from around the web. sometimes code-related, often political instead.</p>
      </router-link>
    </article>
    <article class="c-postlist-post">
      <a href="https://medium.com/@zackkrida/building-better-backgrounds-e8dad55943c">
        <h3>Building Better Backgrounds<br><small class="badge">posted on medium, sorry</small></h3>
        <p>Approaches to stacking css background images on mobile for improved readability, using object-fit and ES2015+.</p>
      </a>
    </article>
    <article class="c-postlist-post">
      <a href="https://medium.com/@zackkrida/optimize-performance-with-laravel-mix-1c93ea384322">
        <h3>Optimize Perf With Laravel Mix<br><small class="badge">posted on medium, sorry</small></h3>
        <p>Split your Laravel App’s vendor JavaScript from your application code to boost performance.</p>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiltSettings: { max: 10 },
    }
  },
}
</script>

<style lang="scss">
.c-postlist {
  display: flex;
  margin-left: -2rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
}

.c-postlist-post {
  margin: 2rem 1rem 0 1rem;
  padding: 1rem;
  transition: 0.2s all ease-in-out;

  @media (max-width: 900px) {
    margin-right: 0;
  }

  @media (min-width: 900px) {
    width: 33.33%;
  }

  a {
    color: inherit;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1)
      matrix3d(
        0.984808,
        0,
        0.173648,
        0,
        -0.0449435,
        0.965926,
        0.254887,
        0,
        -0.167731,
        -0.258819,
        0.951251,
        0,
        0,
        0,
        0,
        1
      );
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }
}
</style>
