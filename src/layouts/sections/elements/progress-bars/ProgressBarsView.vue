<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Progress Bars page components
import ProgressSimple from "./components/ProgressSimple.vue";
import ProgressGradient from "./components/ProgressGradient.vue";
import Sliders from "./components/Sliders.vue";

// Progress Bars page components codes
import {
  progressSimpleCode,
  progressGradientCode,
  slidersCode,
} from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Progress Bars"
    :breadcrumb="[
      { label: 'Elements', route: '#' },
      { label: 'Progress Bars' },
    ]"
  >
    <View
      title="Progress Bars Simple"
      :code="progressSimpleCode"
      id="progress-simple"
    >
      <ProgressSimple />
    </View>

    <View
      title="Progress Bars Gradient"
      :code="progressGradientCode"
      id="progress-gradient"
    >
      <ProgressGradient />
    </View>
    <View title="Sliders" :code="slidersCode" id="sliders">
      <Sliders />
    </View>
  </BaseLayout>
</template>
