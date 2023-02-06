<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonPrimary",
});
</script>

<template>
  <button type="button"
    class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700">
    <slot />
  </button>
</template>
