<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Pagination page components
import PaginationSimple from "./components/PaginationSimple.vue";
import PaginationSizing from "./components/PaginationSizing.vue";
import PaginationVariant from "./components/PaginationVariant.vue";

// Pagination page components codes
import {
  paginationSimpleCode,
  paginationSizingCode,
  paginationVariantCode,
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
    title="Pagination"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'Pagination' }]"
  >
    <View
      title="Pagination Simple"
      :code="paginationSimpleCode"
      id="pagination-simple"
    >
      <PaginationSimple />
    </View>

    <View
      title="Pagination Sizing"
      :code="paginationSizingCode"
      id="pagination-sizing"
    >
      <PaginationSizing />
    </View>
    <View
      title="Pagination Variants"
      :code="paginationVariantCode"
      id="pagination-variant"
    >
      <PaginationVariant />
    </View>
  </BaseLayout>
</template>
