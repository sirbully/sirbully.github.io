<template>
  <section id="featured-projects" class="section">
    <div class="section__title">Featured Projects</div>
    <div class="section__content">
      <div v-for="p in proyectos" :key="p.title" class="project">
        <figure class="project__pic">
          <a :href="p.link" target="_blank">
            <img :src="p.img" alt="" />
          </a>
        </figure>
        <figcaption class="project__caption">
          <div class="project__name">
            <a :href="p.link" target="_blank" class="underline-link">{{
              p.title
            }}</a>
          </div>
          <p v-html="p.desc"></p>
          <div class="project__used">
            <span
              v-for="tool in p.tools"
              :key="tool"
              class="project__used__item"
              >{{ tool }}</span
            >
          </div>
        </figcaption>
      </div>
    </div>
  </section>
</template>

<script>
import ExoraProject from '~@/assets/img/projects/exora.png'
import DSCAdmuProject from '~@/assets/img/projects/dscadmu.png'
import KinderProject from '~@/assets/img/projects/kinder.png'
import WanderProject from '~@/assets/img/projects/wandrr.png'

export default {
  data() {
    return {
      proyectos: [
        {
          title: 'Exora Website',
          desc:
            'Our team at Exora recently revamped the website to include clear and concise information about the company. Additionally, we added the facebook API for the chatbot.',
          link: 'https://www.exora.ph/',
          img: ExoraProject,
          tools: ['Git@Gitlab', 'React', 'NodeJS', 'Facebook API']
        },
        {
          title: 'Developer Student Clubs Loyola Website',
          desc:
            'I was tasked to build the official website of the Google Developer Student Clubs Loyola branch.',
          link: 'https://dscadmu.org/',
          img: DSCAdmuProject,
          tools: ['Git@Github', 'Vue', 'Firebase']
        },
        {
          title: 'Kinder Book Campaign',
          desc:
            'A project in collaboration with Kinder Germany. I was outsourced as a front-end developer their campaign.',
          link: null,
          img: KinderProject,
          tools: ['Git@Bitbucket', 'Vue', 'Laravel', 'Jira']
        },
        {
          title: 'wandrr: Immersion app',
          desc:
            'This is our submission for a hackathon. The theme of the hackathon was to bring more awareness to the Filipino culture.<br /><br /><a href="https://www.instagram.com/p/B86NnAVhKN3/" target="_blank" class="underline-link"><small>🏆Won 2nd place at Blue Hacks 2020!🏆</small></a>',
          link: 'https://www.instagram.com/p/B86NnAVhKN3/',
          img: WanderProject,
          tools: ['Git@Github', 'Bootstrap', 'React']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

#featured-projects {
  a:after {
    display: none;
  }
  .project {
    display: flex;
    margin-bottom: 100px;
    margin-left: -5%;
    width: 125%;
    @include thirteen {
      width: 115%;
    }
    @include desktop {
      width: 105%;
    }
    @include tablet {
      width: 100%;
      display: block;
      margin-bottom: 70px;
    }
    &.screentime {
      margin-bottom: 70px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    &__pic {
      max-width: 700px;
      overflow: visible;
      margin: 0;
      a {
        display: block;
      }
      &.phones {
        a {
          display: flex;
          justify-content: space-between;
        }
        .phone {
          margin: 0 -7%;
          &:first-of-type {
            margin-left: -5%;
          }
        }
      }
      img {
        width: 100%;
        max-width: 100%;
        vertical-align: bottom;
      }
    }
    &__caption {
      width: 125px;
      flex-shrink: 0;
      margin-left: 30px;
      @include tablet {
        width: 100%;
        margin-top: 25px;
        margin-left: 0;
      }
    }
    &__name {
      margin-bottom: 10px;
      a {
        font-weight: 700;
      }
    }
    &__used {
      &__item {
        display: inline-block;
        margin: 3px 3px 3px 0;
        font-family: 'Inconsolata', monospace;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 2px 7px;
        border-radius: 3px;
        color: $blue;
        border: 1px solid $blue;
        background: transparent;
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
    p {
      font-size: 0.85rem;
      line-height: 1.3;
    }
  }
}
</style>
