<template>
  <section id="skills" class="section">
    <div class="section__title">Skills</div>
    <div class="section__content">
      <div class="powers">
        <div class="powers__category">
          <div class="powers__category__label">Languages</div>
          <ul>
            <li class="powers__category__item"></li>
          </ul>
        </div>
        <div class="powers__category">
          <div class="powers__category__label">Frameworks</div>
          <ul>
            <li class="powers__category__item"></li>
          </ul>
        </div>
        <div class="powers__category">
          <div class="powers__category__label">Tools</div>
          <ul>
            <li class="powers__category__item"></li>
          </ul>
        </div>
        <div class="powers__category">
          <div class="powers__category__label">Design</div>
          <ul>
            <li class="powers__category__item"></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

.powers {
  display: flex;
  justify-content: space-between;
  @include weird-medium {
    flex-wrap: wrap;
  }
  &__category {
    @include weird-medium {
      width: 47%;
      margin-right: 5px;
      margin-bottom: 25px;
    }
    &__label {
      font-weight: 700;
      color: $black;
      text-transform: uppercase;
    }
    &__item {
      margin: 3px 0;
      font-size: 0.9rem;
    }
  }
}
</style>
