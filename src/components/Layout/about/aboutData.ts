// 技能們
export interface SkillPillItem {
    name: string;
    category: 'about' | 'philosophy' | 'background'; 
    type: 'tech' | 'feature' | 'soft';              
  }
  
  export const skillPills: SkillPillItem[] = [
    // 藍色(關於我)
    { name: 'HTML5 / CSS3', category: 'about', type: 'tech' },
    { name: 'Vue 3', category: 'about', type: 'tech' },
    { name: 'TypeScript', category: 'about', type: 'tech' },
    { name: 'Tailwind CSS', category: 'about', type: 'tech' },
    { name: 'JavaScript', category: 'about', type: 'tech' },
    { name: 'Git / GitHub', category: 'about', type: 'tech' },
    { name: 'CI/CD', category: 'about', type: 'tech' },
    { name: 'RESTful API', category: 'about', type: 'tech' },
  
    // 紫色(開發理念)
    { name: 'a11y 無障礙', category: 'philosophy', type: 'feature' },
    { name: '1:1 切版還原', category: 'philosophy', type: 'feature' },
    { name: 'UI/UX 敏銳度', category: 'philosophy', type: 'feature' },
  
    // 橘粉色(個人特色)
    { name: '高效溝通', category: 'background', type: 'soft' },
    { name: '邏輯分析', category: 'background', type: 'soft' },
    { name: '細心敏銳', category: 'background', type: 'soft' },
    { name: '自主學習', category: 'background', type: 'soft' },
  ];

// 關於我，顯示技能"我擅長的技術們" html5 css js ts tailwindcss vue3 git github ci/cd a11y api
// 開發理念，顯示技能"我的製作風格" 乾淨、簡單、易讀、易維護、1:1還原設計稿、無設計稿亦可製作、UI/UX敏銳度高
// 個人特色，顯示技能"我的個人特質" 自我成長、細心、高配合度、好溝通、善思考邏輯強

// src/components/Layout/about/aboutData.ts

export interface AccordionItem {
  id: 'about' | 'philosophy' | 'background';
  title: string;
  content: string[];
}

export const accordionData: AccordionItem[] = [
  {
    id: 'about',
    title: '關於我',
    content: [
      '熱愛探索介面細節的前端開發工程師，專注於 Vue 3、TypeScript 與 Tailwind CSS 技術棧。',
      '善於將抽象的設計想法與需求，轉化為結構清晰、高可維護性且具備流暢互動體驗的 Web 應用。'
    ]
  },
  {
    id: 'philosophy',
    title: '開發理念',
    content: [
      '✨ 細節與還原度：追求 1:1 精準還原設計稿，同時確保靈活的 RWD 響應式佈局與跨裝置體驗。',
      '💡 介面與溝通：具備良好的 UI/UX 敏銳度，即使在無設計稿的情境下，亦能獨立規劃出直覺且優雅的介面。',
      '♿ 語意與無障礙：堅持編寫語意化 HTML，並注重 a11y 無障礙規範與 CI/CD 自動化部署流程。'
    ]
  },
  {
    id: 'background',
    title: '個人特色',
    content: [
      '嚴謹的邏輯分析與溝通協調能力，遇到複雜問題能冷靜拆解並迅速尋找解決方案。',
      '有強烈的自主學習熱情，習慣將除錯歷程與技術思維結構化紀錄，持續追求程式碼的簡潔與品質。'
    ]
  }
];