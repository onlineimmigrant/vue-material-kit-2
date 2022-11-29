<script setup>
defineProps({
  color: {
    type: String,
    default: "dark",
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  },
  song: {
    type: Object,
    title: String,
    singer: String,
    default: () => ({
      title: "Night Jazz",
      singer: "Gary Coleman",
    }),
  },
});
</script>
<template>
  <div
    class="card card-background move-on-hover align-items-start"
    :class="`card-background-mask-${color}`"
  >
    <div class="cursor-pointer">
      <div
        class="full-background"
        :style="{
          backgroundImage: `url(${image})`,
        }"
      ></div>
      <div class="card-body">
        <h5 class="text-white mb-0">{{ song.title }}</h5>
        <p class="text-white text-sm">{{ song.singer }}</p>
        <div class="d-flex mt-5">
          <button
            class="btn btn-outline-white rounded-circle p-2 mb-0"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Prev"
          >
            <i class="material-icons p-2 mt-0">skip_previous</i>
          </button>
          <button
            class="btn btn-outline-white rounded-circle p-2 mx-2 mb-0"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Pause"
          >
            <i class="material-icons p-2 mt-0">play_arrow</i>
          </button>
          <button
            class="btn btn-outline-white rounded-circle p-2 mb-0"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Next"
          >
            <i class="material-icons p-2 mt-0">skip_next</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
