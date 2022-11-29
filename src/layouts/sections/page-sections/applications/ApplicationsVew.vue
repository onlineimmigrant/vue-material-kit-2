<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Applications page components
import ApplicationOne from "./components/ApplicationOne.vue";
import ApplicationTwo from "./components/ApplicationTwo.vue";

// Applications page components codes
import { application1Code, application2Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Applications"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Applications' },
    ]"
  >
    <View title="application 1" :code="application1Code" id="application-1">
      <ApplicationOne />
    </View>

    <View
      title="application 2"
      :code="application2Code"
      id="application-2"
      height="600"
    >
      <ApplicationTwo />
    </View>
  </BaseLayout>
</template>
