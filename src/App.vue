<script setup lang="ts">
import BackgroundAnimateShapes from "./components/ui/BackgroundAnimateShapes.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
import HeroSection from "./components/Layout/HeroSection.vue";
</script>

<template>
    <div class="w-full min-h-screen bg-[#FCFAF2] relative overflow-x-hidden">
        <BackgroundAnimateShapes />
        <TheHeader />
        <div class="border border-red-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <HeroSection />
        </div>
    </div>
</template>

<style scoped></style>