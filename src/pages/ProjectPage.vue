<template>
    <section class="px-5 pt-32 m:px-10">
        <div class="flex flex-col mx-auto max-w-7xl animate-fade-up animate-duration-[1500ms] animate-ease-out">
            <div class="w-full mt-12">
                <div
                    class="mb-8 text-center animate-fade-up animate-duration-[1500ms] animate-delay-[200ms] animate-ease-out">
                    <h2 class="text-2xl font-[Montserrat-Bold] tracking-[0.54px] text-white mb-4">
                        Interactive Project Demo
                    </h2>
                    <p class="text-gray-400 tracking-[0.42px] font-[Montserrat-Regular] max-w-2xl mx-auto">
                        Experience my projects firsthand. Select a project below to interact
                        with it directly in your browser.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    <div @click="toggleCircle(index)" v-for="(project, index) in projects" :key="project.id"
                        class="relative group cursor-pointer transition-all duration-300 ease-in-out bg-white bg-opacity-[8%] rounded-lg p-4 animate-fade-up animate-duration-[1500ms] animate-delay-[400ms] animate-ease-out border border-solid border-transparent hover:border-red-500 hover:bg-opacity-[12%] hover:scale-105">
                        <div class="relative mb-3 overflow-hidden rounded-lg">
                            <img :src="project.url" :alt="project.title" loading="lazy" width="300" height="200"
                                decoding="async" data-nimg="1"
                                class="object-cover object-center w-full h-32 transition-transform duration-300 group-hover:scale-110"
                                style="color: transparent;">
                        </div>
                        <div
                            class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg ">
                            <div class="text-center text-white">
                                <div class="w-8 h-8 mx-auto grid space-y-2 -my-16 justify-center place-items-center">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z">
                                        </path>
                                    </svg>
                                    <span class="text-xs font-[Montserrat-Medium] text-nowrap">Launch Demo</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-bold text-white tracking-[0.48px] mb-2">{{ project.title }}</h3>
                            <p v-if="!expanded" class="text-sm text-gray-400 tracking-[0.42px] line-clamp-2">
                                <template v-if="index === 0">
                                    {{ truncateText(project.description, 10) }}
                                    <span v-if="project.description.split(' ').length > 10">...</span>
                                </template>
                                <template v-else>
                                    {{ project.description }}
                                </template>
                            </p>
                        </div>
                        <div v-if="activeIndex === index"
                            class="absolute w-3 h-3 bg-red-500 rounded-full top-2 right-2 animate-pulse">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-if="activeIndex !== null" ref="previewRef"
                        class="relative animate-fade-up animate-duration-[1000ms] animate-ease-out">
                        <div
                            class="relative mb-4 p-4 bg-white bg-opacity-[8%] rounded-lg border border-red-500 border-opacity-30">
                            <button @click.stop="cancelCircle"
                                class="absolute p-2 text-gray-400 transition-colors duration-200 top-4 right-4 hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                    </path>
                                </svg>
                            </button>
                            <div class="pr-12">
                                <h3 class="text-xl font-[Montserrat-Bold] text-white tracking-[0.48px]">
                                    {{ projects[activeIndex]?.title || 'Project Name' }}
                                </h3>
                                <p class="text-sm text-gray-400 tracking-[0.42px] mt-1">{{
                                    projects[activeIndex]?.description }}</p>
                            </div>
                            <!-- Loader -->
                            <div v-if="isLoading && !isGithubLink"
                                class="flex flex-col items-center justify-center py-12 text-center">
                                <svg class="w-8 h-8 animate-spin text-red-500 mb-3" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z">
                                    </path>
                                </svg>
                                <p class="text-gray-300 text-sm">
                                    Loading <span class="font-semibold text-white">{{ projects[activeIndex]?.title
                                    }}</span>...
                                </p>
                            </div>
                            <div class="mt-4">
                                <a :href="projects[activeIndex]?.link || ''" target="_blank" rel="noopener noreferrer"
                                    class="relative inline-flex items-center gap-1 group px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700">
                                    <svg class="overflow-hidden animate-pulse max-w-0 opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 w-4 h-4"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                                        </path>
                                    </svg>
                                    {{ isGithubLink ? "Open GitHub" : "Open Full Site" }}
                                </a>
                            </div>
                            <div v-if="githubLink" v-show="!isLoading" class="absolute bottom-4 right-4 inline-block">
                                <div
                                    class="relative px-2 font-[Montserrat-SemiBold] text-gray-400 border border-white border-opacity-30 rounded-full transition-all duration-300 animate-fade-up hover:text-white">

                                    <a :href="projects[activeIndex]?.githubLink || ''" target="_blank"
                                        rel="noopener noreferrer" class="inline-flex items-center gap-1 group">
                                        <span>GitHub</span>
                                        <span
                                            class="overflow-hidden max-w-0 opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
                                            Link
                                        </span>
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div v-show="!isLoading" v-if="!isGithubLink"
                            class="relative overflow-hidden bg-white border border-red-500 rounded-lg border-opacity-30">
                            <iframe :src="projects[activeIndex]?.link || ''" class="w-full h-[600px] border-0"
                                :title="projects[activeIndex]?.title || 'Project Name'"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                                @load="iframeLoaded"></iframe>
                        </div>
                    </div>
                    <div v-else class=" py-12 text-center animate-fade-up animate-duration-[1500ms] animate-delay-[600ms]
                                            animate-ease-out">
                        <div class="w-16 h-16 mx-auto mb-4 text-gray-600">
                            <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z">
                                </path>
                            </svg>
                        </div>
                        <p class="text-gray-400 tracking-[0.42px] max-w-md mx-auto">Choose any
                            project from the grid
                            above
                            for a preview.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick, computed } from 'vue';

const projects = [
    {
        id: 1, title: "Light & Dark Mode Navbar",
        url: new URL("@/assets/NavBar Design.png", import.meta.url).href,
        description: "Navigation bar with light and dark mode support, allowing users to switch themes seamlessly for a better browsing experience.",
        link: "https://github.com/Emann-Code-01/nav-bar-design.git"
    },
    {
        id: 2,
        title: "Portfolio", url: new URL("@/assets/potfolio.png", import.meta.url).href,
        description: "This is my personal portfolio website where I showcase my journey as a frontend developer. It highlights my featured projects, including interactive UI components like a responsive navbar with light and dark mode, and an advanced image gallery with filters and dual viewing modes. The site is fully responsive, designed to work across devices, and serves as both a professional showcase of my skills and a personal space to share my growth in web development.",
        link: "https://emanncode.vercel.app",
        githubLink: "https://github.com/Emann-Code-01/personal-potfolio.git"
    },
    {
        id: 3,
        title: "Ultimate Image Gallery",
        url: new URL("@/assets/image-gallery.png", import.meta.url).href,
        description: "An advanced image gallery with search, filters, and dual viewing modes (grid and slideshow) for a smooth and interactive browsing experience.",
        link: "https://github.com/Emann-Code-01/Image-Gallery.git"
    },
    {
        id: 4,
        title: "FilmRitz – Netflix-Inspired Movie Explorer",
        url: new URL("@/assets/FilmRitz.png", import.meta.url).href,
        description: "FilmRitz is a modern, Netflix-inspired movie discovery platform built with Vue.js and TailwindCSS. It integrates The Movie Database (TMDB) API to fetch real-time trending films, offering users a sleek interface to explore, search, and preview movies. Key features include a responsive Netflix-style carousel using Swiper.js, smooth animations, and dynamic UI elements that replicate the look and feel of a streaming service.",
        link: "https://github.com/Emann-Code-01/movie-explorer.git",
        githubLink: "https://github.com/Emann-Code-01/movie-explorer.git"
    }
]

const activeIndex = ref(null);
const previewRef = ref(null);
const isLoading = ref(false);
const expanded = ref(false);

function toggleCircle(index) {
    activeIndex.value = index;
    isLoading.value = true;
    nextTick(() => {
        if (previewRef.value) {
            previewRef.value.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}

function cancelCircle() {
    activeIndex.value = null;
    isLoading.value = false;
}

function iframeLoaded() {
    isLoading.value = false; // stop loading when iframe is ready
}

const isGithubLink = computed(() => {
    if (activeIndex.value === null) return false
    return projects[activeIndex.value]?.link?.includes(".git")
})

const githubLink = computed(() => {
    if (activeIndex.value === null) return true
    return projects[activeIndex.value]?.githubLink?.includes(".git")
})

function truncateText(text, limit = 10) {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") : text;
}
</script>

<style scoped></style>