<template>
  <!-- Mobile menu -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
          >
            <div class="flex px-4 pt-5 pb-2">
              <button
                type="button"
                class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex space-x-8 px-4">
                  <Tab
                    as="template"
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'text-indigo-600 border-indigo-600'
                          : 'text-gray-900 border-transparent',
                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="space-y-12 px-4 py-6"
                >
                  <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div
                      v-for="item in category.featured"
                      :key="item.name"
                      class="group relative"
                    >
                      <div
                        class="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
                      >
                        <img
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          class="object-cover object-center"
                        />
                      </div>
                      <a
                        :href="item.href"
                        class="mt-6 block text-sm font-medium text-gray-900"
                      >
                        <span
                          class="absolute inset-0 z-10"
                          aria-hidden="true"
                        />
                        {{ item.name }}
                      </a>
                      <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                        Shop now
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <!-- <div class="space-y-6 border-t border-gray-200 py-6 px-4">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
              </div>
            </div> -->

            <div class="space-y-6 border-t border-gray-200 py-6 px-4">
              <div class="flow-root">
                <RouterLink to="/signup">
                  <span class="-m-2 block p-2 font-medium text-gray-900"
                    >Create an account</span
                  >
                </RouterLink>
              </div>
              <RouterLink to="/signin" class="flow-root">
                <span class="-m-2 block p-2 font-medium text-gray-900"
                  >Sign in</span
                >
              </RouterLink>
            </div>

            <div class="space-y-6 border-t border-gray-200 py-6 px-4">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div
                    class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
                  >
                    <select
                      id="mobile-currency"
                      name="currency"
                      class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                    >
                      <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <header class="relative">
    <nav aria-label="Top">
      <!-- Top navigation -->
      <div class="bg-gray-900">
        <div
          class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <!-- Currency selector -->
          <form>
            <div>
              <label for="desktop-currency" class="sr-only">Currency</label>
              <div
                class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
              >
                <select
                  id="desktop-currency"
                  name="currency"
                  class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                >
                  <option v-for="currency in currencies" :key="currency">
                    {{ currency }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                >
                  <ChevronDownIcon
                    class="h-5 w-5 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </form>

          <div class="flex items-center space-x-6">
            <RouterLink to="/signin">
              <span class="text-sm font-medium text-white hover:text-gray-100"
                >Sign in</span
              >
            </RouterLink>
            <RouterLink to="/signup">
              <span class="text-sm font-medium text-white hover:text-gray-100"
                >Create an account</span
              >
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Secondary navigation -->
      <div class="bg-white divide-y divide-gray-200 border-b">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <!-- Logo (lg+) -->
            <div class="hidden lg:flex lg:flex-1 lg:items-center">
              <RouterLink to="/">
                <span class="sr-only">Home Decor</span>
                <img class="h-8 w-auto" :src="logoImg" alt="" />
              </RouterLink>
            </div>

            <div class="hidden h-full lg:flex">
              <!-- Flyout menus -->
              <PopoverGroup class="inset-x-0 bottom-0 px-4">
                <div class="flex h-full justify-center space-x-8">
                  <Popover
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="flex"
                    v-slot="{ open }"
                  >
                    <div class="relative flex">
                      <PopoverButton
                        :class="[
                          open
                            ? 'text-indigo-600'
                            : 'text-gray-700 hover:text-gray-800',
                          'relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out',
                        ]"
                      >
                        {{ category.name }}
                        <span
                          :class="[
                            open ? 'bg-indigo-600' : '',
                            'absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out',
                          ]"
                          aria-hidden="true"
                        />
                      </PopoverButton>
                    </div>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <PopoverPanel
                        class="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500"
                      >
                        <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                        <div
                          class="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />
                        <!-- Fake border when menu is open -->
                        <div
                          class="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                          aria-hidden="true"
                        >
                          <div
                            :class="[
                              open ? 'bg-gray-200' : 'bg-transparent',
                              'h-px w-full transition-colors duration-200 ease-out',
                            ]"
                          />
                        </div>

                        <div class="relative">
                          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div
                              class="grid grid-cols-4 gap-y-10 gap-x-8 py-16"
                            >
                              <div
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative"
                              >
                                <div
                                  class="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
                                >
                                  <img
                                    :src="item.imageSrc"
                                    :alt="item.imageAlt"
                                    class="object-cover object-center"
                                  />
                                </div>
                                <a
                                  :href="item.href"
                                  class="mt-4 block font-medium text-gray-900"
                                >
                                  <span
                                    class="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {{ item.name }}
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </transition>
                  </Popover>

                  <!-- <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
                  -->
                </div>
              </PopoverGroup>
            </div>

            <!-- Mobile menu and search (lg-) -->
            <div class="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                @click="open = true"
              >
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Search -->
              <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            <!-- Logo (lg-) -->
            <RouterLink to="/" class="lg:hidden">
              <span class="sr-only">Your Company</span>
              <img :src="logoImg" alt="" class="h-8 w-auto" />
            </RouterLink>

            <div class="flex flex-1 items-center justify-end">
              <a
                href="#"
                class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                >Search</a
              >

              <div class="flex items-center lg:ml-8">
                <!-- Help -->
                <a
                  href="#"
                  class="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                >
                  <span class="sr-only">Help</span>
                  <QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                  >Help</a
                >

                <!-- Cart -->
                <div class="ml-4 flow-root lg:ml-8">
                  <a href="#" class="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span
                      class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                      >0</span
                    >
                    <span class="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import logoImg from "@/assets/logo.svg";

defineComponent({
  name: "NavbarComponent",
});

const currencies = ref(["USD", "CAD"]);
const navigation = {
  categories: [
    {
      name: "Home D??cor",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://foyr.com/learn/wp-content/uploads/2021/07/home-decor-trends-2021.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "D??cor",
          href: "#",
          imageSrc:
            "https://www.modibuilders.com/wp-content/uploads/Diwali-Home-Decor-2.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Bed & Bath",
          href: "#",
          imageSrc:
            "https://expertreviews.b-cdn.net/sites/expertreviews/files/2020/09/best_bedding_la_redoute_saraya_floral_duvet_cover_1.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Garden & Outdoor",
          href: "#",
          imageSrc:
            "https://static.standard.co.uk/2022/03/03/15/OKA-UK-cushions-lifestyle2jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Kitchen",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/736x/1d/c4/a6/1dc4a6e70a87e7c51f22a4829b99ebac.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Kitchen & Dining",
          href: "#",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0370/8924/7291/products/KnifeSet-Poke_482x600.png?v=1673534015",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Storage & Organization",
          href: "#",
          imageSrc:
            "https://www.ikea.com/images/wall-shelves-mounted-on-white-tiles-store-this-kitchens-most-235a44f46e3a6fef2f59ff61b4437b71.jpg?f=xxxl",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
      ],
    },
  ],
  pages: [],
};

const open = ref(false);
</script>
