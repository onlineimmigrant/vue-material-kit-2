<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Tables page components
import TableOne from "./components/TableOne.vue";

// Tables page components code
import { tableOneCode } from "./components/code";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Tables"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Tables' }]"
  >
    <View title="Table One" :code="tableOneCode" id="table-one" height="600">
      <TableOne />
    </View>
  </BaseLayout>
</template>
