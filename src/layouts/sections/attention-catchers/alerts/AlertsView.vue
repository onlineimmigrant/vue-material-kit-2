<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Alerts page components
import SimpleAlerts from "./components/SimpleAlerts.vue";
import AlertsWithLinks from "./components/AlertsWithLinks.vue";
import AlertsWithContent from "./components/AlertsWithContent.vue";
import DismissingAlert from "./components/DismissingAlert.vue";

// Alerts page components codes
import {
  simpleAlertsCode,
  alertsWithLinksCode,
  alertsWithContentCode,
  dismissingAlertCode,
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
    title="Alerts"
    :breadcrumb="[
      { label: 'Attention Catchers', route: '#' },
      { label: 'Alerts' },
    ]"
  >
    <View
      title="Simple Alerts"
      :code="simpleAlertsCode"
      id="simple-alerts"
      height="600"
    >
      <SimpleAlerts />
    </View>
    <View
      title="Alerts with Links"
      :code="alertsWithLinksCode"
      id="alerts-link"
      height="600"
    >
      <AlertsWithLinks />
    </View>

    <View
      title="Alerts with Content"
      :code="alertsWithContentCode"
      id="alerts-content"
      height="300"
    >
      <AlertsWithContent />
    </View>

    <View
      title="Dismissing Alert"
      :code="dismissingAlertCode"
      id="alert-dismiss"
      height="300"
    >
      <DismissingAlert />
    </View>
  </BaseLayout>
</template>
