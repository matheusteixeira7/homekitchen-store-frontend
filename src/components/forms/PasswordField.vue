<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PasswordField",
});
</script>

<template>
  <div>
    <label for="password" class="block text-sm font-medium text-gray-700"
      >Password</label
    >
    <div class="mt-1">
      <input
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        required="true"
        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
</template>
