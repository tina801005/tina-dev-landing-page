<!-- 作品集展示頁 
分成兩欄 
左側：作品名稱、一句話簡述、tag標籤(用通俗易懂的白話標籤、最後面再放專有名詞)、連結icon(link & github)、作品與作品之間用分隔線區隔(未選中時為淺灰色點點、選中時為較深的灰色實線)
右側：作品預覽 -->
<script setup lang="ts">
import BaseTag from "../ui/BaseTag.vue";
import { ref } from 'vue';

// v-for 迴圈渲染作品集陣列
interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
};

// 作品集陣列
const portfolioItems = ref<PortfolioItem[]>([
    {
        id: 1,
        title: "個人作品集網站",
        description: "結合擬真問答互動、作品集展示、EmailJS表單寄信與防護機制的個人作品集網站。",
        tags: ["無設計稿", "高品質互動體驗", "Vue3", "Vite","TailwindCSS","TypeScript","EmailJS"],
        link: "https://tina801005.github.io/loopstudios-landing-page/",
        github: "https://github.com/tina801005/tina-dev-landing-page"
    },
    {
        id: 2,
        title: "訂閱方案切換",
        description: "模擬訂閱方案以及價格切換的動畫效果",
        tags: [ "高互動性" , "高擴展性" , "RWD", "Vue3"],
        link: "https://tina801005.github.io/vue-pricing-toggle/",
        github: "https://tina801005.github.io/vue-pricing-toggle/"
    },
    {
        id: 3,
        title: "Bookmark Landing Page",
        description: "結合響應式切版、動態 Tab 頁籤與表單驗證的高完成度且具備高還原度排版與無障礙（a11y）互動細節的產品介紹網站。",
        tags: ["一頁式網站","無障礙設計", "表單即時驗證", "Vue3", "Vite","TailwindCSS","TypeScript"],
        link: "https://tina801005.github.io/bookmark-landing-page/",
        github: "https://tina801005.github.io/bookmark-landing-page/"
    },
    // {
    //     id: 4,
    //     title: "作品名稱3",
    //     description: "一句話簡述3",
    //     tags: ["標籤5", "標籤6", "專有名詞3"],
    //     link: "https://tina801005.github.io/loopstudios-landing-page/",
    //     github: "https://tina801005.github.io/loopstudios-landing-page/"
    // },
    // {
    //     id: 5,
    //     title: "作品名稱4",
    //     description: "一句話簡述4",
    //     tags: ["標籤7", "標籤8", "專有名詞4"],
    //     link: "https://tina801005.github.io/insure-landing-page/",
    //     github: "https://tina801005.github.io/insure-landing-page/"
    // },
    // {
    //     id: 5,
    //     title: "作品名稱5",
    //     description: "一句話簡述5",
    //     tags: ["標籤9", "標籤10", "專有名詞5"],
    //     link: "https://tina801005.github.io/fylo-landing-page/",
    //     github: "https://tina801005.github.io/fylo-landing-page/"
    // },
    // {
    //     id: 6,
    //     title: "作品名稱6",
    //     description: "一句話簡述6",
    //     tags: ["標籤11", "標籤12", "專有名詞6"],
    //     link: "https://tina801005.github.io/intro-component-with-signup-form/",
    //     github: "https://tina801005.github.io/intro-component-with-signup-form/"
    // }
]);
 
 // 預覽與選取狀態
 const selectedId = ref<number>(1);
 const url = ref<string>(portfolioItems.value[0]?.link ?? '');
 
 function selectItem(item: PortfolioItem) {
     selectedId.value = item.id;
     url.value = item.link;
 }

// 預覽視口調整
const fullWidth = ref<boolean>(true);
const previewWidth = ref<number>(1024);

function setPreset(width: number | 'full') {
    if (width === 'full') {
        fullWidth.value = true;
    } else {
        fullWidth.value = false;
        previewWidth.value = width;
    }
}

function openPreviewInNewTab(item: PortfolioItem) {
    window.open(item.link, '_blank', 'noopener,noreferrer');
}

function openGithubInNewTab(item: PortfolioItem) {
    window.open(item.github, '_blank', 'noopener,noreferrer');
}

// 作品資訊區會在內容超過可視高度時出現垂直捲軸，右側預覽區則不受影響


</script>

<template>
    <section id="portfolio-section" aria-labelledby="portfolio-title" class="flex flex-col items-center justify-center gap-4 mb-20">
        <!-- 作品集標題 -->
        <div class="flex flex-col items-center gap-2 mb-12">
            <BaseTag class="text-indigo-400 bg-indigo-500/10">
                PORTFOLIO
            </BaseTag>
            <h2 id="portfolio-title" class="text-2xl md:text-3xl font-bold text-white tracking-wide">
                精選作品 <span class="text-slate-400 font-light text-xl md:text-2xl">/ Projects</span>
            </h2>
        </div>

        <!-- 作品集展示頁 -->
        <div class="min-h-[65vh] w-full flex-row items-center justify-center gap-6 
        ">
            
            <!-- 資訊區 -->
            <div class="w-full min-w-65 shrink-0 overflow-y-auto rounded-lg border border-white/10 p-4">
                <p class="mb-2 text-xs tracking-[0.2em] text-slate-400">ALL PROJECT</p>
                <div class="max-h-125 overflow-y-hidden pr-2 flex flex-row flex-wrap gap-2">
                    <!-- 作品項目細節 -->
                    <div v-for="item in portfolioItems" :key="item.id" 
                    :class="['rounded-lg border px-1 py-1', selectedId === item.id ? 'border-slate-500 bg-slate-100' : 'border-slate-300 hover:bg-slate-100']">
                        <button type="button" :aria-pressed="selectedId === item.id" class="cursor-pointer rounded-full px-3 py-1 text-left text-sm tracking-wide text-slate-700" @click="selectItem(item)">
                            {{ item.title }}
                        </button>
                        
                    </div>
                </div>

                <div v-if="selectedId" class="mt-5 border-t border-slate-200 pt-5">
                    <p class="mb-2 text-xs tracking-[0.2em] text-slate-400">ABOUT THIS PROJECT</p>
                    
                    <div class="mt-4 flex gap-2">
                        <h3 class="text-xl font-medium tracking-wide text-slate-800">{{ portfolioItems.find(item => item.id === selectedId)?.title }}</h3>
                        <button type="button" :aria-label="`在新分頁預覽${portfolioItems.find(item => item.id === selectedId)?.title}`" @click="openPreviewInNewTab(portfolioItems.find(item => item.id === selectedId)!)" class="rounded-full bg-indigo-600/30 px-3 py-1 text-xs text-white cursor-pointer hover:bg-indigo-600/50">預覽</button>
                        <button type="button" :aria-label="`在新分頁開啟${portfolioItems.find(item => item.id === selectedId)?.title}的 GitHub`" @click="openGithubInNewTab(portfolioItems.find(item => item.id === selectedId)!)" class="rounded-full bg-slate-700/30 px-3 py-1 text-xs text-white cursor-pointer hover:bg-slate-700/50">GitHub</button>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-slate-500">{{ portfolioItems.find(item => item.id === selectedId)?.description }}</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <BaseTag v-for="tag in portfolioItems.find(item => item.id === selectedId)?.tags" :key="tag" class="bg-slate-500/10 text-slate-400">
                            {{ tag }}
                        </BaseTag>
                    </div>
                </div>
                <p v-else class="mt-5 border-t border-slate-200 pt-5 text-center text-sm text-slate-400">
                    請點選欲體驗的作品
                </p>
            </div >
            <!-- 預覽區  -->
            <div class="flex-1 flex flex-col items-center overflow-hidden" aria-label="作品預覽區" role="region">
                <!-- 視口控制列 -->
                <div class="w-full mb-4 flex items-center justify-between gap-4">
                    <div class="flex gap-2 text-xs" role="group" aria-label="預覽尺寸">
                        <button type="button" :aria-pressed="fullWidth" @click="setPreset('full')" class="px-3 py-1 bg-slate-700/40 text-white rounded-md cursor-pointer hover:bg-slate-700/80">全寬</button>
                        <button type="button" :aria-pressed="!fullWidth && previewWidth === 375" @click="setPreset(375)" class="px-3 py-1 bg-slate-700/40 text-white rounded-md cursor-pointer hover:bg-slate-700/80">Mobile</button>
                        <button type="button" :aria-pressed="!fullWidth && previewWidth === 768" @click="setPreset(768)" class="px-3 py-1 bg-slate-700/40 text-white rounded-md cursor-pointer hover:bg-slate-700/80">Tablet</button>
                        <button type="button" :aria-pressed="!fullWidth && previewWidth === 1280" @click="setPreset(1280)" class="px-3 py-1 bg-slate-700/40 text-white rounded-md cursor-pointer hover:bg-slate-700/80">Desktop</button>
                    </div>
                    <div class="flex items-center gap-3">
                        <label v-if="!fullWidth" for="preview-width" class="sr-only">預覽寬度</label>
                        <input v-if="!fullWidth" id="preview-width" type="range" min="320" max="1440" step="1" v-model.number="previewWidth" class="w-48" />
                        <output class="text-sm text-slate-300">寬度: {{ fullWidth ? '100%' : previewWidth + 'px' }}</output>
                    </div>
                </div>

                <div class="w-full max-w-full h-125 rounded-2xl border border-white/10 bg-slate-950/10 backdrop-blur-md shadow-2xl overflow-auto flex justify-center items-start">
                    <div v-if="url" :style="fullWidth ? { width: '100%' } : { width: previewWidth + 'px' }" class="shrink-0 h-full bg-white rounded-lg overflow-hidden">
                        <iframe 
                            :src="url" 
                            class="w-full h-full bg-white" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            :title="`${portfolioItems.find(item => item.id === selectedId)?.title ?? '作品'}預覽`"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <p v-else class="flex h-full items-center justify-center text-sm text-slate-400">
                        請點選欲體驗的作品
                    </p>
                </div>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
   
</style>