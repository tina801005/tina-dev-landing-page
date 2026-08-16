<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { skillPills } from './aboutData'; // 原始資料

const props = defineProps<{ activeCategory: string }>();

// 這是用來存「被打亂後順序」的 Pill 清單
const shuffledPills = ref([...skillPills]); // 先複製一份

// 隨機打亂陣列的函式 (Fisher-Yates Shuffle 演算法最專業)
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 只有在元件「掛載完成 (onMounted)」時才打亂一次
onMounted(() => {
  shuffleArray(shuffledPills.value);
});

const getPillStyle = (category: string, type: string) => {
    const isHighlighted = category === props.activeCategory;
  
    // 1. 未點亮狀態 (低調暗色)
    if (!isHighlighted) {
      return 'bg-slate-800/30 text-slate-500 border-slate-700/30 opacity-40 scale-95';
    }
  
    // 2. 點亮狀態 (霓虹色彩 + 外發光)
    switch (type) {
      case 'tech': // 藍色系
        return 'bg-blue-500/20 text-blue-500 border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.3)] scale-100';
      case 'feature': // 紫色系
        return 'bg-purple-500/20 text-purple-500 border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)] scale-100';
      case 'soft': // 粉橘色系
        return 'bg-red-500/20 text-red-700 border-red-500/50 shadow-[0_0_12px_rgba(245,188,188,0.3)] scale-100';
      default:
        return '';
    }
  };
</script>

<template>
  <!-- 使用 TransitionGroup 可以讓點亮時的 Class 切換有些微緩動感 -->
  <TransitionGroup 
    tag="ul" 
    name="pill-list" 
    class="flex flex-wrap gap-2.5"
  >
    <li
      v-for="pill in shuffledPills"
      :key="pill.name"
      :class="[
        'px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium border backdrop-blur-sm transition-all duration-300',
        getPillStyle(pill.category, pill.type) // 樣式依舊靠 getPillStyle 判斷
      ]"
    >
      {{ pill.name }}
    </li>
  </TransitionGroup>
</template>

<!-- <template>
    <p class="bg-gray-200 text-gray-500 px-2 py-2 rounded-full text-xs font-medium w-fit">
        <slot />
    </p>
</template> -->

<style scoped></style>