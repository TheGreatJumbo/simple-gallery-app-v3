<template>
  <img class="card-img img-fluid" :src="source" alt="">
  <div class="card-img-overlay" @mouseenter="ShowBtn" @mouseleave="HideBtn">
    <div class="backdrop d-flex justify-content-center align-items-center" v-if="DetailsBtn">
      <button class="btn btn-light" @click="$router.push(`/details/${id}`)">Подробнее</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Image",
  props: {
    source: String,
    id: Number
  },
  setup() {
    const DetailsBtn = ref(false)
    const ShowBtn = () => {
      DetailsBtn.value = true
    }
    const HideBtn = () => {
      DetailsBtn.value = false
    }
    return {
      DetailsBtn,
      ShowBtn, HideBtn
    }
  }
}
</script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .35);
}
</style>