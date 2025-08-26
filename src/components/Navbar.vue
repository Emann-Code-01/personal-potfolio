<template>
    <section class="top-0 w-full z-50 backdrop-blur-lg bg-[#00000033] fixed">
        <nav class="flex justify-between items-center max-w-7xl mx-auto h-24">
            <div class="flex gap-6 items-center">
                <router-link to="">
                    <img :src="Logo" alt="EmannCodeLogo" loading="lazy" decoding="async" data-nimg="1"
                        style="color:transparent" class="w-26">
                </router-link>
                <div class="space-y-1 hidden md:block font-[Montserrat-Bold]">
                    <h3 class="text-white font-bold tracking-wider">Frontend Developer</h3>
                    <p>Olajubaje IfeOluwa E. aka EmannCode01</p>
                </div>
            </div>
            <ul class="hidden md:flex gap-4 font-[Montserrat-Bold]">
                <li><a
                        class="text-gradient rounded-full border border-white border-opacity-30 tracking-wider text-sm hover:bg-accent hover:border-opacity-30 bg-accent ease-in transition-all px-5 py-2.5">Home</a>
                </li>
                <li><a class="text-gradient">Projects</a>
                </li>
                <li><a class="text-gradient">About</a>
                </li>
            </ul>
            <i class="pi pi-equals text-2xl cursor-pointer md:hidden"></i>
        </nav>
    </section>
</template>

<script setup>
import Logo from "../assets/EmannCode01 Logo.svg";
</script>

<style scoped></style>