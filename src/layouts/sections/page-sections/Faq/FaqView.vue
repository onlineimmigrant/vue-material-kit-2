<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Faq page component
import FaqOne from "./components/FaqOne.vue";

// Faq page component code
import { faqCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="FAQ"
    :breadcrumb="[{ label: 'Page Sections', route: '#' }, { label: 'Faq' }]"
  >
    <View title="Faq" :code="faqCode" id="faq">
      <FaqOne />
    </View>
  </BaseLayout>
</template>
