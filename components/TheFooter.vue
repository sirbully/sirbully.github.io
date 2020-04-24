<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="top">
        <span>Design Inspiration from</span>
      </div>
      <div class="bottom">
        <span
          ><a
            href="https://github.com/bchiang7"
            target="_blank"
            class="underline-link"
            >Brittany Chiang</a
          ></span
        >
        <img class="emoji" :src="RockOn" alt="emoji" />
      </div>
    </div>
    <div class="footer__links">
      <a
        v-for="link in socialLinks"
        :key="link.title"
        :href="link.url"
        :title="link.title"
        target="_blank"
      >
        <span class="text">{{ link.title }}</span>
        <img :src="link.logo" :alt="link.title" />
      </a>
    </div>
  </footer>
</template>

<script>
import RockOn from '~assets/img/icons/rockon.png'
import EmailIcon from '~assets/img/social/email.svg'
import GithubIcon from '~assets/img/social/github.svg'
import InstagramIcon from '~assets/img/social/instagram.svg'
import LinkedinIcon from '~assets/img/social/linkedin.svg'

export default {
  data() {
    return {
      RockOn,
      socialLinks: [
        {
          url: 'mailto:krizzabullecer@gmail.com',
          title: 'Email',
          logo: EmailIcon
        },
        {
          url: 'https://www.instagram.com/iamkindasmol',
          title: 'Instagram',
          logo: InstagramIcon
        },
        {
          url: 'https://github.com/sirbully',
          title: 'Github',
          logo: GithubIcon
        },
        {
          url: 'https://www.linkedin.com/in/knabullecer',
          title: 'LinkedIn',
          logo: LinkedinIcon
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

.footer {
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include desktop {
    padding: 50px;
  }
  @include weird-medium {
    display: block;
  }
  @include mobile {
    padding: 50px 30px;
  }
  &__copyright {
    font-weight: 700;
    width: 200px;
    @include weird-medium {
      width: auto;
      text-align: center;
      margin-bottom: 25px;
    }
    .top,
    .bottom {
      @include weird-medium {
        display: inline-block;
      }
      @include mobile {
        display: block;
      }
    }
    .underline-link {
      position: relative;
      display: inline-block;
      &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background: $black;
        content: '';
        opacity: 0;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        transform: translateY(-5px);
      }
      &:hover,
      &:focus {
        &:after {
          height: 2px;
          border-radius: 3px;
          opacity: 1;
          transform: translateY(-2px);
        }
      }
    }
    .emoji {
      width: 20px;
      height: 20px;
      margin: 0 3px;
      vertical-align: text-bottom;
    }
  }
  &__links {
    @include weird-medium {
      display: flex;
      justify-content: center;
    }
    a {
      position: relative;
      display: inline-block;
      color: $blue !important;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 15px;
      outline: none;
      @include desktop {
        margin: 0 10px;
      }
      &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background: $blue;
        content: '';
        opacity: 0;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        transform: translateY(-5px);
        @include little-desktop {
          display: none;
        }
      }
      &:hover:after,
      &:focus:after {
        height: 2px;
        border-radius: 3px;
        opacity: 1;
        transform: translateY(0px);
      }
      .text {
        font-size: 0.9rem;
        display: inline;
        letter-spacing: 1px;
        @include little-desktop {
          display: none;
        }
      }
    }
    img {
      display: none;
      width: 22px;
      @include little-desktop {
        display: inline-block;
      }
    }
  }
}
</style>
