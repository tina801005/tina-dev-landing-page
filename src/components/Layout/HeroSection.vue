<!-- Hero"模擬聊天室窗口" 
主體：聊天視窗+[A提問1+B回覆1]+[A提問2+B回覆2] 
設計：跟nav一樣，毛玻璃微透明，對話氣泡兩端圓圓且A和B顏色不同
動畫效果：自動且循環撥放
邏輯：對話內容用渲染的-->

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import BaseTag from "../ui/BaseTag.vue";
// TODO: 對話內容用渲染的，並且自動且循環撥放
// 對話陣列內容屬性宣告
interface ChatItem {
    id: number;
    clientText: string;
    tinaText: string;
    a11yText: string;
};

// 對話內容陣列-提問(clientText)+回答(tinaText)+a11y(a11yText)讀取專用
const chatContent = ref<ChatItem[]>([
    {id:1,
        clientText:"我們團隊剛好有一份設計稿，想找能精準還原且好溝通的前端工程師！",
        tinaText:"那你找對人囉！好溝通、理解力強是我的核心特質。我習慣先進行設計稿分析，透過邏輯架構拆解，1:1 精準還原 Figma 設計並維持高品質 Code Review✨",
        a11yText:"提問者說：我們團隊剛好有一份設計稿，想找能精準還原且好溝通的前端工程師！Tina回答：那你找對人囉！好溝通、理解力強是我的核心特質。我習慣先進行設計稿分析，透過邏輯架構拆解，1:1 精準還原 Figma 設計並維持高品質 Code Review！"
    },
    {id:2,
        clientText:"專案開發時，遇到技術瓶頸或是邏輯不明確的情境妳會如何處理？",
        tinaText:"我會先獨立查閱文檔與排查 Bug，並善用 AI 輔助優化架構；若涉及業務邏輯，會主動梳理問題清單與團隊積極討論，確保開發方向一致！",
        a11yText:"提問者說：專案開發時，遇到技術瓶頸或是邏輯不明確的情境妳會如何處理？Tina回答：我會先獨立查閱文檔與排查 Bug，並善用 AI 輔助優化架構；若涉及業務邏輯，會主動梳理問題清單與團隊積極討論，確保開發方向一致！"
    },
    {id:3,
        clientText:"看到妳的作品有考慮到 a11y 與 CI/CD，為什麼自學階段會注意到這些細節？",
        tinaText:"因為我認為優秀的前端不只是把畫面刻出來，更要注重使用者體驗與程式碼的維護性！自動化部署能提升開發效率，而 a11y 能讓更多人順暢使用產品🤝",
        a11yText:"提問者說：看到妳的作品有考慮到 a11y 與 CI/CD，為什麼自學階段會注意到這些細節？Tina回答：因為我認為優秀的前端不只是把畫面刻出來，更要注重使用者體驗與程式碼的維護性！自動化部署能提升開發效率，而 a11y 能讓更多人順暢使用產品🤝"
    },
    {id:4,
        clientText:"請問妳目前尋求的合作模式是什麼呢？",
        tinaText:"因家庭照顧時間安排，目前優先尋求全遠端（Fully Remote）或時間具備彈性的前端開發合作團隊，歡迎直接聯繫我聊聊合作細節唷！😊",
        a11yText:"提問者說：請問妳目前尋求的合作模式是什麼呢？Tina回答：因家庭照顧時間安排，目前優先尋求全遠端（Fully Remote）或時間具備彈性的前端開發合作團隊，歡迎直接聯繫我聊聊合作細節唷！😊"
    }
]);

// 輪播時，僅顯示一組對話，其餘對話隱藏，並且有淡入淡出動畫效果
const currentChatIndex = ref(0); // 當前顯示的對話索引
// 使用 setInterval 來實現自動輪播，並且在每次輪播時，將 currentChatIndex 加 1，當 currentChatIndex 超過 chatContent 長度時，重置為 0
let intervalId: number | undefined; // 用於存儲 setInterval 的 ID

// 啟動輪播
const startCarousel = () => {
    if (intervalId === undefined) {
        intervalId = window.setInterval(() => {
            currentChatIndex.value = (currentChatIndex.value + 1) % chatContent.value.length;
        }, 6000); // 每6秒輪播一次
    }
};

// 暫停輪播
const pauseCarousel = () => {
    if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
    }
};

// 組件掛載時啟動輪播
onMounted(() => {
    startCarousel();
});

// 組件卸載時清除輪播
onUnmounted(() => {
    pauseCarousel();
});



</script>

<template>
    <section class="min-h-[85vh] flex flex-col items-center justify-center relative z-10 gap-4">
        <!-- Hero Content簡單自我介紹 -->
        <div class="text-center mb-10 flex flex-col items-center gap-3">
            <BaseTag class="bg-emerald-500/10 text-emerald-400">
                FRONTEND DEVELOPER
            </BaseTag>
            <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-wide ">
                嗨，我是 <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-200">Tina</span>
            </h1>
            <p class="text-slate-400 text-sm md:text-base tracking-wide max-w-md">
                我是一名前端開發工程師，歡迎來到我的作品集😉
            </p>
        </div>
        <div 
            class="w-full bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col gap-12 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
            @mouseenter="pauseCarousel"
            @mouseleave="startCarousel"
        >
            <transition name="fade"  mode="out-in">
                <div 
                    :key="chatContent[currentChatIndex].id"
                    class="grid grid-cols-1 grid-rows-1 col-start-1 row-start-1 gap-12 w-full transition-all duration-500 ease-in-out h-75 py-5"
                    >

                    <div class="flex justify-start w-full items-center gap-4">
                        <!-- 圓形頭像 -->
                        <div class="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white shrink-0 shadow-inner">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                aria-hidden="true"
                                class="w-6 h-6 object-contain">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                        </div>
                       
                        <!-- 氣泡框 -->
                        <div class="relative max-w-xl p-5 rounded-2xl  shadow-lg bg-blue-100 backdrop-blur-md border border-blue-500/15  
                        after:content-[''] after:absolute after:bottom-[calc(55%-1rem)]  after:-left-2 after:h-4 after:w-4 after:rotate-45 after:bg-blue-100 after:border-l after:border-b after:border-blue-500/15">
                            <p class="text-slate-700 text-sm md:text-base leading-relaxed relative z-10">
                                {{ chatContent[currentChatIndex].clientText }}
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-end w-full items-center gap-4">
                        <div class="relative max-w-xl p-5 rounded-2xl  shadow-lg bg-pink-100 backdrop-blur-md border border-pink-500/15
                        after:content-[''] after:absolute after:bottom-[calc(55%-1rem)] after:-right-2 after:h-4 after:w-4 after:rotate-45 after:bg-pink-100 after:border-r after:border-t after:border-pink-500/15">
                            
                            <p class="text-slate-700 text-sm md:text-base leading-relaxed relative z-10">
                                {{ chatContent[currentChatIndex].tinaText }}
                            </p>
                        </div>
                        <!-- 圓形頭像 -->
                        <div class="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold shrink-0">
                            <span class="text-lg">T</span>
                        </div>
                        <!-- <p class="font-sm text-slate-700">B</p> -->
                    </div>
                    <!-- for a11y讀取 -->
                    <p class="sr-only" aria-live="polite">
                        {{ chatContent[currentChatIndex].a11yText }}
                    </p>
                </div>
            </transition>
        </div>
        
    </section>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

</style>