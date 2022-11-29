<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "@/examples/Header.vue";

//components
import TodoList from "./Components/TodoList.vue";
import TodoCard from "./Components/TodoCard.vue";
import Emails from "./Components/Emails.vue";
import Messages from "./Components/Messages.vue";
import MediaPlayer from "./Components/MediaPlayer.vue";

// images
import VRBackground from "@/assets/img/vr-bg.jpg";
import image1 from "@/assets/img/team-1.jpg";
import image2 from "@/assets/img/team-2.jpg";
import image3 from "@/assets/img/team-3.jpg";
import image4 from "@/assets/img/team-4.jpg";

//asset
import setTooltip from "@/assets/js/tooltip.js";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

//hooks
onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <Header
    image="https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    mask="mask bg-gradient-dark opacity-6"
    :action="{
      color: 'bg-gradient-dark',
      label: 'Buy Now',
    }"
  >
    <div
      class="page-header min-vh-100"
      :style="{ backgroundImage: `url(${VRBackground})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row pt-5">
          <div
            class="col-lg-1 col-md-1 pt-5 pt-lg-0 ms-lg-5 text-center ms-lg-auto"
          >
            <a
              href="javascript:;"
              class="avatar avatar-lg border-0 p-1"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="My Profile"
            >
              <img
                class="border-radius-lg"
                alt="Image placeholder"
                src="@/assets/img/team-1.jpg"
              />
            </a>
            <button
              class="btn btn-white border-radius-lg p-2 mt-n4 mt-md-2 me-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Home"
            >
              <i class="material-icons p-2">home</i>
            </button>
            <button
              class="btn btn-white border-radius-lg p-2 mt-n4 mt-md-0 me-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Search"
            >
              <i class="material-icons p-2">search</i>
            </button>
            <button
              class="btn btn-white border-radius-lg p-2 mt-n4 mt-md-0 me-2"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Minimize"
            >
              <i class="material-icons p-2">more_horiz</i>
            </button>
          </div>
          <div class="col-lg-8 col-md-11 ps-md-5 mb-5 mb-md-0 me-lg-auto">
            <div class="d-flex">
              <div class="me-auto">
                <h1 class="display-1 font-weight-bold mt-n3 mb-0 text-white">
                  28°C
                </h1>
                <h6 class="text-uppercase mb-0 ms-1 text-white">Cloudy</h6>
              </div>
              <div class="ms-auto">
                <img
                  class="w-50 float-end mt-n6 mt-lg-n4"
                  src="@/assets/img/small-logos/icon-sun-cloud.png"
                  alt="image sun"
                />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-4 col-md-6">
                <TodoList
                  :todos="[
                    {
                      time: '08:00',
                      title: 'Synk up with Mark',
                      platform: 'Hangouts',
                    },
                    {
                      time: '09:30',
                      title: 'Gym',
                      platform: 'World Class',
                    },
                    {
                      time: '11:00',
                      title: 'Design Review',
                      platform: 'Zoom',
                    },
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 mt-4 mt-sm-0">
                <TodoCard :todos="['Shopping', 'Meeting']" />
                <Emails />
              </div>
              <div class="col-lg-4 col-md-12 mt-4 mt-lg-0">
                <MediaPlayer />
                <messages
                  :messages="[
                    {
                      route: '/',
                      tooltip: '2 New Messages',
                      image: { url: image1, alt: 'Image Placeholder' },
                    },
                    {
                      route: '/',
                      tooltip: '1 New Messages',
                      image: { url: image2, alt: 'Image Placeholder' },
                    },
                    {
                      route: '/',
                      tooltip: '13 New Messages',
                      image: { url: image3, alt: 'Image Placeholder' },
                    },
                    {
                      route: '/',
                      tooltip: '7 New Messages',
                      image: { url: image4, alt: 'Image Placeholder' },
                    },
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <DefaultFooter />
</template>
