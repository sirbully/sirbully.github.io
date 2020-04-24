export const state = () => ({
  isToggled: false,
  isChecked: false
})

export const mutations = {
  toggle(state) {
    state.isToggled = !state.isToggled
    state.isChecked = !state.isChecked
  }
}
