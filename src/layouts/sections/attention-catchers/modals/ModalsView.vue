<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Modals page components
import SimpleModal from "./components/SimpleModal.vue";
import NotificationModal from "./components/NotificationModal.vue";

// Modals page components codes
import { simpleModalCode, notificationModalCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Modals"
    :breadcrumb="[
      { label: 'Attention Catchers', route: '#' },
      { label: 'Modals' },
    ]"
  >
    <View title="Simple Modal" :code="simpleModalCode" id="simple-modal">
      <SimpleModal />
    </View>

    <View
      title="Notification Modal"
      :code="notificationModalCode"
      id="notification-modal"
    >
      <NotificationModal />
    </View>
  </BaseLayout>
</template>
