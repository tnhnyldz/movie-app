<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container">
      <a class="navbar-brand text-warning" href="#">Movie Jar</a>
      <button class="btn btn-outline-dark btn-sm me-4 ps-3 pe-3 border border-secondary" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="fa fa-bars"
          style="color: white"></i></button>
      <div class="input-group input-group-sm">
        <input type="text" class="form-control" placeholder="Search something..." aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <button class="btn btn-warning" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
      </div>
      <div class="separator"></div>
      <button type="button" class="btn btn-sm btn-dark me-2 ps-3 pe-3">Register</button>
      <button type="button" class="btn btn-sm btn-dark ps-4 pe-4"> Login</button>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg bg-black">
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
  </nav> -->
  <div class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header container">
      <h5 class="offcanvas-title text-warning navbar-menu-brand" id="offcanvasTopLabel">Movie Jar Menu</h5>
      <button type="button" class="btn-close  bg-warning" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body container">
      <div class="row">
        <div class="col-sm col-1">
          <div class="col-1-header"><i class="fa fa-film"></i> This is Header for col-1</div>
        </div>
        <div class="col-sm col-2">
          <div class="col-2-header"><i class="fa fa-tv"></i> <router-link class="nav-link texts" to="/popular">Popular</router-link></div>

        </div>
        <div class="col-sm col-3">
          <div class="col-3-header d-flex justify-content-center"><i class="fa fa-user" style="font-size:20px;"></i>
            <p class="ms-2">This is Header for col-3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.offcanvas {
  font-family: 'Roboto', sans-serif;
}

.offcanvas-header {
  font-family: 'Roboto', sans-serif;
}

.offcanvas-body {
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: red;
}

.navbar-brand {
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
}

.navbar-menu-brand {
  font-size: 26px;
  font-family: 'Roboto', sans-serif;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: #555;
  margin: 0 10px;
}

















.btn-success {
  background-color: #4caf50;
  /* Yeşil renkli arka plan */
  color: #fff;
  /* Beyaz metin rengi */
  border-color: #4caf50;
  /* Kenarlık rengi */
}


.btn-success:hover {
  background-color: #45a049;
  border-color: #45a049;

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

.navbar {
  height: 5vh;
}
</style>
