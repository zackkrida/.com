<template>
    <!-- Begin MailChimp Signup Form -->
    <div id="mc_embed_signup">
        <form action="//zackcote.us9.list-manage.com/subscribe/post?u=fb2252af4ac889bb06161fef3&amp;id=e558a68b49" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <label class="sr-only" for="mce-EMAIL">Enter your Email Address</label>
                    <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="c-btn">
                </div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                    <label class="sr-only" for="mce-EMAIL">Enter your Email Address</label>
                    <input type="text" name="b_fb2252af4ac889bb06161fef3_e558a68b49" tabindex="-1" value="">
                </div>
                <div></div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
  margin-top: 1rem;
  transition: 0.2s all cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    transform: scale(1.2) rotate(1deg);
  }
}

input:not([type='submit']) {
  width: 100%;
  max-width: 250px;

  @media (max-width: 480px) {
    margin-top: 3rem;
    max-width: 100%;
  }
}

input,
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 1rem;
  border: none;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
}
</style>
