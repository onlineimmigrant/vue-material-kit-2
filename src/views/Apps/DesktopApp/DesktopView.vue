<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//sections
import Banner from "./Sections/DesktopBanner.vue";
import Information from "./Sections/DesktopInformation.vue";
import Features from "./Sections/DesktopFeatures.vue";
import Testimonials from "./Sections/DektopTestimonials.vue";
import Pricing from "./Sections/DesktopPricing.vue";

//js
import setNavPills from "@/assets/js/nav-pills.js";

const body = document.getElementsByTagName("body")[0];

//hooks
onMounted(() => {
  setNavPills();
  body.classList.add("desktop-app");
});
onUnmounted(() => {
  body.classList.remove("desktop-app");
});
</script>
<template>
  <DefaultNavbar transparent />
  <Banner />
  <Information />
  <Features />
  <Testimonials />
  <Pricing />
  <DefaultFooter />
</template>
