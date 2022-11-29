<script setup>
// example component
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

// logo
import logoCT from "@/assets/img/logo-ct-dark.png";

const footerContent = {
  brand: {
    name: "Material Kit 2 PRO",
    logo: logoCT,
    route: "/",
  },
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
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        {
          name: "freebies",
          href: "https://www.creative-tim.com/templates/free",
        },
        {
          name: "premium tools",
          href: "https://www.creative-tim.com/templates/premium",
        },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        {
          name: "affiliate program",
          href: "https://www.creative-tim.com/affiliates/new",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        {
          name: "knowledge center",
          href: "https://www.creative-tim.com/knowledge-center",
        },
        {
          name: "custom development",
          href: "https://services.creative-tim.com/",
        },
        {
          name: "sponsorships",
          href: "https://www.creative-tim.com/sponsorships",
        },
      ],
    },
    {
      name: "legal",
      items: [
        {
          name: "terms & conditions",
          href: "https://www.creative-tim.com/terms",
        },
        {
          name: "privacy policy",
          href: "https://www.creative-tim.com/privacy",
        },
        {
          name: "licenses (EULA)",
          href: "https://www.creative-tim.com/license",
        },
      ],
    },
  ],
};
</script>
<template>
  <DefaultFooter v-bind="footerContent" />
</template>
