<template>
  <div class="c-hire-box" v-tilt="{ scale: 1.1, axis: 'x', max: 15 }">
    <router-link to="/hire">
      <h3>I am <strong>currently accepting select projects and work opportunities</strong>.</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'hire'
}
</script>

<style lang="scss">
.c-hire-box {
  color: #fcfcfc;
  background-color: #3e372d;
  position: relative;
  z-index: 200;
  width: 100%;

  a {
    display: block;
    text-align: center;
    padding: 2rem;
    color: inherit;
    text-decoration: none;
  }
}
</style>
