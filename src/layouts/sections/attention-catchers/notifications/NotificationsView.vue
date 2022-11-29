<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Notifications page components
import ToastBasic from "./components/ToastBasic.vue";
import ToastMessage from "./components/ToastMessage.vue";

// Notifications page components codes
import { toastBasicCode, toastMessageCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Notifications"
    :breadcrumb="[
      { label: 'Attention Catchers', route: '#' },
      { label: 'Notifications' },
    ]"
  >
    <View title="Toast Basic" :code="toastBasicCode" id="toast-basic">
      <ToastBasic />
    </View>

    <View title="Toast Message" :code="toastMessageCode" id="toast-message">
      <ToastMessage />
    </View>
  </BaseLayout>
</template>
