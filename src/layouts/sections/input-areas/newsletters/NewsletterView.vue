<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Newsletter page components
import NewsletterOne from "./components/NewsletterOne.vue";
import NewsletterTwo from "./components/NewsletterTwo.vue";

// Newsletter page components codes
import { newsletterOneCode, newsletterTwoCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Newsletter"
    :breadcrumb="[
      { label: 'Input Areas', route: '#' },
      { label: 'Newsletter' },
    ]"
  >
    <View title="Newsletter 1" :code="newsletterOneCode" id="newsletter-1">
      <NewsletterOne />
    </View>

    <View
      title="Newsletter 2"
      :code="newsletterTwoCode"
      id="newsletter-2"
      height="600"
    >
      <NewsletterTwo />
    </View>
  </BaseLayout>
</template>
