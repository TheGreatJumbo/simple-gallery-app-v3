<template>
  <Loader v-if="Loading"/>
  <Alert v-else-if="alert"/>
  <div v-else class="container">
    <h1 class="text-center">Галерея</h1>
    <hr>
    <div class="row">
      <div class="col-md-6 col-lg-3" v-for="i in [1,2,3,4]">
        <h3 class="card-title text-center">Категория {{i}}</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="Photo in Photos[`${i}`]">
            <Image :source="Photo.url" :id="Photo.id"/>
          </li>
        </ul>
      </div>
    </div>
    <small>источник: <a href="http://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a></small>
  </div>
</template>

<script>


import {useStore} from "vuex";
import {computed, onMounted, reactive, ref} from "vue";
import Loader from "../components/Loader";
import Image from "../components/Image";
import Alert from "../components/Alert";

export default {
  name: 'Home',
  components: {Alert, Image, Loader},
  setup() {
    const Store = useStore()

    const Loading = ref(true)
    const alert = computed(() => Store.state.Alert)
    const Photos = reactive({
      1: computed(() => Store.state.Category1),
      2: computed(() => Store.state.Category2),
      3: computed(() => Store.state.Category3),
      4: computed(() => Store.state.Category4)
    })

    onMounted(async () => {
      if (!Store.state.AppLoaded) {
        await Store.dispatch('LoadPhotos')
        setTimeout(() => Loading.value = false, 500)
      } else Loading.value = false
    })

    return {
      Loading, Photos, alert
    }
  }
}
</script>
