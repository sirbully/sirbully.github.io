<template>
  <div class="portfolio">
    <toggle-wrap />
    <the-header />
    <the-background />
    <the-talent />
    <the-trabajos />
    <section id="featured-projects" class="section">
      <div class="section__title">Featured Projects</div>
      <div class="section__content"></div>
    </section>
    <section id="other-projects" class="section">
      <div class="section__title">Other Projects</div>
      <div class="section__content"></div>
    </section>
    <the-footer />
    <button
      id="launch-top"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @click="scrollTop()"
    >
      <img :src="rocketLauncher" />
    </button>
  </div>
</template>

<script>
import ToggleWrap from '@/components/ToggleWrap.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheBackground from '@/components/TheBackground.vue'
import TheTalent from '@/components/TheTalent.vue'
import TheTrabajos from '@/components/TheTrabajos.vue'
import TheFooter from '@/components/TheFooter.vue'
import Rocket1 from '@/assets/img/icons/rocket-1.png'
import Rocket2 from '@/assets/img/icons/rocket-2.png'

export default {
  components: {
    ToggleWrap,
    TheHeader,
    TheBackground,
    TheTalent,
    TheTrabajos,
    TheFooter
  },
  data() {
    return {
      myRocket: null,
      hovered: false
    }
  },
  computed: {
    rocketLauncher() {
      return this.hovered ? Rocket2 : Rocket1
    }
  },
  mounted() {
    this.myRocket = document.getElementById('launch-top')
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.myRocket.style.display = 'block'
      } else {
        this.myRocket.style.display = 'none'
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
