<template>
  <div class="portfolio">
    <toggle-wrap />
    <the-header />
    <the-background />
    <the-talent />
    <the-trabajos />
    <featured-projects />
    <other-projects />
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
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import OtherProjects from '@/components/OtherProjects.vue'
import TheFooter from '@/components/TheFooter.vue'
import Rocket1 from '@/assets/img/icons/rocket-1.png'
import Rocket2 from '@/assets/img/icons/rocket-2.png'
import Cover from '@/assets/img/Cover.png'

export default {
  components: {
    ToggleWrap,
    TheHeader,
    TheBackground,
    TheTalent,
    TheTrabajos,
    FeaturedProjects,
    OtherProjects,
    TheFooter
  },
  data() {
    return {
      myRocket: null,
      hovered: false,
      title: 'Krizza Bullecer | Full-stack Developer',
      desc:
        "I'm Krizza Bullecer, a curious full-stack software engineer focused on building beautiful and optimized apps while staying up-to-date with the latest trends in tech.",
      img: Cover,
      twitterImg: 'https://sirbully.github.io' + `${Cover}`,
      url: 'https://sirbully.github.io',
      siteName: 'Krizza Bullecer'
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
  },
  head() {
    return {
      title: 'Krizza Bullecer | Full-stack Developer',
      meta: [
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.desc
        },
        {
          property: 'og:image',
          content: this.twitterImg
        },
        {
          property: 'og:url',
          content: this.url
        },
        {
          property: 'og:site_name',
          content: this.siteName
        },
        {
          name: 'author',
          content: this.siteName
        },
        {
          name: 'twitter:title',
          content: this.title
        },
        {
          name: 'twitter:description',
          content: this.desc
        },
        {
          name: 'twitter:image',
          content: this.twitterImg
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]
    }
  }
}
</script>
