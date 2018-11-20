<template>
  <div id="app">
    <hero />

    <main class="c-page-content" v-parallax="-4">
      <transition name="page">
        <router-view />
      </transition>
    </main>

    <signup />
    <hire />
    <site-footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import SiteFooter from '@/components/SiteFooter'
import Hire from '@/components/Hire'
import Signup from '@/components/Signup'

export default {
  components: {
    Hero,
    SiteFooter,
    Hire,
    Signup,
  },
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul,
li,
p {
  font-weight: 500;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #48435e;
}

body {
  background-color: #ad4444;
  width: 100%;
  overflow-x: hidden;
}

a {
  color: #ad4444;
  font-weight: 700;
  text-decoration: none;
}

.u-title {
  color: #48435e;
  white-space: nowrap;
}

.u-display-1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.c-section {
  padding: 4rem;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  color: #48435e;
  background-position: center right;
  background-color: #fcfcfc;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  > p,
  ul,
  ol {
    line-height: 1.4;
    max-width: 700px;
    &:not(:last-child) {
      margin-bottom: 1.4rem;
    }
  }

  a {
    font-weight: 700;
  }
}

.c-section--small {
  padding: 1rem;
}

img,
picture,
source {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-section__bg-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.3s ease-in;
  object-fit: cover;

  @media (max-width: 600px) {
    opacity: 0.25;
  }
}

.u-bg--primary {
  background-color: #ad4444;
  color: #fcfcfc;

  a {
    color: #ad4444;
  }

  &::selection {
    background-color: #48435e;
    color: #fff;
  }
}

.u-bg--accent {
  background-color: #48435e;
  color: #fcfcfc;

  a {
    text-shadow: 0 0 1px #252235;
  }
}

.page-enter-active,
.page-leave-active {
  background-color: #48435e;

  &,
  & * {
    transition: all 0.5s;
  }
}

.page-enter,
.page-leave-to {
  * {
    opacity: 0;
  }
}

.c-page-content {
  z-index: 200;
  position: relative;
}

.c-btn {
  background-color: #48435e;
  color: #fff;
  cursor: pointer;

  @media (max-width: 463px) {
    width: 100%;
  }
}

::selection {
  background-color: #ad4444;
  color: #fff;
}

.u-hide {
  @media (max-width: 900px) {
    display: none;
  }
}

.u-hide--xs {
  @media (max-width: 480px) {
    display: none;
  }
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px 1px 1px 1px); // IE 6 and 7
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  overflow: hidden !important;
}
</style>
