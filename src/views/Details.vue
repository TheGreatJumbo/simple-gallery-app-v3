<template>
  <Loader v-if="Loading"/>
  <div v-else-if="Photo" class="container">
    <h1 class="card-title text-center">{{Photo.title}}</h1>
    <div class="card">
      <img class="img-thumbnail" :src="Photo.url" alt="">
      <h3 class="card-title text-center">Категория: {{Photo.albumId}} Идентификатор: {{Photo.id}}</h3>
      <h3 class="card-title text-center">ссылка: <a :href="Photo.url">{{Photo.url}}</a></h3>
    </div>
  </div>
  <div v-else class="card">
    <h1 class="card-title text-center">В галерее отсутствует изображение с идентификатором {{PhotoID}}</h1>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import Loader from "../components/Loader";

export default {
  name: "Details",
  components: {Loader},
  setup() {
    const Store = useStore()
    const Route = useRoute()

    const Loading = ref(true)
    const PhotoID = Route.params.id
    const Category = Math.trunc(parseInt(PhotoID, 10) / 50) + 1
    const Photo = computed(() => { return Store.state[`Category${Category}`]?.find(ph => ph.id == PhotoID)})

    onMounted(async () => {
      if (!Store.state.AppLoaded) {
        await Store.dispatch('LoadPhotos')
        setTimeout(() => Loading.value = false, 500)
      } else Loading.value = false
    })

    return {
      Loading, Photo, PhotoID
    }
  }
}
</script>

<style scoped>

</style>