<script setup>
import { onMounted } from "vue";

// base layout
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Teams page components
import TeamOne from "./components/TeamOne.vue";
import TeamTwo from "./components/TeamTwo.vue";

// Teams page components codes
import { team1Code, team2Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

// tooltip
import setTooltip from "@/assets/js/tooltip.js";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

//hook
onMounted(() => {
  setNavPills();
  setTooltip(store.bootstrap);
});
</script>
<template>
  <BaseLayout
    title="Teams"
    :breadcrumb="[{ label: 'Page Sections', route: '#' }, { label: 'Teams' }]"
  >
    <View title="Team 1" :code="team1Code" id="team-1">
      <TeamOne />
    </View>
    <View title="Team 2" :code="team2Code" id="team-2" height="700">
      <TeamTwo />
    </View>
  </BaseLayout>
</template>
