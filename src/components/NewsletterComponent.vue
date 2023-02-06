<template>
  <!-- Newsletter section -->
  <div
    class="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1"
  >
    <h3 class="text-sm font-medium text-gray-900">
      Sign up for our newsletter
    </h3>
    <p class="mt-6 text-sm text-gray-500">
      The latest deals and savings, sent to your inbox weekly.
    </p>
    <form class="mt-2 flex sm:max-w-md">
      <label for="email-address" class="sr-only">Email address</label>
      <input
        id="email-address"
        type="text"
        autocomplete="email"
        required="true"
        class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <div class="ml-4 flex-shrink-0">
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "NewsletterComponent",
});
</script>
