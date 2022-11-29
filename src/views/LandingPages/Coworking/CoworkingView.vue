<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

//Vue Material Kit 2 Pro components
import MaterialButton from "../../../components/MaterialButton.vue";

//sections
import Information from "./Sections/CoworkingInformation.vue";
import Testimonials from "./Sections/CoworkingTestimonials.vue";
import AboutUs from "./Sections/CoworkingAboutUs.vue";
import Places from "./Sections/CoworkingPlaces.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("coworking");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("coworking");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header
    image="https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    title="Your Perfect Place for Work"
    :description="{
      text: 'The time is now for it be okay to be great. People in this world shun people for being nice.',
      class: 'pe-md-5 me-md-5 opacity-8',
    }"
    mask="mask bg-gradient-dark opacity-5"
  >
    <div class="buttons">
      <MaterialButton variant="gradient" color="success" class="mt-4"
        >Get Started</MaterialButton
      >
      <MaterialButton color="none" class="mt-4 text-white shadow-none"
        >Read more</MaterialButton
      >
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Information />
    <Testimonials />
    <AboutUs />
    <Places />
    <div class="container">
      <div
        class="my-10 py-5 bg-gradient-dark position-relative border-radius-xl"
        :style="{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
        }"
        loading="lazy"
      >
        <div class="container position-relative z-index-2">
          <div class="row">
            <div class="col-lg-5 col-md-8 m-auto text-start">
              <h5 class="text-white mb-lg-0 mb-5">
                For being a bright color. For standing out. But the time is now
                to be okay to be the greatest you.
              </h5>
            </div>
            <div class="col-lg-6 m-auto">
              <div class="row">
                <div class="col-sm-4 col-6 ps-sm-0 ms-auto">
                  <MaterialButton
                    class="mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto d-block"
                    variant="gradient"
                    color="warning"
                    fullWidth
                    >Start Now</MaterialButton
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
