<!-- 只放頁首logo+nav
1. logo
    a. 點擊回首頁
    b. 顯示在線狀態10:00-18:00顯示綠色圓點為在線，其他時間及星期二顯示灰色原點表示離線或忙碌中
    c. 與footer的logo共用，所以除了logo單獨拆出component之外，連ts時間檢查邏輯也要拆出composables
2. nav
    a. mobile為漢堡選單+黑色半遮罩
    b. mobile要有close button(自製) -->

<script setup lang="ts">
    import { ref } from "vue";
    import StatusLogo from "../ui/StatusLogo.vue";

    // 漢堡選單狀態
    const isMenuOpen = ref(false);

    const handleClickOutside = () => {
        isMenuOpen.value = false;
    };

</script>

<template>
    <nav class="fixed flex w-[calc(100%-1rem)] h-16 items-center justify-between px-6 m-3
    shadow-lg rounded-full bg-white/5 backdrop-blur-sm border-b border-slate-100/10 z-20
    md:rounded-full">
        <!-- logo -->
        
      
            <StatusLogo />
        

        <!-- menu -->
        <!-- mobile -->
        
        <div class="md:hidden">
            <!-- 漢堡選單 -->
            <button class="cursor-pointer  text-slate-500 hover:text-slate-800" @click="isMenuOpen = true">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button> 
        </div>
        
        <!-- table -->
        <div class="hidden md:block">
            <ul class="flex gap-6 text-slate-500 text-md font-medium tracking-wide">
                <li class="hover:underline hover:text-slate-800"><a href="#portfolio-section">作品集</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#about">關於我</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#services">服務項目</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#contact">聯絡我</a></li>
            </ul>
        </div>
        
    </nav>
    <!-- mobile menu -->
    <div id="mobile-menu" class="fixed top-0 right-0 bottom-0 left-0 bg-black/50 backdrop-blur-sm z-30"
    v-if="isMenuOpen" @click="handleClickOutside
    ">
        <!-- close button -->
        <div class="w-5 h-5 p-6 flex justify-center items-center cursor-pointer absolute top-4 right-4 rounded-full 
        hover:shadow-lg hover:bg-white/30 border border-transparent hover:border-slate-100/10
    ">
           <button class="cursor-pointer text-slate-500 hover:text-slate-800" @click="isMenuOpen = false">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button> 
        </div>
        
        <div class="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 ">
            <ul class="flex flex-col gap-6 text-white text-lg font-medium tracking-wide">
                <li class="hover:underline hover:text-slate-800"><a href="#portfolio-section">作品集</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#about">關於我</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#services">服務項目</a></li>
                <li class="hover:underline hover:text-slate-800"><a href="#contact">聯絡我</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>