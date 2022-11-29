<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Footers page components
import FooterOne from "./components/FooterOne.vue";
import FooterTwo from "./components/FooterTwo.vue";
import FooterThree from "./components/FooterThree.vue";

// Footers page components codes
import { footer1Code, footer2Code, footer3Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Footers"
    :breadcrumb="[{ label: 'Page Sections', route: '#' }, { label: 'Footers' }]"
  >
    <View title="Footer 1" :code="footer1Code" id="footer-1">
      <FooterOne />
    </View>

    <View title="Footer 2" :code="footer2Code" id="footer-2">
      <FooterTwo />
    </View>

    <View title="Footer 3" :code="footer3Code" id="footer-3">
      <FooterThree />
    </View>
  </BaseLayout>
</template>
