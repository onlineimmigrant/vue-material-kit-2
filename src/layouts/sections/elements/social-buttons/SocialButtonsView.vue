<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Social Buttons page components
import SocialButtons from "./components/SocialButtons.vue";
import SocialButtonsIcon from "./components/SocialButtonsIcon.vue";

// Social Buttons page components codes
import { socialButtonsCode, socialButtonsIconCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Social Buttons"
    :breadcrumb="[
      { label: 'Elements', route: '#' },
      { label: 'Social Buttons' },
    ]"
  >
    <View title="Social Buttons" :code="socialButtonsCode" id="social-buttons">
      <SocialButtons />
    </View>
    <View
      title="Social Buttons Icon Only"
      :code="socialButtonsIconCode"
      id="social-buttons-icon"
    >
      <SocialButtonsIcon />
    </View>
  </BaseLayout>
</template>
