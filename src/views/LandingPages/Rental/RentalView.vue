<script setup>
import { onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "@/examples/Header.vue";

//sections
import Search from "./Sections/RentalSearch.vue";
import Testimonials from "./Sections/RentalTestimonials.vue";
import Faq from "./Sections/RentalFaq.vue";
import Places from "./Sections/RentalPlaces.vue";
import Contact from "./Sections/RentalContact.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("rental");
  body.classList.add("bg-gray-200");
  setMaterialInput();
});
onUnmounted(() => {
  body.classList.remove("rental");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <DefaultNavbar transparent />
  <Header
    image="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80"
    :title="{ variant: 'h2', text: 'Book your next trip' }"
    :description="{
      text: 'An arrangement you make to have a hotel room, tickets, etc. at a particular time in the future',
      class: '',
    }"
    mask="mask bg-gradient-dark opacity-4"
    minHeight="min-vh-50"
    center
  />
  <div
    class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 overflow-hidden"
  >
    <Search />
    <Places />
    <Testimonials />
    <Faq />
    <Contact />
  </div>
  <DefaultFooter />
</template>
