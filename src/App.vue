<template>
    <div id="app">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import { Analytics } from "@vercel/analytics/next"
</script>

<style scoped></style>