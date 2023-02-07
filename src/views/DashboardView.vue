<template>
  <DashboardComponent>Content here</DashboardComponent>
</template>

<script setup lang="ts">
import DashboardComponent from "@/components/DashboardComponent.vue";
import { defineComponent } from "vue";

defineComponent({
  name: "DashboardView",
  components: {
    DashboardComponent,
  },
});
</script>
