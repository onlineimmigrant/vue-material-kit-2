<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Testimonials page components
import TestimonialOne from "./components/TestimonialOne.vue";
import TestimonialTwo from "./components/TestimonialTwo.vue";
import TestimonialThree from "./components/TestimonialThree.vue";

// Testimonials page components codes
import {
  testimonial1Code,
  testimonial2Code,
  testimonial3Code,
} from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Testimonials"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Testimonials' },
    ]"
  >
    <View title="Testimonials 1" :code="testimonial1Code" id="testimonial-1">
      <TestimonialOne />
    </View>

    <View
      title="Testimonials 2"
      :code="testimonial2Code"
      id="testimonial-2"
      height="700"
    >
      <TestimonialTwo />
    </View>

    <View
      title="Testimonials 3"
      :code="testimonial3Code"
      id="testimonial-3"
      height="700"
    >
      <TestimonialThree />
    </View>
  </BaseLayout>
</template>
