<template>
  <section id="experience" class="section">
    <div class="section__title">Experience</div>
    <div class="section__content">
      <div class="trabajos">
        <div v-for="trabaho in trabahos" :key="trabaho.saan" class="trabajo">
          <div class="saan-kelan">
            <div class="trabajo__saan">
              <a :href="trabaho.url" target="_blank" class="underline-link">{{
                trabaho.saan
              }}</a>
            </div>
            <div class="trabajo__kelan">{{ trabaho.kelan }}</div>
          </div>
          <div class="trabajo__posisyon">{{ trabaho.posisyon }}</div>
        </div>
      </div>
      <a :href="resume" target="_blank" class="arrow-link">View My Resume</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resume:
        'https://drive.google.com/open?id=1ORdGWxHz4ErFlc4EXlMaPkF2Oox_ubHj',
      trabahos: [
        {
          saan: 'Exora Technologies',
          kelan: 'Nov 2019 - Present',
          posisyon: 'Platform Engineer',
          url: 'htttps://www.exora.ph'
        },
        {
          saan: 'Women Who Code Manila',
          kelan: 'Jan 2018 - Present',
          posisyon: 'VueJS Tech Lead',
          url: 'https://www.womenwhocode.com/manila/about#leaders'
        },
        {
          saan: 'My Kids Code PH',
          kelan: 'Oct 2018 - Dec 2018',
          posisyon: 'Programming Teacher',
          url: 'https://www.instagram.com/p/BrXNIGyHWId'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

.trabajos {
  margin-bottom: 100px;
}

.trabajo {
  margin-bottom: 25px;
  .saan-kelan {
    display: flex;
    justify-content: space-between;
    @include mobile {
      display: block;
    }
  }
  &__saan {
    font-weight: 700;
  }
  &__kelan {
    font-size: 0.9rem;
    @include mobile {
      font-size: 0.8rem;
    }
  }
}

.arrow-link {
  font-size: 1.25rem;
  &:after {
    width: 20px;
    height: 20px;
  }
}
</style>
