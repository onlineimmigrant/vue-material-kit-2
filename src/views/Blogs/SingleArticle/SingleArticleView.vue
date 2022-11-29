<script setup>
//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

//image
import image from "@/assets/img/bg5.jpg";

//sections
import Information from "./Sections/SingleArticleInformation.vue";
import OurEffort from "./Sections/SingleArticleOurEffort.vue";
import Features from "./Sections/SingleArticleFeatures.vue";
import Posts from "./Sections/SingleArticlePosts.vue";
import Support from "./Sections/SingleArticleSupport.vue";
</script>
<template>
  <DefaultNavbar light />
  <Header
    minHeight="min-vh-85"
    :image="image"
    mask="mask bg-gradient-dark opacity-8"
    :title="{ variant: 'h1', text: 'Material Design - News', class: 'mb-0' }"
    :description="{
      text: 'The time is now for it be okay to be great. People in this world shun people for being nice.',
      class: 'pe-sm-5 me-sm-5  opacity-8',
    }"
  >
    <h5 class="mt-3 text-white">Connect with us on</h5>

    <div class="d-flex justify-content-start">
      <a href="javascript:;"
        ><i class="fab fa-facebook text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-instagram text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-twitter text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-google-plus text-white text-lg"></i
      ></a>
    </div>
  </Header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="py-5 mt-5">
      <Information />
      <OurEffort />
    </section>
    <Features />
    <Posts />
    <Support />
  </div>
  <DefaultFooter />
</template>
