<template>
  <section
    class="fixed backdrop-blur-lg bg-[rgba(0,0,0,0.2)] px-5 sm:px-10 top-0 w-full z-50"
  >
    <nav class="flex justify-between items-center max-w-7xl mx-auto h-32">
      <div
        v-if="show"
        @click="closeOnClickingOutside"
        class="left-0 top-0 absolute inset-0 w-screen ease-in transition-all duration-500 h-screen bg-black bg-opacity-30 -z-10"
      ></div>
      <div class="flex gap-6 place-items-center">
        <router-link to="/">
          <img
            :src="Logo"
            alt="EmannCodeLogo"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            style="color: transparent"
            class="h-36 w-32 pt-4"
          />
        </router-link>
        <div class="space-y-1 hidden md:block font-[Montserrat-Bold]">
          <h3 class="text-white font-bold tracking-[0.48px]">
            Frontend Developer <span class="text-accent">- EmannCode</span>
          </h3>
          <p
            class="font-[Montserrat-Regular] text-white opacity-50 text-sm tracking-[0.42px]"
          >
            Olajubaje IfeOluwa E.
          </p>
        </div>
      </div>
      <ul class="hidden md:flex gap-4 font-[Montserrat-Bold]">
        <router-link
          to="/"
          :class="[
            isActiveLink('/')
              ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
              : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
          ]"
          >Home</router-link
        >
        <router-link
          to="/projects"
          :class="[
            isActiveLink('/projects')
              ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
              : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
          ]"
          >Projects</router-link
        >
        <router-link
          to="/about"
          :class="[
            isActiveLink('/about')
              ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
              : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
          ]"
          >About</router-link
        >
      </ul>
      <button @click="openMenu" class="md:hidden">
        <span v-if="!show">
          <i class="pi pi-equals text-4xl cursor-pointer"></i>
        </span>
        <span v-else>
          <i class="pi pi-times text-4xl cursor-pointer relative"></i>
        </span>
      </button>
    </nav>
    <transition name="slide-fade">
      <div
        v-if="show"
        class="md:hidden absolute top-24 right-0 translate-x-0 opacity-100 transition-all animate-ease-out duration-500 z-30 bg-primary p-10"
      >
        <ul class="flex flex-col gap-4 text-center font-[Montserrat-SemiBold]">
          <router-link
            to="/"
            @click="closeMenuOnMobile"
            :class="[
              isActiveLink('/')
                ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
                : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
            ]"
            >Home</router-link
          >
          <router-link
            to="/projects"
            @click="closeMenuOnMobile"
            :class="[
              isActiveLink('/projects')
                ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
                : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
            ]"
            >Projects</router-link
          >
          <router-link
            to="/about"
            @click="closeMenuOnMobile"
            :class="[
              isActiveLink('/about')
                ? 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 bg-accent ease-in transition-all'
                : 'px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 false ease-in transition-all',
            ]"
            >About</router-link
          >
        </ul>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Logo from "../assets/EmannCode01 Logo.svg";

const route = useRoute();

const isActiveLink = (routePath) => {
  return route.path === routePath;
};

function closeOnClickingOutside() {
  show.value = false;
}

function closeMenuOnMobile() {
  show.value = false;
}

const show = ref(false);

function openMenu() {
  show.value = !show.value;
}
</script>

<style scoped></style>
