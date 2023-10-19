<template>
  <nav class="navbar navbar-expand-lg bg-black">
    <div class="container">
      <router-link class="navbar-brand text-warning" to="/"
        >Movie Jar</router-link
      >
      <button
        class="btn btn-sm btn-outline-dark me-1 ps-3 pe-3 border border-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <i class="fa fa-bars" style="color: white"></i>
      </button>
      <div class="separator"></div>
      <div class="input-group input-group-sm ms-1 me-1">
        <button
          class="btn btn-sm btn-dark ps-3 pe-3 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#"
              ><i class="fa fa-tv mt-1 icon-yellow" style="font-size: 26px"></i>
              Action</a
            >
          </li>
          <li><a class="dropdown-item" href="#">Action two</a></li>
          <li><a class="dropdown-item" href="#">Action three</a></li>
        </ul>
        <input
          type="text"
          class="form-control"
          placeholder="Search something..."
          aria-label="Text input with dropdown button"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-warning" type="button" id="button-addon2">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="separator"></div>
      <button type="button" class="btn btn-sm btn-dark ms-1 me-2 ps-3 pe-3">
        Register
      </button>
      <button type="button" class="btn btn-sm btn-dark ps-4 pe-4">Login</button>
    </div>
  </nav>
  <!-- offcanvas  -->
  <div
    class="offcanvas offcanvas-top text-bg-dark"
    tabindex="-1"
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
  >
    <div class="offcanvas-header container">
      <div class="col-2 router-link-left">
        <h5
          class="offcanvas-title text-warning navbar-menu-brand roboto"
          id="offcanvasTopLabel"
        >
          Movie Jar Menu
        </h5>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn-close bg-warning"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
    </div>

    <div class="offcanvas-body container">
      <div class="row">
        <div class="col-sm col-1">
          <div class="col-1-header d-flex justify-content-start">
            <i
              class="fa fa-film mt-1 ms-1 icon-yellow"
              style="font-size: 26px"
            ></i>
            <p class="roboto menu-text-header ms-2">
              <router-link class="nav-link" to="/popular">Movies</router-link>
            </p>
          </div>
          <div class="col-3-body d-flex flex-column align-items-center">
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/now-playing"
                ><i class="fa fa-arrow-right"></i> Now Playing</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Popular</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Top Rated</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Upcoming</router-link
              >
            </p>
          </div>
        </div>
        <div class="col-sm col-2">
          <div class="col-2-header d-flex justify-content-start">
            <i class="fa fa-tv mt-1 icon-yellow" style="font-size: 26px"></i>
            <p class="roboto menu-text-header ms-2">
              <router-link class="nav-link" to="/popular"
                >TV Series</router-link
              >
            </p>
          </div>

          <div class="col-3-body d-flex flex-column align-items-center">
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Airing Today</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> On The Air</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Popular</router-link
              >
            </p>
            <p class="roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Top Rated</router-link
              >
            </p>
          </div>
        </div>
        <div class="col-sm col-3">
          <div class="col-3-header d-flex justify-content-start">
            <i
              class="fa fa-award icon-yellow mt-1 ms-3"
              style="font-size: 26px"
            ></i>
            <p class="roboto menu-text-header ms-2">
              <router-link class="nav-link" to="/popular">Celebs</router-link>
            </p>
          </div>
          <div class="col-3-body d-flex flex-column align-items-center">
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular">
                <i class="fa fa-arrow-right"></i> Born Today</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Popular</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular">
                <i class="fa fa-arrow-right"></i> Movie Credits</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> TV Credits</router-link
              >
            </p>
          </div>
        </div>
        <div class="col-sm col-3">
          <div class="col-3-header d-flex justify-content-start">
            <i
              class="fa fa-fire mt-1 ms-3 icon-yellow"
              style="font-size: 26px"
            ></i>
            <p class="roboto menu-text-header ms-2">
              <router-link class="nav-link" to="/popular">Trending</router-link>
            </p>
          </div>
          <div class="col-3-body d-flex flex-column align-items-center">
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular">
                <i class="fa fa-arrow-right"></i> All</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> Movies</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular">
                <i class="fa fa-arrow-right"></i> People</router-link
              >
            </p>
            <p class="ms-3 roboto body-item menu-text">
              <router-link class="nav-link router-link-left" to="/popular"
                ><i class="fa fa-arrow-right"></i> TV Shows</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- offcanvas  -->
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import "@/assets/css/app-global.css";

.menu-text {
  font-size: 22px;
  color: white;
}

.body-item {
  width: 95%;
}

.menu-text-header {
  font-size: 24px;
  font-weight: bold;
}

.fa-arrow-right {
  font-size: 16px;
}

.router-link-left {
  text-align: left;
}

.offcanvas {
  min-height: 650px;
  background-color: black;
}

.offcanvas-header {
  font-family: "Roboto", sans-serif;
}

.offcanvas-body {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1000' height='500' preserveAspectRatio='none' viewBox='0 0 1000 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1910%26quot%3b)' fill='none'%3e%3cg transform='translate(-60%2c 250)' stroke-linecap='round'%3e%3cpath d='M126 229.5 L126 270.5' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M170 130.2 L170 369.8' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M214 85.18 L214 414.82' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M258 190.46 L258 309.54' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M302 95.64 L302 404.36' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M346 190.88 L346 309.13' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M390 91.83 L390 408.17' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M434 97.37 L434 402.63' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M478 113.78 L478 386.22' stroke-width='33' stroke='rgba(139%2c 139%2c 139%2c 1)'%3e%3c/path%3e%3cpath d='M522 144.36 L522 355.64' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M566 139.89 L566 360.11' stroke-width='33' stroke='rgba(139%2c 139%2c 139%2c 1)'%3e%3c/path%3e%3cpath d='M610 176.64 L610 323.36' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M654 174.86 L654 325.14' stroke-width='33' stroke='rgba(139%2c 139%2c 139%2c 1)'%3e%3c/path%3e%3cpath d='M698 86.91 L698 413.09' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M742 177.42 L742 322.58' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M786 134.47 L786 365.53' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M830 85.02 L830 414.98' stroke-width='33' stroke='rgba(139%2c 139%2c 139%2c 1)'%3e%3c/path%3e%3cpath d='M874 128.57 L874 371.43' stroke-width='33' stroke='rgba(220%2c 53%2c 69%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1910'%3e%3crect width='1000' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Arka plan resmini kapsaması için */
  background-position: center bottom; /* Arka plan resminin konumu */
  background-repeat: no-repeat; /* Tekrarlamayı önlemek için */
  margin-top: 2%;
}

.navbar-brand {
  font-size: 24px;
  font-family: "Roboto", sans-serif;
}

.navbar-menu-brand {
  font-size: 26px;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: #555;
  margin: 0 10px;
}

.navbar {
  height: 5vh;
}
</style>
