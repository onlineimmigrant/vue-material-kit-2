<script setup>
//Vue Material Kit 2 Pro components
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto py-6">
        <MaterialSnackbar
          color="dark"
          icon="diamond"
          title="Material Design"
          date="11 mins ago"
          description="Hello, world! This is a notification message."
        />
      </div>
    </div>
  </div>
</template>
