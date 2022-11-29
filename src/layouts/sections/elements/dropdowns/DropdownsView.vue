<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Dropdowns page components
import DropdownAndDropup from "./components/DropdownAndDropup.vue";
import SelectPicker from "./components/SelectPicker.vue";

// Dropdowns page components codes
import { dropdownAndDropupCode, selectPickerCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Dropdowns"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Dropdowns' }]"
  >
    <View
      title="Dropdown and Dropup"
      :code="dropdownAndDropupCode"
      id="dropdown-dropup"
    >
      <DropdownAndDropup />
    </View>

    <View
      title="Selectpicker"
      :code="selectPickerCode"
      id="select-picker"
      height="400"
    >
      <SelectPicker />
    </View>
  </BaseLayout>
</template>
