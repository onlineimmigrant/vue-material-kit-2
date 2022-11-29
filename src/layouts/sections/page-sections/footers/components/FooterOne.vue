<script setup>
// example component
import DetailedFooter from "@/examples/footers/FooterDetailed.vue";

const footerContent = {
  brand: {
    name: "MATERIAL UI DESIGN",
    description: "The next generation of design systems.",
  },
  socials: [
    {
      icon: '<i class="text-lg fab fa-facebook" />',
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: '<i class="text-lg fab fa-twitter" />',
      link: "https://twitter.com/creativetim",
    },
    {
      icon: '<i class="text-lg fab fa-instagram" />',
      link: "https://www.instagram.com/creativetimofficial/",
    },
    {
      icon: '<i class="text-lg fab fa-pinterest" />',
      link: "https://ro.pinterest.com/thecreativetim/",
    },
    {
      icon: '<i class="text-lg fab fa-github" />',
      link: "https://github.com/creativetimofficial",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com" },
        { name: "career", href: "https://www.creative-tim.com" },
        { name: "press", href: "https://www.creative-tim.com" },
        { name: "blog", href: "https://www.creative-tim.com" },
      ],
    },
    {
      name: "Pages",
      items: [
        { name: "login", href: "https://www.creative-tim.com" },
        { name: "register", href: "https://www.creative-tim.com" },
        { name: "add list", href: "https://www.creative-tim.com" },
        { name: "contact", href: "https://www.creative-tim.com" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms", href: "https://www.creative-tim.com" },
        { name: "about us", href: "https://www.creative-tim.com" },
        { name: "team", href: "https://services.creative-tim.com" },
        { name: "privacy", href: "https://www.creative-tim.com" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "blog", href: "https://www.creative-tim.com" },
        { name: "services", href: "https://www.creative-tim.com" },
        { name: "product", href: "https://www.creative-tim.com" },
        { name: "pricing", href: "https://www.creative-tim.com" },
      ],
    },
  ],
  copyright: "Material Design by Creative Tim.",
};
</script>
<template>
  <DetailedFooter v-bind="footerContent" />
</template>
