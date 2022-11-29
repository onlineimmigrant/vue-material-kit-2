<script setup>
//Vue Material Kit 2 Pro components
import MaterialAlert from "@/components/MaterialAlert.vue";
</script>
<template>
  <div class="container py-5">
    <div class="row">
      <MaterialAlert color="success">
        A simple success alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.
      </MaterialAlert>
      <MaterialAlert color="primary"
        >A simple primary alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="secondary"
        >A simple secondary alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="danger"
        >A simple danger alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="warning"
        >A simple warning alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="info"
        >A simple info alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="light"
        >A simple light alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
      <MaterialAlert color="dark"
        >A simple dark alert with
        <a href="javascript:;" class="alert-link text-white">an example link</a
        >. Give it a click if you like.</MaterialAlert
      >
    </div>
  </div>
</template>
