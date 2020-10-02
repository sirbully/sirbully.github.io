<template>
  <div id="__site" :class="{ night: isChecked }">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: null
    }
  },
  computed: {
    isChecked() {
      return this.$store.state.toggled.isChecked
    }
  },
  mounted() {
    this.site = document.getElementById('__site')
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

#__site {
  &.night {
    background-color: $night;
    color: $slate;
    ::selection {
      color: $black;
      background: $yellow;
    }
    a,
    strong,
    .intro,
    .skills .skillz__category__label,
    .experience .job__time,
    .footer__copyright,
    .status {
      color: $off-white;
    }
    .section__content .underline-link:after {
      background: $off-white;
    }
  }
}
</style>
