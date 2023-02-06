<template>
  <div class="bg-white">
    <NavbarComponent />

    <main>
      <HeroComponent />
      <TrendingProductsComponent />
      <PerksComponent />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import TrendingProductsComponent from "@/components/TrendingProductsComponent.vue";
import PerksComponent from "@/components/PerksComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

defineComponent({
  components: {
    NavbarComponent,
    HeroComponent,
    TrendingProductsComponent,
    PerksComponent,
    FooterComponent,
  },
});
</script>
