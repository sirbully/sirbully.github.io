<template>
  <div class="toggler-wrapper">
    <div
      class="sun"
      :style="{
        background: `url(${currentSun}) no-repeat center`
      }"
    ></div>
    <div class="toggle-wrapper">
      <input
        id="cbx"
        type="checkbox"
        :checked="$store.state.toggled.isChecked"
      />
      <label id="toggler" for="switch" @click="toggle">
        Toggle
      </label>
    </div>
    <div
      class="moon"
      :style="{
        background: `url(${currentMoon}) no-repeat center`,
        backgroundSize: '100%'
      }"
    ></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import DarkMoon from '~assets/img/toggler/moon.svg'
import LightMoon from '~assets/img/toggler/moon-white.svg'
import DarkSun from '~assets/img/toggler/sun.svg'
import LightSun from '~assets/img/toggler/sun-white.svg'

export default {
  computed: {
    currentSun() {
      return this.$store.state.toggled.isChecked ? LightSun : DarkSun
    },
    currentMoon() {
      return this.$store.state.toggled.isChecked ? LightMoon : DarkMoon
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'toggled/toggle'
    })
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles.scss';

.toggler-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 30px;
  @include mobile {
    top: 10px;
    right: 20px;
  }
  .sun,
  .moon {
    width: 17px;
    height: 17px;
    background-size: 100% !important;
  }
  .toggle-wrapper {
    margin: 10px;
    #cbx {
      height: 0;
      width: 0;
      visibility: hidden;
      position: absolute;
      &:checked + label {
        background: $blue;
      }
      &:checked + label:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 45px;
      height: 25px;
      background: grey;
      display: block;
      border-radius: 100px;
      position: relative;
      &:after {
        @include transition;
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 19px;
        height: 19px;
        background: #fff;
        border-radius: 100%;
      }
    }
  }
}
</style>
