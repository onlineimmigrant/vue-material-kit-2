<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Stats page components
import StatOne from "./components/StatOne.vue";
import StatTwo from "./components/StatTwo.vue";
import StatThree from "./components/StatThree.vue";

// Stats page components codes
import { stat1Code, stat2Code, stat3Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Stats"
    :breadcrumb="[{ label: 'Page Sections', route: '#' }, { label: 'Stats' }]"
  >
    <View title="Stats 1" :code="stat1Code" id="stat-1">
      <StatOne />
    </View>
    <View title="Stats 2" :code="stat2Code" id="stat-2">
      <StatTwo />
    </View>

    <View title="Stats 3" :code="stat3Code" id="stat-3">
      <StatThree />
    </View>
  </BaseLayout>
</template>
