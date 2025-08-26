<template>
    <div id="app">
        <Navbar />
        <router-view />
        <Footer />
    </div>
    WASSUP
</template>

<script setup>

import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<style scoped></style>