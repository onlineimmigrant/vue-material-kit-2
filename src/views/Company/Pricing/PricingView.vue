<script setup>
import { onMounted } from "vue";

//js
import setNavPills from "@/assets/js/nav-pills";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import PricingHeader from "./Sections/PricingHeader.vue";
import AboutUs from "./Sections/PricingAboutUs.vue";
import Pricing from "./Sections/PricingSection.vue";
import LifetimeMembership from "./Sections/PricingLifetimeMembership.vue";
import Testimonials from "./Sections/PricingTestimonials.vue";
import Trust from "./Sections/PricingTrust.vue";
import PricingFaq from "./Sections/PricingFaq.vue";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <PricingHeader />
  </Header>
  <AboutUs />
  <Pricing />
  <LifetimeMembership />
  <Testimonials />
  <Trust />
  <PricingFaq />
  <DefaultFooter />
</template>
