<script setup>
defineProps({
  title: {
    type: String,
    default: "Messages",
  },
  messages: {
    type: Array,
    route: String,
    tooltip: String,
    image: {
      type: [String, Object],
      url: String,
      alt: String,
    },
    default: () => [],
  },
});
</script>
<template>
  <div class="card move-on-hover mt-4">
    <div class="card-body">
      <div class="d-flex">
        <p class="my-auto">{{ title }}</p>
        <div class="ms-auto">
          <div class="avatar-group">
            <a
              v-for="({ route, tooltip, image }, index) of messages"
              :key="index"
              :href="route"
              class="avatar avatar-sm border-0 rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              :title="tooltip"
            >
              <img
                :alt="
                  typeof image === 'string' ? 'Image placeholder' : image.alt
                "
                :src="typeof image === 'string' ? image : image.url"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
