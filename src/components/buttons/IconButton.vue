<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <a
      :href="link"
      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <span class="sr-only">{{ text }}</span>
      <font-awesome-icon :icon="icon" class="text-xl" />
    </a>
  </div>
</template>
