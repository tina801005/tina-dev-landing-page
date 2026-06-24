<!-- Hero"模擬聊天室窗口" 
主體：聊天視窗+[A提問1+B回覆1]+[A提問2+B回覆2] 
設計：跟nav一樣，毛玻璃微透明，對話氣泡兩端圓圓且A和B顏色不同
動畫效果：自動且循環撥放
邏輯：對話內容用渲染的-->

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
        clientText:"你好，我有一份設計稿，想找一位好溝通、切版精準的前端工程師合作！",
        tinaText:"HI~那妳找對人囉！好溝通、理解力強是我的核心特質。我擅長透過邏輯分析，可以1:1還原 Figma 設計稿，製作出符合您預期的完美網站唷✨",
        a11yText:"提問者說：你好，我有一份設計稿，想找一位好溝通、切版精準的前端工程師合作！Tina回答：HI~那妳找對人囉！好溝通、理解力強是我的核心特質。我擅長透過邏輯分析，可以1:1還原 Figma 設計稿，製作出符合您預期的完美網站唷～"
    },
    {id:2,
        clientText:"我想製作一頁式網站，但我沒有設計稿，請問妳也能幫我處理嗎？",
        tinaText:"當然沒問題！只要說出您的構想與需求，我能協助您梳理脈絡、積極溝通討論。即使沒有設計稿，也能合力打造出您心目中的理想網站！",
        a11yText:"提問者說：我想製作一頁式網站，但我沒有設計稿，請問妳也能幫我處理嗎？Tina回答：當然沒問題！只要說出您的構想與需求，我能協助您梳理脈絡、積極溝通討論。即使沒有設計稿，也能合力打造出您心目中的理想網站！"
    },
    {id:3,
        clientText:"網站上線後，如果有一些專業技術問題，或是小疑惑想諮詢怎麼辦？",
        tinaText:"隨時歡迎！不論是案件完成後的疑惑，或者對前端開發感興趣，我都很樂意為您提供專業諮詢與支援🤝",
        a11yText:"提問者說：網站上線後，如果有一些專業技術問題，或是小疑惑想諮詢怎麼辦？Tina回答：隨時歡迎！不論是案件完成後的疑惑，或者對前端開發感興趣，我都很樂意為您提供專業諮詢與支援！"
    },
    {id:4,
        clientText:"我很想製作專屬網站，但我的預算稍微有限…該怎麼辦呢？",
        tinaText:"別擔心！Tina Studio 的報價皆符合市場標準。您可以先參考我的【服務與報價】，也很歡迎直接私訊跟我詳細聊聊，一起討論出最合適的方案！😊",
        a11yText:"提問者說：我很想製作專屬網站，但我的預算稍微有限…該怎麼辦呢？Tina回答：別擔心！Tina Studio 的報價皆符合市場標準。您可以先參考我的【服務與報價】，也很歡迎直接私訊跟我詳細聊聊，一起討論出最合適的方案！"
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
            <span class="font-mono text-xs tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                FRONTEND DEVELOPER
            </span>
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
                        <div class="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold shrink-0 ">
                            <span class="text-lg">C</span>
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