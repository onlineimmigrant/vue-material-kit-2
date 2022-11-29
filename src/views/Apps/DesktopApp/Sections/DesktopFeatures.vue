<script setup>
// example component
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";

// images
import atlassian from "@/assets/img/logos/small-logos/logo-atlassian.svg";
import asana from "@/assets/img/logos/small-logos/logo-asana.svg";
import shopify from "@/assets/img/logos/small-logos/logo-shopify.svg";
import invision from "@/assets/img/logos/small-logos/logo-invision.svg";
import slack from "@/assets/img/logos/small-logos/logo-slack.svg";
import webdev from "@/assets/img/logos/small-logos/logo-webdev.svg";
</script>
<template>
  <section class="py-lg-7 py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2>Get your own app</h2>
          <p>
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever.
          </p>
        </div>
        <div
          class="col-lg-6 text-end d-flex flex-column justify-content-center"
        >
          <button
            type="button"
            class="btn bg-gradient-warning mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div class="row mt-5">
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-0 mt-4"
          :image="{ component: atlassian, class: 'width-48-px mb-3' }"
          :title="{ text: 'Payment vendor' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-0 mt-4"
          :image="{ component: asana, class: 'width-48-px mb-3' }"
          :title="{ text: 'Organize your team' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-0 mt-4"
          :image="{ component: shopify, class: 'width-48-px mb-3' }"
          :title="{ text: 'E-commerce' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-5 mt-4"
          :image="{ component: invision, class: 'width-48-px mb-3' }"
          :title="{ text: 'Digital Product Design' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-5 mt-4"
          :image="{ component: slack, class: 'width-48-px mb-3' }"
          :title="{ text: 'Better Communication' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
        <DefaultInfoCard
          col="col-sm-6 col-lg-4 mt-lg-5 mt-4"
          :image="{ component: webdev, class: 'width-48-px mb-3' }"
          :title="{ text: 'Logo design' }"
          :description="{
            text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
            class: 'text-sm',
          }"
        />
      </div>
    </div>
  </section>
</template>
