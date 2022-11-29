<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Content Sections page components
import ContentOne from "./components/ContentOne.vue";
import ContentTwo from "./components/ContentTwo.vue";

// Content Sections page components codes
import { content1Code, content2Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Content Sections"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Content Sections' },
    ]"
  >
    <View title="Content 1" :code="content1Code" id="content-1">
      <ContentOne />
    </View>

    <View title="Content 2" :code="content2Code" id="content-2">
      <ContentTwo />
    </View>
  </BaseLayout>
</template>
