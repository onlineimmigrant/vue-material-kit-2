<script setup>
// example component
import CenteredFooter from "@/examples/footers/FooterCentered.vue";

// footer content
const footerContent = {
  links: [
    { href: "https://www.creative-tim.com/", name: "Company" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/presentation", name: "Team" },
    { href: "https://www.creative-tim.com/templates/vuejs", name: "Products" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
  socials: [
    {
      icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
      link: "https://twitter.com/creativetim",
    },
    {
      icon: '<i class="fab fa-dribbble text-lg opacity-8"></i>',
      link: "https://dribbble.com/creativetim",
    },
    {
      icon: '<i class="fab fa-github text-lg opacity-8"></i>',
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
};
</script>
<template>
  <CenteredFooter v-bind="footerContent" />
</template>
