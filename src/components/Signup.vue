<template>
  <section class="c-section u-bg--primary c-newsletter-signup">
    <div class="c-section__bg-image">
        <picture>
          <source srcset="@/assets/img/lilly.webp" type="image/webp">
          <img src="@/assets/img/lilly.jpg" alt="a lilly sits in front of a window in my providence, ri apartment on a cool winter morning.">
      </picture>
    </div>

    <div class="c-section__content">
      <h2>Newsletter</h2>
      <p>
        Subscribe to a once-monthly email with my scattered thoughts, experiments, and links.
      </p>
      <mailchimp />
    </div>
  </section>
</template>

<script>
import Mailchimp from '@/components/Mailchimp'

export default {
  name: 'newsletter-signup',
  components: {
    Mailchimp,
  },
}
</script>

<style lang="scss">
.c-newsletter-signup {
  color: #fcfcfc;
  text-align: right;

  padding-top: 25vh;
  min-height: 75vh;

  @media (min-width: 600px) {
    margin-top: -25vh;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  > *:not(.c-section__bg-image) {
    position: relative;
    z-index: 200;
    width: 400px;
    max-width: 100%;
  }
}
</style>
