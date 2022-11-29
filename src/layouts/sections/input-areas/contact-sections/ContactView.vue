<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Conctact page components
import ContactUsOne from "./components/ContactUsOne.vue";
import ContactUsTwo from "./components/ContactUsTwo.vue";

// Conctact page components codes
import { contactUsOneCode, contactUsTwoCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Contact Sections"
    :breadcrumb="[
      { label: 'Input Areas', route: '#' },
      { label: 'Contact Sections' },
    ]"
  >
    <View
      title="Contact us 1"
      :code="contactUsOneCode"
      id="contact-one"
      height="600"
    >
      <ContactUsOne />
    </View>

    <View title="Contact us 2" :code="contactUsTwoCode" id="contact-two">
      <ContactUsTwo />
    </View>
  </BaseLayout>
</template>
