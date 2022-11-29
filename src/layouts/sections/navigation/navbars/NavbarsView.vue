<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";
import NavbarLight from "./components/NavbarLight.vue";
import NavbarTransparent from "./components/NavbarTransparent.vue";
import NavbarBlur from "./components/NavbarBlur.vue";

// Navbars page components codes
import {
  navbarDarkCode,
  navbarLightCode,
  navbarBlurCode,
  navbarTransparentCode,
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
    title="Navbars"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'Navbars' }]"
  >
    <View
      title="Navbar dark"
      :code="navbarDarkCode"
      id="navbar-dark"
      height="300  position-relative"
    >
      <NavbarDark />
    </View>

    <View
      title="Navbar light"
      :code="navbarLightCode"
      id="navbar-light"
      height="300 bg-gray-800"
    >
      <NavbarLight />
    </View>

    <View
      title="Navbar transparent"
      :code="navbarTransparentCode"
      id="navbar-transparent"
      height="300 bg-gray-800  position-relative"
    >
      <NavbarTransparent />
    </View>
    <!-- position-relative -->
    <View
      title="Navbar blur"
      :code="navbarBlurCode"
      id="navbar-blur"
      height="300 bg-gray-800 position-relative"
    >
      <NavbarBlur />
    </View>
  </BaseLayout>
</template>
