import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      AppLoaded: false,
      Category1: [],
      Category2: [],
      Category3: [],
      Category4: [],
      Alert: false
    }
  },
  mutations: {
    SetPhotos(state, photos) {
      state.Photos = photos
    },
    PushPhoto(state, photo) {
      state['Category' + photo.albumId].push(photo)
    },
    LoadApp(state) {
      state.AppLoaded = true
    },
    SetAlert(state, alert) {
      state.Alert = alert
    }
  },
  actions: {
    async LoadPhotos({commit}) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=200', {
          method: 'GET',
        })
        const photos = await response.json()

        photos.forEach((ph) => {
          if (ph.id < 50 * (ph.albumId - 1) + 7) commit('PushPhoto', ph)
        })
        commit('SetAlert', false)
        commit('SetPhotos', photos)
        commit('LoadApp')
      } catch (e) {
        commit('SetAlert', true)
      }
    }
  },
  getters: {

  }
})
