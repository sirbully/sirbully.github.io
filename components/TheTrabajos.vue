<template>
  <section id="experience" class="section">
    <div class="section__title">Experience</div>
    <div class="section__content">
      <div class="trabajos">
        <div class="trabajo">
          <div class="saan-kelan">
            <div class="trabajo__saan">Exora Technologies</div>
            <div class="trabajo__kelan">Nov 2019 - Present</div>
          </div>
          <div class="trabajo__posisyon">Platform Engineer</div>
        </div>
        <div class="trabajo">
          <div class="saan-kelan">
            <div class="trabajo__saan">Women Who Code Manila</div>
            <div class="trabajo__kelan">Jan 2018 - Present</div>
          </div>
          <div class="trabajo__posisyon">VueJS Tech Lead</div>
        </div>
        <div class="trabajo">
          <div class="saan-kelan">
            <div class="trabajo__saan">My Kids Code PH</div>
            <div class="trabajo__kelan">Sept 2018 - Nov 2018</div>
          </div>
          <div class="trabajo__posisyon">Programming Teacher</div>
        </div>
      </div>
      <a href="#" target="_blank" class="arrow-link">View My Resume</a>
    </div>
  </section>
</template>

<script>
export default {}
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
