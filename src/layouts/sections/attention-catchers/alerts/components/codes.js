export const simpleAlertsCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialAlert from "@/components/MaterialAlert.vue";
</script>
<template>
  <div class="container py-5">
    <div class="row">
      <MaterialAlert color="success" fontWeight="bold"
        >A simple success alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="primary" fontWeight="bold"
        >A simple primary alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="secondary" fontWeight="bold"
        >A simple secondary alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="danger" fontWeight="bold"
        >A simple danger alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="warning" fontWeight="bold"
        >A simple warning alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="info" fontWeight="bold"
        >A simple info alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="light" fontWeight="bold"
        >A simple light alert—check it out!</MaterialAlert
      >
      <MaterialAlert color="dark" fontWeight="bold"
        >A simple dark alert—check it out!</MaterialAlert
      >
    </div>
  </div>
</template>
`;

export const alertsWithLinksCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialAlert from "@/components/MaterialAlert.vue";
</script>
<template>
  <div class="container py-5">
    <div class="row">
      <MaterialAlert color="success" fontWeight="bold">
        A simple success alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.
      </MaterialAlert>
      <MaterialAlert color="primary" fontWeight="bold"
        >A simple primary alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="secondary" fontWeight="bold"
        >A simple secondary alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="danger" fontWeight="bold"
        >A simple danger alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="warning" fontWeight="bold"
        >A simple warning alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="info" fontWeight="bold"
        >A simple info alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="light" fontWeight="bold"
        >A simple light alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="dark" fontWeight="bold"
        >A simple dark alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
    </div>
  </div>
</template>
`;

export const alertsWithContentCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialAlert from "@/components/MaterialAlert.vue";
</script>
<template>
  <div class="container py-6">
    <div class="row">
      <MaterialAlert color="success">
        <h4 class="alert-heading">Good job!</h4>
        <p>
          That’s the main thing people are controlled by! Thoughts- their
          perception of themselves! They&#39;re slowed down by their perception
          of themselves. If you&#39;re taught you can&#39;t do anything, you
          won&#39;t do anything. I was taught I could do everything.
        </p>
        <hr class="horizontal light" />
        <p class="mb-0">
          What else could rust the heart more over time? Blackgold.
        </p>
      </MaterialAlert>
    </div>
  </div>
</template>
`;

export const dismissingAlertCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialAlert from "@/components/MaterialAlert.vue";
</script>
<template>
  <div class="container py-7 mt-3">
    <div class="row">
      <MaterialAlert color="warning" dismissible>
        <strong>Holy molly!</strong> You should check in on some of those fields
        below.
      </MaterialAlert>
      <div
        class="alert alert-warning alert-dismissible text-white fade show"
        role="alert"
      ></div>
    </div>
  </div>
</template>
`;
