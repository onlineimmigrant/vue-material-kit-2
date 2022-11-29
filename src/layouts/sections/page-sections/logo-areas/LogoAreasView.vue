<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// LogoAreas page components
import LogoAreaOne from "./components/LogoAreaOne.vue";
import LogoAreaTwo from "./components/LogoAreaTwo.vue";
import LogoAreaThree from "./components/LogoAreaThree.vue";

// LogoAreas page components codes
import {
  logoArea1Code,
  logoArea2Code,
  logoArea3Code,
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
    title="Logo Areas"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Logo Areas' },
    ]"
  >
    <View title="Logo Area 1" :code="logoArea1Code" id="logoarea-1">
      <LogoAreaOne />
    </View>

    <View title="Logo Area 2" :code="logoArea2Code" id="logoarea-2">
      <LogoAreaTwo />
    </View>

    <View title="Logo Area 3" :code="logoArea3Code" id="logoarea-3">
      <LogoAreaThree />
    </View>
  </BaseLayout>
</template>
