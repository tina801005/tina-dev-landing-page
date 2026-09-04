<script setup lang="ts">
import BackgroundAnimateShapes from "./components/ui/BackgroundAnimateShapes.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
import HeroSection from "./components/Layout/HeroSection.vue";
import ProfileSection from "./components/Layout/ProfileSection.vue";
import AboutSection from "./components/Layout/about/AboutSection.vue";
import TheFooter from "./components/Layout/TheFooter.vue";
</script>

<template>
    <div id="top" class="w-full min-h-screen bg-[#FCFAF2] relative overflow-x-hidden flex flex-col items-center">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900">
            跳到主要內容
        </a>
        <BackgroundAnimateShapes />
        <TheHeader />
        <main id="main-content" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <HeroSection />
            <ProfileSection />
            <AboutSection />
            <TheFooter />
        </main>
    </div>
</template>

<style scoped></style>