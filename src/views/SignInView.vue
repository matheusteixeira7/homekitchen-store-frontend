<script setup lang="ts">
import { ref, defineComponent } from "vue";

import SubmitButton from "@/components/forms/SubmitButton.vue";
import EmailField from "@/components/forms/EmailField.vue";
import PasswordField from "@/components/forms/PasswordField.vue";
import RememberMeCheckbox from "@/components/forms/RememberMeCheckbox.vue";
import IconButton from "@/components/buttons/IconButton.vue";

import logoImg from "@/assets/logo.svg";

defineComponent({
  name: "SignInView",
  components: {
    SubmitButton,
    EmailField,
    PasswordField,
    RememberMeCheckbox,
    IconButton,
  },
});

const socialLogins = [
  {
    text: "Sign in with Facebook",
    link: "https://facebook.com",
    icon: "fa-brands fa-facebook",
  },
  {
    text: "Sign in with Twitter",
    link: "https://twitter.com",
    icon: "fa-brands fa-twitter",
  },
  {
    text: "Sign in with Google",
    link: "https://google.com",
    icon: "fa-brands fa-google",
  },
];
</script>

<template>
  <div class="h-screen place-items-center">
    <div
      class="flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-12 w-auto" :src="logoImg" alt="Your Company" />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >create an account</a
          >
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6">
            <EmailField />
            <PasswordField />

            <div class="flex items-center justify-between">
              <RememberMeCheckbox />

              <div class="text-sm pl-2">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Forgot your password?</a
                >
              </div>
            </div>

            <div>
              <SubmitButton> Sign in </SubmitButton>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white px-2 text-gray-500"
                  >Or continue with</span
                >
              </div>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-3">
              <IconButton
                v-for="item in socialLogins"
                :text="item.text"
                :link="item.link"
                :icon="item.icon"
                :key="item.text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
