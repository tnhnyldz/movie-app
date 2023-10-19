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
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1319%26quot%3b)' fill='none'%3e%3cg transform='translate(-140%2c 500)' stroke-linecap='round'%3e%3cpath d='M280 407.97 L280 592.03' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M370 470.49 L370 529.51' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M460 251.87 L460 521.87' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M460 623.12 L460 748.13' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M550 280.71000000000004 L550 348.21000000000004' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M550 449.46000000000004 L550 516.96' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M550 618.21 L550 719.29' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M640 397.69 L640 602.32' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M730 192.86 L730 530.36' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M730 631.61 L730 807.14' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M820 188.26 L820 390.76' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M820 492.01 L820 559.51' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M820 660.76 L820 811.74' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M910 441.12 L910 558.88' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1000 373.38 L1000 626.63' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1090 374.48 L1090 625.52' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1180 146.04000000000002 L1180 348.54' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1180 449.79 L1180 584.79' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1180 686.04 L1180 853.96' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1270 333.53 L1270 401.03' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1270 502.28 L1270 666.47' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1360 223.43 L1360 493.43' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1360 594.6800000000001 L1360 776.57' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1450 275.15 L1450 724.85' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1540 185.43 L1540 387.93' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1540 489.18 L1540 556.6800000000001' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1540 657.9300000000001 L1540 814.58' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1630 188.23 L1630 811.77' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1720 394.63 L1720 605.37' stroke-width='67.5' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1319'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */

 /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1608%26quot%3b)' fill='none'%3e%3cg transform='translate(-120%2c 500)' stroke-linecap='round'%3e%3cpath d='M200 278.47 L200 428.47' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M200 540.97 L200 721.53' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M300 320.86 L300 395.86' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M300 508.36 L300 679.14' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M400 194.72 L400 805.28' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M500 386.75 L500 613.25' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M600 234.63 L600 384.63' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M600 497.13 L600 572.13' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M600 684.63 L600 765.37' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M700 475.62 L700 524.38' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M800 278.39 L800 353.39' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M800 465.89 L800 721.61' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M900 350.12 L900 649.88' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1000 485.64 L1000 514.36' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1100 355.4 L1100 644.6' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1200 388.78 L1200 611.22' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1300 425.22 L1300 574.78' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1400 210.05 L1400 789.95' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1500 234.71 L1500 309.71000000000004' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1500 422.21000000000004 L1500 572.21' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1500 684.71 L1500 765.29' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1600 283.53 L1600 716.48' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1700 380.63 L1700 619.38' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1800 381.62 L1800 618.38' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1608'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */

background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1617%26quot%3b)' fill='none'%3e%3cg transform='translate(-140%2c 500)' stroke-linecap='round'%3e%3cpath d='M250 445.47 L250 554.53' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M350 324.03 L350 399.03' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M350 511.53 L350 675.97' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M450 268.58000000000004 L450 418.58000000000004' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M450 531.08 L450 731.41' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M550 150.03 L550 849.97' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M650 380.61 L650 619.39' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M750 155.82 L750 455.82' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M750 568.3199999999999 L750 844.18' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M850 274.56 L850 349.56' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M850 462.06 L850 537.06' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M850 649.56 L850 725.44' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M950 268.24 L950 343.24' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M950 455.74 L950 530.74' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M950 643.24 L950 731.76' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1050 318.79 L1050 393.79' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1050 506.29 L1050 681.21' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1150 398.37 L1150 601.63' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1250 147.87 L1250 297.87' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1250 410.37 L1250 852.13' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1350 211.48 L1350 361.48' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1350 473.98 L1350 548.98' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1350 661.48 L1350 788.52' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1450 427.31 L1450 572.68' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1550 310.31 L1550 460.31' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1550 572.81 L1550 689.68' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1650 323.87 L1650 398.87' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1650 511.37 L1650 676.13' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3cpath d='M1750 471.47 L1750 528.53' stroke-width='75' stroke='rgba(255%2c 193%2c 7%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1617'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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
