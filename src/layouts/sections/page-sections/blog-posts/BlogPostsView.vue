<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Blog Posts page components
import BlogPostOne from "./components/BlogPostOne.vue";
import BlogPostTwo from "./components/BlogPostTwo.vue";
import BlogPostThree from "./components/BlogPostThree.vue";
import BlogPostFour from "./components/BlogPostFour.vue";

// Blog Posts page components codes
import {
  blogPost1Code,
  blogPost2Code,
  blogPost3Code,
  blogPost4Code,
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
    title="Blog Posts"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'Blog Posts' },
    ]"
  >
    <View title="Blog 1" :code="blogPost1Code" id="blog-1" height="600">
      <BlogPostOne />
    </View>

    <View title="Blog 2" :code="blogPost2Code" id="blog-2" height="600">
      <BlogPostTwo />
    </View>

    <View title="Blog 3" :code="blogPost3Code" id="blog-3" height="600">
      <BlogPostThree />
    </View>

    <View title="Blog 4" :code="blogPost4Code" id="blog-4" height="600">
      <BlogPostFour />
    </View>
  </BaseLayout>
</template>
