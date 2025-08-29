<template>
    <section class="relative min-h-[80vh] mt-26 md:min-h-[70vh] lg:min-h-[100vh] place-content-center grid bg-hero md:pb-5 lg:pb-0">
        <div class="relative flex flex-col items-center w-4/5 mx-auto sm:w-2/3 max-w-7xl">
            <div class="absolute -top-5 lg:left-0 -left-5 animate-pulse">
                <div class="relative p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white border-opacity-10">
                    <span
                        class="px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] font-[Montserrat-Bold] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]">Vue.js</span>
                    <img loading="lazy" width="14" height="19" decoding="async" data-nimg="1"
                        class="absolute -bottom-3 -right-1 animate-bounce" style="color:transparent"
                        src="../../assets/cursor1.svg" alt="cursor1">
                </div>
            </div>
            <div class="relative -top-16 p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white
                    border-opacity-10 animate-pulse">
                <span
                    class="px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] font-[Montserrat-Bold] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]">TailwindCSS</span>
                <img loading="lazy" width="14" height="19" decoding="async" data-nimg="1"
                    class="absolute -bottom-3 -right-1 animate-bounce" style="color:transparent"
                    src="../../assets/cursor2.svg" alt="cursor2">
            </div>
            <div class="absolute -top-5 lg:right-0 -right-5">
                <div class="p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white border-opacity-10 animate-pulse">
                    <span
                        class="px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] font-[Montserrat-Bold] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]">JavaScript</span>
                    <img loading="lazy" width="14" height="19" decoding="async" data-nimg="1"
                        class="absolute -bottom-3 -right-1 animate-bounce" style="color:transparent"
                        src="../../assets/cursor3.svg" alt="cursor3">
                </div>
            </div>
            <h1
                class="mb-[7px] animate-fade-up animate-duration-[1500ms] animate-ease-out text-base font-[Montserrat-SemiBold]">
                Hi, my name is
                IfeOluwa Olajubaje Emmanuel</h1>
            <h2
                class="text-2xl font-[Montserrat-Bold] md:text-3xl xl:text-5xl font-bold tracking-[1.44px] text-center xl:leading-snug mb-[25px] md:mb-[53px] animate-fade-up animate-duration-[1500ms] animate-delay-[400ms] animate-ease-out">
                I craft <span class="text-accent" style="font-style: italic;">exceptional</span> web experiences through
                modern frontend <span class="text-accent" style="font-style: italic;">development</span>.</h2>
            <div
                class="px-4 md:px-5 font-[Montserrat-Bold] py-[10px] md:py-3 bg-accent bg-opacity-20 flex gap-6 items-center rounded-lg animate-fade-up animate-duration-[1500ms] animate-delay-[800ms] animate-ease-out">
                <p>Check out my projects</p>
                <router-link to="/projects">
                    <img src="../../assets/arrow.svg" alt="arrow pointing to the left" loading="lazy" width="40"
                        height="40" decoding="async" data-nimg="1"
                        class="transition-all ease-in hover:scale-105 animate-pulse" style="color:transparent;">
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped></style>