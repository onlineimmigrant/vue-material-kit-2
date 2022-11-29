<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: [String, Object],
    component: String,
    color: String,
    default: () => ({
      color: "success",
    }),
  },
  color: {
    type: String,
    default: "success",
  },
  closeHandler: {
    type: Function,
    default: null,
  },
});
const getColor = (color) => {
  let colorValue;

  if (color === "white") {
    colorValue = "bg-white";
  } else {
    colorValue = `bg-gradient-${color}`;
  }

  return colorValue;
};

const getTextColor = (color) =>
  color === "white" ? "text-dark" : "text-white";
const getHrColor = (color) => (color === "white" ? "dark" : "light");
</script>
<template>
  <div
    class="toast fade show p-2 mx-auto"
    :class="getColor(color)"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header border-0 bg-transparent">
      <i
        v-if="icon"
        class="material-icons me-2"
        :class="typeof icon == 'object' ? icon.color : 'text-white'"
        >{{ typeof icon == "object" ? icon.component : icon }}</i
      >
      <span class="me-auto font-weight-bold" :class="getTextColor(color)">{{
        title
      }}</span>
      <small :class="getTextColor(color)">{{ date }}</small>
      <i
        class="fas fa-times text-md ms-3 cursor-pointer"
        :class="getTextColor(color)"
        data-bs-dismiss="toast"
        aria-label="Close"
        @click="closeHandler"
      ></i>
    </div>
    <hr v-if="description" class="horizontal m-0" :class="getHrColor(color)" />
    <div v-if="description" class="toast-body" :class="getTextColor(color)">
      {{ description }}
    </div>
  </div>
</template>
