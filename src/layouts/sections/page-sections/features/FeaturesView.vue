<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import FeatureOne from "./components/FeatureOne.vue";
import FeatureTwo from "./components/FeatureTwo.vue";
import FeatureThree from "./components/FeatureThree.vue";

// Features page components codes
import { feature1Code, feature2Code, feature3Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Features"
    :breadcrumb="[
      { label: 'Page Sections', route: '/sections/page-sections/page-headers' },
      { label: 'Features' },
    ]"
  >
    <View title="Features 1" :code="feature1Code" id="feature-1">
      <FeatureOne />
    </View>

    <View title="Features 2" :code="feature2Code" id="feature-2">
      <FeatureTwo />
    </View>

    <View title="Features 3" :code="feature3Code" id="feature-3">
      <FeatureThree />
    </View>
  </BaseLayout>
</template>
