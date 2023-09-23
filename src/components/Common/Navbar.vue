<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Film App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link texts" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link texts" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link texts" to="/popular"
              >Popular</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link texts" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link texts" href="#">Link</a>
          </li>
        </ul>
        <div class="btn-group dropstart">
          <button
            type="button"
            class="btn btn-success dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Actions
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">Action</button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.btn-success {
  background-color: #4caf50; /* Yeşil renkli arka plan */
  color: #fff; /* Beyaz metin rengi */
  border-color: #4caf50; /* Kenarlık rengi */
}
.btn-success:hover {
  background-color: #45a049; /* Parlak yeşil renk üzerine gelince */
  border-color: #45a049; /* Parlak kenarlık rengi üzerine gelince */
}
.texts {
  color: white;
}
.texts:hover {
  color: #4caf50;
}

.texts:focus {
  color: #4caf50;
}
</style>
