<template>
  <aside class="c-social-reel__wrap">
    <ul class="c-social-reel">
      <li>Get&nbsp;in&nbsp;touch:</li>
      <li>
        <a class="social-reel__link" href="tel://14014809573">+401.480.9573</a>
      </li>
      <li>
        <a class="social-reel__link" href="mailto:zackkrida@protonmail.com"
          >zackkrida@protonmail.com</a
        >
      </li>
      <li>
        <a class="social-reel__link" href="https://twitter.com/zackkrida"
          >@zackkrida</a
        >
      </li>
      <li>
        <a class="social-reel__link" href="https://github.com/zackkrida"
          >GitHub</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SocialReel"
}
</script>


<style lang="scss">
.c-social-reel {
  align-items: center;
  background-color: #48435e;
  color: #fcfcfc;
  display: flex;
  font-size: 1.25rem;
  font-weight: 700;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  overflow-x: scroll;
  padding: 0;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding: 0 2rem;
  }
}

.c-social-reel__wrap {
  position: relative;

  &:after {
    content: "";
    height: 100%;
    width: 60px;
    position: absolute;
    top: 0;
    background: linear-gradient(to left, #48435e, rgba(0, 0, 0, 0));
    right: 0;
  }
}

.social-reel__link {
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 2rem;
  transition: 0.2s all cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    transform: scale(1.05) rotate(-2deg);
  }

  *:nth-child(even) > &:hover {
    transform: scale(1.2) rotate(2deg);
  }

  @media (max-width: 900px) {
    padding: 1rem;
  }
}
</style>
