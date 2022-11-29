<script setup>
defineProps({
  route: {
    type: String,
    default: "javascript:;",
  },
  color: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <a
    :href="route"
    class="btn me-2"
    :class="`btn-${color} ${rounded ? 'rounded-circle' : ''}`"
    target="_blank"
  >
    <i class="fab" :class="`fa-${component} ${iconOnly ? 'me-0' : 'me-1'}`"></i>
    {{ label }}
  </a>
</template>
