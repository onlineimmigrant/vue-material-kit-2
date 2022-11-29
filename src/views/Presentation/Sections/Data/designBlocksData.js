/*
=========================================================
* Vue Material Kit 2 PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Design Blocks",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
      },
      {
        image: imgPricing,
        title: "Pricing",
        subtitle: "8 Examples",
        route: "page-pricing",
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        title: "FAQ",
        subtitle: "1 Example",
        route: "page-faq",
      },
      {
        image: imgBlogPosts,
        title: "Blog Posts",
        subtitle: "11 Examples",
        route: "page-blog-posts",
      },
      {
        image: imgTestimonials,
        title: "Testimonials",
        subtitle: "11 Examples",
        route: "page-testimonials",
      },
      {
        image: imgTeam,
        title: "Teams",
        subtitle: "6 Examples",
        route: "page-teams",
      },
      {
        image: imgStat,
        title: "Stats",
        subtitle: "3 Examples",
        route: "page-stats",
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        title: "Call to Actions",
        subtitle: "8 Examples",
        route: "page-cta",
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        title: "Applications",
        subtitle: "6 Examples",
        route: "page-applications",
      },
      {
        image: `${imagesPrefix}/logo-area.jpg`,
        title: "Logo Areas",
        subtitle: "4 Examples",
        route: "page-logo-areas",
      },
      {
        image: `${imagesPrefix}/footers.jpg`,
        title: "Footers",
        subtitle: "10 Examples",
        route: "page-footers",
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        title: "General Cards",
        subtitle: "9 Examples",
        route: "page-general-cards",
      },
      {
        image: imgContent,
        title: "Content Sections",
        subtitle: "8 Examples",
        route: "page-content-sections",
      },
    ],
  },
  {
    heading: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
      },
    ],
  },
  {
    heading: "Input Areas",
    description:
      "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "Newsletters",
        subtitle: "6 Examples",
        route: "inputareas-newsletter",
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "Contact Sections",
        subtitle: "8 Examples",
        route: "inputareas-contact",
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "Forms",
        subtitle: "3 Examples",
        route: "inputareas-forms",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        title: "Inputs",
        subtitle: "6 Examples",
        route: "inputareas-inputs",
      },
    ],
  },
  {
    heading: "Attention Catchers",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "ac-notifications",
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
      },
    ],
  },
  {
    heading: "Elements",
    description:
      "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        title: "Buttons",
        subtitle: "6 Examples",
        route: "el-buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Avatars",
        subtitle: "2 Examples",
        route: "el-avatars",
      },
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "el-social-buttons",
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Progress Bars",
        subtitle: "4 Examples",
        route: "el-progress-bars",
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        title: "Tables",
        subtitle: "3 Examples",
        route: "el-tables",
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Typography",
        subtitle: "2 Examples",
        route: "el-typography",
      },
    ],
  },
];
