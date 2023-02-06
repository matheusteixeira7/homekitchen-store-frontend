<template>
  <section aria-labelledby="trending-heading">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
      <div class="md:flex md:items-center md:justify-between">
        <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
          Trending Products
        </h2>
        <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        <div v-for="product in trendingProducts" :key="product.id" class="group relative">
          <div class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            <a :href="product.href">
              <span class="absolute inset-0" />
              {{ product.name }}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
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
import { ref } from "vue";

import product1Image from "@/assets/images/HENCKELS-cutlery.jpg";
import product2Image from "@/assets/images/syvio-knife-set.jpg";
import product3Image from "@/assets/images/product-3.jpg";

defineComponent({
  name: "TrendingProductsComponent",
});

const trendingProducts = ref([
  {
    id: 1,
    name: "HENCKELS Premium Quality 15-Piece Knife Set with Block, Razor-Sharp, German Engineered Knife Informed by over 100 Years of Masterful Knife Making, Lightweight and Strong, Dishwasher Safe",
    color: "Natural",
    price: "$129,99",
    href: "#",
    imageSrc: product1Image,
    imageAlt: "HENCKELS Premium Quality 15-Piece Knife Set.",
  },
  {
    id: 2,
    name: "Syvio Knife Sets for Kitchen with Block, Kitchen Knife Sets 14 Piece with Built-in Sharpener, Kitchen Knives for Chopping, Slicing, Dicing&Cutting",
    color: "Black",
    price: "$49,99",
    href: "#",
    imageSrc: product2Image,
    imageAlt: "Syvio 14-piece Knife Set.",
  },
  {
    id: 3,
    name: "Fancy Homi Pack of 2 Boho Decorative Throw Pillow Covers with Pom-poms, Soft Corduroy Accent Solid Square Cushion Case Set for Couch Sofa Bedroom Car Living Room (18x18 Inch/45x45 cm, Cream)",
    color: "Cream",
    price: "$15,99",
    href: "#",
    imageSrc: product3Image,
    imageAlt: "Pillows.",
  },
  {
    id: 4,
    name: "DEELAND Pack of 2 Faux Fur Plush Decorative Throw Pillow Covers Fuzzy Striped Soft Pillowcase Cushion Covers for Sofa Couch Bedroom 18x18 inch",
    color: "Cream",
    price: "$22,99",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/91B9hjMaebL._AC_SL1500_.jpg",
    imageAlt: "Pillows.",
  },
  {
    id: 5,
    name: "JUSPURBET Decorative Lumbar Velvet Pillow Covers with Wave Striped,Pack of 2 Luxury Soft Cushion Cases for Couch Sofa Living Room,12x20 Inches,Turquoise",
    color: "Blue",
    price: "$15,99",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/812Z-yCDtAL._AC_SL1500_.jpg",
    imageAlt: "Pillows.",
  },
  {
    id: 6,
    name: "Nestl White Duvet Cover Queen Size - Soft Queen Duvet Cover Set, 3 Piece Double Brushed Queen Size Duvet Covers with Button Closure, 1 Duvet Cover 90x90 inches and 2 Pillow Shams",
    color: "White",
    price: "$26,49",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/718JWEwJ2XL._AC_SL1500_.jpg",
    imageAlt: "A duvet cover over a bed.",
  },
  {
    id: 7,
    name: "Brandream Kids Bedding Set Boy Twin Size Cars Trucks Construction Bedding Cotton 3-Piece Duvet Cover Set(No Comforter Included)",
    color: "White",
    price: "$69,90",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/81IKm2uMt2L._AC_SL1500_.jpg",
    imageAlt: "A duvet cover over a bed.",
  },
  {
    id: 8,
    name: "FineDine 24-Piece Superior Glass Food Storage Containers Set - Newly Innovated Hinged Locking lids - 100% Leakproof Glass Meal-Prep Containers, Great On-the-Go & Freezer-to-Oven-Safe Food Containers",
    color: "Transparent",
    price: "$38,99",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/81X-71ShAVL._AC_SL1500_.jpg",
    imageAlt: "24 pieces of glass food storage.",
  },
]);
</script>
