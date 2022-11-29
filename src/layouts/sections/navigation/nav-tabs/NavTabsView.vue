<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Nav tabs page components
import TabsSimple from "./components/TabsSimple.vue";
import TabsWithIcon from "./components/TabsWithIcon.vue";
import TabsVertical from "./components/TabsVertical.vue";

// Nav tabs page components codes
import {
  TabsSimpleCode,
  TabsWithIconCode,
  TabsVerticalCode,
} from "./components/Codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Nav Tabs"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'Nav Tabs' }]"
  >
    <View title="Tabs Simple" :code="TabsSimpleCode" id="tabs-simple">
      <TabsSimple />
    </View>

    <View title="Tabs with icons" :code="TabsWithIconCode" id="tabs-with-icon">
      <TabsWithIcon />
    </View>
    <View title="Tabs vertical" :code="TabsVerticalCode" id="tabs-vertical">
      <TabsVertical />
    </View>
  </BaseLayout>
</template>
