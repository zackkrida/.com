const Parallax = {
  init(el, displace) {
    this.animateItem(el, displace)
  },
  setPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop
    }
  },
  animateItem(el, displace) {
    if (typeof window.orientation !== 'undefined') {
      return
    }
    const scrollPosition = this.setPosition()
    el.style.transform = `translate3d(0px, ${scrollPosition / displace}px, 0px)`
  }
}

const parallaxDirective = (el, binding) => {
  Parallax.init(el, binding.value)
  window.addEventListener('scroll', () => Parallax.init(el, binding.value))
}

export default parallaxDirective
