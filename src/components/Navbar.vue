<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <Sidebar/>
</template>

<script>
import Sidebar from "./Sidebar";
export default {
name: "Navbar",
  components: {Sidebar}
}
</script>

<style scoped>

</style>