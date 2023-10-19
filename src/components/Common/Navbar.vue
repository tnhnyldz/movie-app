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
  min-height: 660px;
}

.offcanvas-header {
  font-family: "Roboto", sans-serif;
}

.offcanvas-body {
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1000' height='500' preserveAspectRatio='none' viewBox='0 0 1000 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2209%26quot%3b)' fill='none'%3e%3cg transform='translate(-60%2c 250)' stroke-linecap='round'%3e%3cpath d='M82 114.83 L82 385.17' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M126 83.19 L126 416.81' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M170 173.1 L170 326.9' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M214 97.68 L214 402.32' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M258 175.42 L258 324.58' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M302 222.92 L302 277.08' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M346 117.54 L346 382.46' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M390 160.09 L390 339.91' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M434 115.95 L434 384.05' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M478 164.08 L478 335.92' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M522 167.12 L522 332.88' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M566 195.93 L566 304.07' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M610 131.64 L610 368.36' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M654 84.71 L654 415.29' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M698 182.21 L698 317.79' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M742 65.32 L742 434.68' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M786 212.91 L786 287.08' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M830 200.67 L830 299.33' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M874 74.78 L874 425.22' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M918 192.51 L918 307.49' stroke-width='33' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2209'%3e%3crect width='1000' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");  */
  /* 
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1000' height='500' preserveAspectRatio='none' viewBox='0 0 1000 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1280%26quot%3b)' fill='none'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1281%26quot%3b)'%3e%3cpath d='M475 525L525 475L525 425M475 575L475 525L475 475L475 425' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M462.5 425 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM512.5 425 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M575 575L575 525L575 475L575 425' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M562.5 425 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M425 575L425 525L425 475' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M412.5 475 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M625 575L625 525' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M612.5 525 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M325 425L275 375M375 575L375 525L375 475L325 425L325 375' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M312.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM262.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M325 525L325 475M325 575L325 525L275 475' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M262.5 475 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM312.5 475 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M725 425L775 375M725 525L675 475L675 425L675 375M725 575L725 525L725 475L725 425L725 375' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M712.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM762.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM662.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M225 475L175 425L175 375M275 575L275 525L225 475L225 425L225 375' stroke='rgba(255%2c 193%2c 7%2c 1)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M212.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM162.5 375 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1280'%3e%3crect width='1000' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cmask id='SvgjsMask1281'%3e%3crect width='1000' height='500' fill='white'%3e%3c/rect%3e%3cpath d='M468.75 425 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM518.75 425 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M568.75 425 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M418.75 475 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M618.75 525 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M318.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM268.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M268.75 475 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM318.75 475 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M718.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM768.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM668.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M218.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM168.75 375 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1086%26quot%3b)' fill='none'%3e%3cg transform='translate(-120%2c 500)' stroke-linecap='round'%3e%3cpath d='M325 336.74 L325 449.24' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M325 505.49 L325 663.26' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M375 267.05 L375 492.05' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M375 548.3 L375 585.8' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M375 642.05 L375 732.95' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M425 226.3 L425 488.8' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M425 545.05 L425 773.7' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M475 453.54 L475 546.46' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M525 323.07 L525 676.93' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M575 355.5 L575 644.5' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M625 170.22 L625 582.72' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M625 638.97 L625 676.47' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M625 732.72 L625 829.78' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M675 465.02 L675 534.98' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M725 333.09 L725 408.09' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M725 464.34 L725 539.3399999999999' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M725 595.5899999999999 L725 666.91' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M775 482.69 L775 517.31' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M825 183.05 L825 333.05' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M825 389.3 L825 426.8' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M825 483.05 L825 816.95' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M875 334.38 L875 665.63' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M925 363.82 L925 401.32' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M925 457.57 L925 636.17' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M975 380.26 L975 417.76' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M975 474.01 L975 511.51' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M975 567.76 L975 619.74' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1025 480.64 L1025 519.36' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1075 174.85 L1075 474.85' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1075 531.1 L1075 681.1' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1075 737.35 L1075 825.15' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1125 213.36 L1125 550.86' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1125 607.11 L1125 682.11' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1125 738.36 L1125 786.64' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1175 451.55 L1175 548.45' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1225 297.61 L1225 447.61' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1225 503.86 L1225 702.39' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1275 232.26 L1275 419.76' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1275 476.01 L1275 551.01' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1275 607.26 L1275 767.74' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1325 404.68 L1325 442.18' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1325 498.43 L1325 595.32' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1375 326.26 L1375 476.26' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1375 532.51 L1375 673.74' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1425 281.13 L1425 718.87' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1475 237.11 L1475 762.89' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1525 171.21 L1525 433.71000000000004' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1525 489.96000000000004 L1525 564.96' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1525 621.21 L1525 828.79' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1575 206.21 L1575 793.79' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1625 401.19 L1625 438.69' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1625 494.94 L1625 598.82' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1675 243.74 L1675 281.24' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1675 337.49 L1675 487.49' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1675 543.74 L1675 756.26' stroke-width='37.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1086'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

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
