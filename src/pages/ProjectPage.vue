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
                            <h3 class="font-bold text-white tracking-[0.48px] mb-2">NavBar Design</h3>
                            <p class="text-sm text-gray-400 tracking-[0.42px] line-clamp-2">This is a navbar design with
                                a dark&light mode</p>
                        </div>
                        <div v-if="activeIndex === index"
                            class="absolute w-3 h-3 bg-red-500 rounded-full top-2 right-2 animate-pulse">
                        </div>
                    </div>
                    <!-- ...repeat for each project... -->
                </div>
                <div>
                    <div v-if="activeIndex !== null"
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
                                <p class="text-sm text-gray-400 tracking-[0.42px] mt-1">Project Description</p>
                            </div>
                            <div class="mt-4">
                                <a :href="projects[activeIndex]?.url || ''" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                                        </path>
                                    </svg>
                                    Open Full Site
                                </a>
                            </div>
                        </div>
                        <div
                            class="relative overflow-hidden bg-white border border-red-500 rounded-lg border-opacity-30">
                            <iframe :src="projects[activeIndex]?.link || ''" class="w-full h-[600px] border-0"
                                :title="projects[activeIndex]?.title || 'Project Name'"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"></iframe>
                        </div>
                        <div class="mt-4 p-4 bg-white bg-opacity-[5%] rounded-lg border border-gray-700">
                            <div class="flex items-start gap-3">
                                <div
                                    class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-white font-[Montserrat-Medium] tracking-[0.42px] mb-1">Interactive
                                        Demo Instructions</h4>
                                    <p class="text-sm text-gray-400 tracking-[0.42px]">You can now interact with Medbot
                                        AI directly in this window. Use the controls above to open the full site in a
                                        new tab or close this demo.</p>
                                </div>
                            </div>
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
                        <!-- <h3 class="text-white font-medium tracking-[0.48px] mb-2">Select a project
                            demo</h3> -->
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
import { ref } from 'vue';

const projects = [
    { id: 1, title: "NavBar Design", url: new URL("@/assets/NavBar Design.png", import.meta.url).href, link: "" },
    { id: 2, title: "Portfolio", url: new URL("@/assets/potfolio.png", import.meta.url).href, link: "" },
    { id: 3, title: "Another NavBar", url: new URL("@/assets/NavBar Design.png", import.meta.url).href, link: "" },
    { id: 4, title: "Project 4", url: new URL("@/assets/NavBar Design.png", import.meta.url).href, link: "" },
    { id: 5, title: "Project 5", url: new URL("@/assets/NavBar Design.png", import.meta.url).href, link: "" },
    { id: 6, title: "Project 6", url: new URL("@/assets/NavBar Design.png", import.meta.url).href, link: "" },
]

const activeIndex = ref(null);

function toggleCircle(index) {
    activeIndex.value = index;
};

function cancelCircle() {
    activeIndex.value = null;
};
</script>

<style scoped></style>