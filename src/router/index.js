import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import CoworkingView from "../views/LandingPages/Coworking/CoworkingView.vue";
import RentalView from "../views/LandingPages/Rental/RentalView.vue";
import AboutView from "../views/Company/AboutUs/AboutView.vue";
import PricingView from "../views/Company/Pricing/PricingView.vue";
import ContactView from "../views/Support/ContactUs/ContactView.vue";
import PrivacyView from "../views/Support/Privacy/PrivacyView.vue";
import DesktopView from "../views/Apps/DesktopApp/DesktopView.vue";
import FaqView from "../views/Support/Faq/FaqView.vue";
import HelpCenterView from "../views/Support/HelpCenter/HelpCenterView.vue";
import SingleArticleView from "../views/Blogs/SingleArticle/SingleArticleView.vue";
import AuthorView from "../views/Blogs/Author/AuthorView.vue";
import VirtualRealityView from "../views/Extra/VirtualReality/VirtualRealityView.vue";
import SignInBasicView from "../views/Authentication/SignIn/BasicView.vue";
import SignInCoverView from "../views/Authentication/SignIn/CoverView.vue";
import SignInIllustrationView from "../views/Authentication/SignIn/IllustrationView.vue";
import SignInSimpleView from "../views/Authentication/SignIn/SimpleView.vue";
import SignUpCoverView from "../views/Authentication/SignUp/CoverView.vue";
import ResetPasswordView from "../views/Authentication/ResetPassword/ResetPasswordView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import PagePricing from "../layouts/sections/page-sections/pricing/PricingView.vue";
import PageFaq from "../layouts/sections/page-sections/Faq/FaqView.vue";
import PageBlogPosts from "../layouts/sections/page-sections/blog-posts/BlogPostsView.vue";
import PageTestimonials from "../layouts/sections/page-sections/testimonials/TestimonialsView.vue";
import PageTeams from "../layouts/sections/page-sections/teams/TeamsView.vue";
import PageStats from "../layouts/sections/page-sections/stats/StatsView.vue";
import PageCTA from "../layouts/sections/page-sections/cta/CTAView.vue";
import PageApplications from "../layouts/sections/page-sections/applications/ApplicationsVew.vue";
import PageLogoAreas from "../layouts/sections/page-sections/logo-areas/LogoAreasView.vue";
import PageFooters from "../layouts/sections/page-sections/footers/FootersView.vue";
import PageGeneralCards from "../layouts/sections/page-sections/general-cards/GeneralCardsView.vue";
import PageContentSections from "../layouts/sections/page-sections/content-sections/ContentSectionsView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasNewsletter from "../layouts/sections/input-areas/newsletters/NewsletterView.vue";
import InputAreasContactSections from "../layouts/sections/input-areas/contact-sections/ContactView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACNotifications from "../layouts/sections/attention-catchers/notifications/NotificationsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElSocialButtons from "../layouts/sections/elements/social-buttons/SocialButtonsView.vue";
import ElTables from "../layouts/sections/elements/tables/TablesView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/coworking",
      name: "coworking",
      component: CoworkingView,
    },
    {
      path: "/pages/landing-pages/rental",
      name: "rental",
      component: RentalView,
    },
    {
      path: "/pages/company/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/company/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/pages/support/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/support/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/pages/support/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/pages/support/help-center",
      name: "helpcenter",
      component: HelpCenterView,
    },
    {
      path: "/pages/apps/desktop-app",
      name: "desktop-app",
      component: DesktopView,
    },
    {
      path: "/pages/blog/single-article",
      name: "single-article",
      component: SingleArticleView,
    },
    {
      path: "/pages/blog/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/extra/virtual-reality",
      name: "virtual-reality",
      component: VirtualRealityView,
    },
    {
      path: "/authentication/sign-in/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/authentication/sign-in/cover",
      name: "signin-cover",
      component: SignInCoverView,
    },
    {
      path: "/authentication/sign-in/illustration",
      name: "signin-illustration",
      component: SignInIllustrationView,
    },
    {
      path: "/authentication/sign-in/simple",
      name: "signin-simple",
      component: SignInSimpleView,
    },
    {
      path: "/authentication/sign-up/cover",
      name: "signup-cover",
      component: SignUpCoverView,
    },
    {
      path: "/authentication/reset-password/cover",
      name: "reset-cover",
      component: ResetPasswordView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/page-sections/pricing",
      name: "page-pricing",
      component: PagePricing,
    },
    {
      path: "/sections/page-sections/faq",
      name: "page-faq",
      component: PageFaq,
    },
    {
      path: "/sections/page-sections/blog-posts",
      name: "page-blog-posts",
      component: PageBlogPosts,
    },
    {
      path: "/sections/page-sections/testimonials",
      name: "page-testimonials",
      component: PageTestimonials,
    },
    {
      path: "/sections/page-sections/teams",
      name: "page-teams",
      component: PageTeams,
    },
    {
      path: "/sections/page-sections/stats",
      name: "page-stats",
      component: PageStats,
    },
    {
      path: "/sections/page-sections/call-to-actions",
      name: "page-cta",
      component: PageCTA,
    },
    {
      path: "/sections/page-sections/applications",
      name: "page-applications",
      component: PageApplications,
    },
    {
      path: "/sections/page-sections/logo-areas",
      name: "page-logo-areas",
      component: PageLogoAreas,
    },
    {
      path: "/sections/page-sections/footers",
      name: "page-footers",
      component: PageFooters,
    },
    {
      path: "/sections/page-sections/general-cards",
      name: "page-general-cards",
      component: PageGeneralCards,
    },
    {
      path: "/sections/page-sections/content-sections",
      name: "page-content-sections",
      component: PageContentSections,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/newsletters",
      name: "inputareas-newsletter",
      component: InputAreasNewsletter,
    },
    {
      path: "/sections/input-areas/contact-sections",
      name: "inputareas-contact",
      component: InputAreasContactSections,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/notifications",
      name: "ac-notifications",
      component: ACNotifications,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/social-buttons",
      name: "el-social-buttons",
      component: ElSocialButtons,
    },
    {
      path: "/sections/elements/tables",
      name: "el-tables",
      component: ElTables,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
});

export default router;
