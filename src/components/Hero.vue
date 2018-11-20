<template>
  <header class="c-hero" :class="headerClass">

    <section class="c-hero__inner">
      <div>
              <h1>
        <router-link class="u-title" to="/">zack krida
          <span class="u-hide--xs">is a creative developer</span>
          <span class="u-hide"> in providence ri</span>
        </router-link>
      </h1>

      <div ref="hideContent" class="c-hero__content" :style="setStyle" :class="{ 'c-hero__content--hidden': small }">
        <p>I'm Zack, a creative software developer in Providence, RI. I plan and develop fast, responsive web applications and sites that work on any device. I'm also deeply interested in print, particularly zines and independent publishing. You can reach me the quickest
          <a href="http://www.twitter.com/zackkrida">on twitter @zackkrida</a>. For less-immediate or longer requests send me an email
          <a href="mailto:zackkrida@protonmail.com"> at zackkrida@protonmail.com.</a>
        </p>
      </div>
      </div>
    </section>

    <router-link to="/" class="c-hero__inner c-hero__image">
      <picture>
        <source srcset="@/assets/img/zack-desk.webp" type="image/webp">
        <img src="@/assets/img/zack-desk.jpg" alt="overhead view of me (Zack Krida) at my desk, with a cool monochromatic red color palette.">
      </picture>
    </router-link>

  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      headerHeight: 0,
    }
  },
  mounted() {
    this.headerHeight = this.$refs.hideContent.clientHeight
  },
  computed: {
    headerClass() {
      return {
        'c-hero--small': this.small,
      }
    },
    small() {
      return this.$route.path !== '/'
    },
    setStyle() {
      if (!this.small) return {}
      return {
        'margin-top': `${-this.headerHeight}px`,
      }
    },
  },
}
</script>

<style lang="scss">
.c-hero {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 1.1rem;
  line-height: 1.4;
  background-color: #fcfcfc;
  transition: 0.4s ease-in;
  transition-delay: 0.2s;
  overflow: hidden;

  @media (max-width: 900px) {
    margin-top: 0.5rem;
  }
}

.c-hero__inner {
  padding: 2rem;
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media (min-width: 900px) {
    padding: 6rem 8rem 4rem 8rem;
  }

  p {
    max-width: 100%;
  }

  &:last-child {
    width: 100%;
    margin-left: auto;
  }
}

.c-hero__image {
  flex: 1.5;
  padding: 0;
  transition: 0.65s all ease-in;

  .c-hero--small & {
    flex: 0.5;
  }
}

.c-hero__content {
  margin-top: 2rem;
  max-width: 100%;
  transition: 0.4s all ease-in-out;

  p {
    margin-bottom: 2rem;
  }
}

.c-hero__content--hidden {
  opacity: 0;
  visibility: hidden;
}
</style>
