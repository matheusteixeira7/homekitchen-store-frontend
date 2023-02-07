<template>
  <section aria-labelledby="trending-heading">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
      <div class="md:flex md:items-center md:justify-between">
        <h2
          id="favorites-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          Trending Products
        </h2>
        <a
          href="#"
          class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
        >
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="product in trendingProducts.products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
          >
            <img
              :src="product.images[0].src"
              :alt="product.images[0].alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            <RouterLink
              :to="{ name: 'product-page', params: { id: product.id } }"
            >
              <span class="absolute inset-0" />
              {{ product.name }}
            </RouterLink>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.colors[0].name }}</p>
          <p class="mt-1 text-sm font-medium text-gray-900">
            {{ product.price }}
          </p>
        </div>
      </div>

      <div class="mt-8 text-sm md:hidden">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import trendingProducts from "../data.json";

defineComponent({
  name: "TrendingProductsComponent",
});
</script>
