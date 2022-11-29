<script setup>
defineProps({
  title: {
    type: String,
    require: true,
  },
});
</script>
<template>
  <div class="p-3 info-horizontal d-flex">
    <div>
      <h5>{{ title }}</h5>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>
