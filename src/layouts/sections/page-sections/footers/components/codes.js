export const footer1Code = `<script setup>
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
`;

export const footer2Code = `<script setup>
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
`;

export const footer3Code = `<script setup>
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
`;
