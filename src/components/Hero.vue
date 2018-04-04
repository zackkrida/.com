<template>
  <header class="c-hero" :class="headerClass">

    <router-link to="/" class="c-hero__inner c-hero__image">
      <img class="" src="@/assets/img/zack-desk.gif" alt="Zack Krida">
    </router-link>

    <section v-tilt="{ max: 15, reset: false }" class="c-hero__inner">
      <h1>
        <router-link class="u-title" to="/">zack krida
          <span class="u-hide--xs">is a creative developer</span>
          <span class="u-hide"> in providence</span>
        </router-link>
      </h1>

      <div ref="hideContent" class="c-hero__content" :style="setStyle" :class="{ 'c-hero__content--hidden': small }">
        <p>I'm Zack, a creative software developer in Providence, RI. I plan and develop fast, responsive web applications and sites that work on any device. I'm also deeply interested in print, particularly zines and independent publishing. You can reach me the quickest
          <a href="http://www.twitter.com/zackkrida">on twitter @zackkrida</a>. For less-immediate or longer requests send me an email
          <a href="mailto:zackwcote@gmail.com"> at zackwcote@gmail.com.</a>
        </p>
      </div>

    </section>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      headerHeight: 0
    }
  },
  mounted() {
    this.headerHeight = this.$refs.hideContent.clientHeight
  },
  computed: {
    headerClass() {
      return {
        'c-hero--small': this.small
      }
    },
    small() {
      return this.$route.path !== '/'
    },
    setStyle() {
      if (!this.small) return {}
      return {
        'margin-top': `${-this.headerHeight}px`
      }
    }
  }
}
</script>

<style lang="scss">
.c-hero {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 1.4rem;
  background-color: #fcfcfc;
  transition: 0.4s ease-in;
  transition-delay: 0.2s;
  overflow: hidden;

  @media (max-width: 900px) {
    margin-top: 0.5rem;
  }
}

.c-hero__inner {
  flex: 2.5;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: left;
    width: 600px;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
