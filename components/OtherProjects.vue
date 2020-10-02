<template>
  <section id="other-projects" class="section">
    <div class="section__title">Other Projects</div>
    <div class="section__content">
      <div v-for="p in proyectos" :key="p.title" class="project">
        <div class="project__name">
          <a
            :href="p.link"
            target="_blank"
            :style="{ fontSize: '1.25rem' }"
            :class="{ 'arrow-link': p.link }"
          >
            {{ p.title }}
          </a>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      proyectos: [
        // {
        //   title: '',
        //   desc: '',
        //   link: '',
        //   tools: []
        // }
        {
          title: 'Screen Recorder',
          desc:
            'I always record my websites to create tutorial videos for my clients. I previously used a third-party app but I disliked the watermark on the videos after recording. Which is why I decided to create my own free screen recorder. Many thanks to <a href="https://fireship.io/" target="_blank" class="underline-link">fireship.io</a>.',
          link: 'https://github.com/sirbully/electron-screen-recorder',
          tools: [
            'Git@Github',
            'HTML',
            'CSS',
            'Bulma',
            'Javascript',
            'NodeJS',
            'Electron'
          ]
        },
        {
          title: 'Gigs Tracker',
          desc:
            "I created a full-stack app for a client in Upwork. The client wanted to have a centralized webpage for their gigs. Functionalities included CRUD operations for gigs and the client's band of musicians had the option to accept or reject the assigned gig. Client requested to use the same hosting they used for their personal website so I decided to deploy the website on a subdomain.",
          link: 'http://gigs.elliottrooney.co.uk',
          tools: [
            'Git@Github',
            'HTML',
            'CSS',
            'Bootstrap',
            'Javascript',
            'jQuery',
            'PHP',
            'CodeIgniter',
            'cPanel'
          ]
        },
        {
          title: 'Job Portal',
          desc:
            'I was hired to complete a job portal website by a friend. My task was to integrate the API to the client side. Integrated Employee and Employer APIs.',
          link: 'https://transpayency.net',
          tools: [
            'Git@Bitbucket',
            'HTML',
            'CSS',
            'Javascript',
            'jQuery',
            'PHP',
            'Laravel',
            'REST API'
          ]
        },
        {
          title: 'Pink Pearl Romance',
          desc:
            "A book club website I created for a client at OnlineJobs.ph. The main goal of the website is to introduce new romance books to the client's newsletter subscribers. The client specifcally requested for a custom WordPress theme on an existing web hosting provider.",
          link: 'http://pinkpearlromance.com/',
          tools: ['HTML', 'CSS', 'PHP', 'WordPress', 'cPanel']
        },
        {
          title: 'iKARLY Web App',
          desc:
            'Our submission for the all-female hackathon by Accenture. The hackathon was held during Women\'s month and the theme was to create an app that would make women more confident in themselves.<br /><br /><a href="https://www.instagram.com/p/BzoqA1Thi06/" target="_blank"><small>🏆Won Best Beginner Hack at Accenture\'s DevelopHER 2019!🏆</small></a>',
          link: 'https://github.com/sirbully/DevelopHER-2019-Team-iKARLy',
          tools: [
            'Git@Github',
            'HTML',
            'CSS',
            'Bootstrap',
            'Javascript',
            'Vue',
            'PHP',
            'CodeIgniter'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

#other-projects {
  .project {
    max-width: 600px;
    margin-bottom: 50px;
    &__name {
      margin-bottom: 10px;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 20px;
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
  }
}
</style>
