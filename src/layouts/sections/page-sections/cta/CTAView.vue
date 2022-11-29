<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Call to Actions page components
import CTAOne from "./components/CTAOne.vue";
import CTATwo from "./components/CTATwo.vue";
import CTAThree from "./components/CTAThree.vue";

// Call to Actions page components codes
import { CTA1Code, CTA2Code, CTA3Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Call to Action"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Call to Action' },
    ]"
  >
    <View title="Prefooter 1" :code="CTA1Code" id="prefooter-1">
      <CTAOne />
    </View>

    <View title="Prefooter 2" :code="CTA2Code" id="prefooter-2">
      <CTATwo />
    </View>

    <View title="Prefooter 3" :code="CTA3Code" id="prefooter-3">
      <CTAThree />
    </View>
  </BaseLayout>
</template>
