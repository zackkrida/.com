import VanillaTilt from 'vanilla-tilt'

const tiltDirective = (el, binding) => {
  VanillaTilt.init(el, {
    reverse: true,
    max: 30,
    perspective: 1000,
    speed: 300,
    transition: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    ...binding.value
  })
}

export default tiltDirective
