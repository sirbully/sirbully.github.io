<template>
  <section id="skills" class="section">
    <div class="section__title">Skills</div>
    <div class="section__content">
      <div class="powers">
        <div v-for="s in skillxsz" :key="s.title" class="powers__category">
          <div class="powers__category__label">{{ s.title }}</div>
          <ul>
            <li
              v-for="power in s.powers"
              :key="power"
              class="powers__category__item"
            >
              {{ power }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skillxsz: [
        {
          title: 'Languages',
          powers: [
            'HTML',
            'CSS',
            'Sass',
            'Javascript ES6+',
            'NodeJS',
            'PHP',
            'Java',
            'Python'
          ]
        },
        {
          title: 'Frameworks',
          powers: [
            'ReactJS',
            'VueJS',
            'jQuery',
            'Express',
            'Laravel',
            'CodeIgniter',
            'Spring',
            'Django'
          ]
        },
        {
          title: 'Tools',
          powers: [
            'Git',
            'Firebase',
            'AWS',
            'MySQL',
            'MongoDB',
            'PostgreSQL',
            'WordPress',
            'Jest'
          ]
        },
        {
          title: 'Design',
          powers: [
            'Bootstrap',
            'Material',
            'Bulma',
            'Tailwind',
            'UI/UX',
            'Figma',
            'Photoshop',
            'Illustrator'
          ]
        }
      ]
    }
  }
}
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
