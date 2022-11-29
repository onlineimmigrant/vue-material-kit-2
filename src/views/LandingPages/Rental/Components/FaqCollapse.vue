<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  faqId: {
    type: String,
    default: "collapseId",
  },
  open: {
    type: Boolean,
    default: false,
  },
  accordionId: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="accordion-item mb-3">
    <h5 class="accordion-header" :id="`heading-${faqId}`">
      <button
        class="accordion-button border-bottom font-weight-bold text-start"
        :class="open ? '' : 'collapsed'"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${faqId}`"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-controls="faqId"
      >
        {{ question }}
        <i
          class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"
        ></i>
        <i
          class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"
        ></i>
      </button>
    </h5>
    <div
      :id="faqId"
      class="accordion-collapse collapse"
      :class="{ show: open }"
      :aria-labelledby="`heading-${faqId}`"
      :data-bs-parent="`#${accordionId}`"
    >
      <div class="accordion-body text-sm opacity-8">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.accordion .accordion-button {
  font-size: initial !important;
}
</style>
