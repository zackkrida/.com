<template>
  <div class="c-social-reel__wrap">
    <div class="c-social-reel">
      <ul>
        <li>Get&nbsp;in&nbsp;touch:</li>
        <li>
          <a href="tel://14014809573">+401.480.9573</a>
        </li>
        <li>
          <a href="mailto:zackwcote@gmail.com">zackwcote@gmail.com</a>
        </li>
        <li>
          <a href="http://twitter.com/zackkrida">@zackkrida</a>
        </li>
        <li>
          <a href="http://github.com/zackkrida">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.c-social-reel {
  width: 100%;
  background-color: #48435e;
  color: #fcfcfc;
  font-weight: 700;
  font-size: 1.25rem;
  overflow-x: scroll;
  position: relative;

  ul {
    display: block;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 900px) {
      justify-content: flex-start;
      padding: 0 2rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 2rem;

    @media (max-width: 900px) {
      padding: 1rem;
    }
  }
}

.c-social-reel__wrap {
  position: relative;

  &:after {
    content: '';
    height: 100%;
    width: 60px;
    position: absolute;
    top: 0;
    background: linear-gradient(to left, #48435e, rgba(0, 0, 0, 0));
    right: 0;
  }
}
</style>
