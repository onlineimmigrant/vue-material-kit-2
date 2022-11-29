<script setup>
//Vue Material Kit 2 Pro components
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-6 py-6 mt-6 pt-3 mx-auto">
        <MaterialSnackbar
          color="success"
          title="Hello, world! This is a notification message."
        />
      </div>
    </div>
  </div>
</template>
