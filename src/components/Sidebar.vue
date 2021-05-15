<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Меню</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" style="padding: 0">
      <ul class="list-group" style="list-style-type: none">
        <li>
          <div class="avatar-block">
            <img class="card-img img-fluid avatar" src="https://avatars.githubusercontent.com/u/45094721?v=4" alt="">
            <div class="avatar-data">
              <p>Антон<br>Почта: hasenpostxii@gmail.com</p>
            </div>
          </div>
        </li>
        <li><router-link class="list-group-item" to="/" data-bs-dismiss="offcanvas" aria-label="Close">Галерея</router-link></li>
        <li><router-link class="list-group-item" to="/about" data-bs-dismiss="offcanvas" aria-label="Close">Обо мне</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Sidebar"
}
</script>

<style scoped>
.avatar-block {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.avatar-data {
  width: 100%;
  display: flex;
  align-items: center;
}
.avatar {
  padding: 10px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
</style>