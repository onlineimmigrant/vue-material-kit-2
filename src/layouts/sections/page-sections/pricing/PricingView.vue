<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Pricing page components
import PricingOne from "./components/PricingOne.vue";
import PricingTwo from "./components/PricingTwo.vue";
import PricingThree from "./components/PricingThree.vue";

// Pricing page components codes
import { pricing1Code, pricing2Code, pricing3Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Pricing"
    :breadcrumb="[
      { label: 'Page Sections', route: '/sections/page-sections/pricing' },
      { label: 'Pricing' },
    ]"
  >
    <View title="Pricing 1" :code="pricing1Code" id="pricing-1">
      <PricingOne />
    </View>

    <View title="Pricing 2" :code="pricing2Code" id="pricing-2">
      <PricingTwo />
    </View>
    <View title="Pricing 3" :code="pricing3Code" id="pricing-3">
      <PricingThree />
    </View>
  </BaseLayout>
</template>
