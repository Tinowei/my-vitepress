<template>
    <section id="projects" class="my-20">
        <p class="text-3xl font-bold text-yellow-500 mb-4 text-center" data-aos="fade-up">
            My side porjects
        </p>
        <div class="py-8 xl:px-16 px-4 sm:py-16 space-y-12 grid grid-cols-1 pt-10">
            <div data-aos="flip-left" data-aos-delay="300" v-for="project in projects"
                class="flex flex-col md:flex-row md:justify-between rounded-3xl bg-white shadow-2xl my-10 ">
                <div class="flex justify-center items-center w-full  rounded-3xl p-4 ">
                    <img :src="project.image" alt="project image"
                        class="w-[70%] md:max-w-[200px] lg:max-w-[200px] h-[200px] rounded-lg object-cover  shadow-2xl">
                </div>
                <div class="flex flex-col just-start p-6 space-y-12">
                    <span class="bg-zinc-200 font-semibold w-30 text-center p-2 rounded-3xl text-black">{{
                        project.category }}</span>
                    <p class="text-3xl pt-0 uppercase font-bold text-black ">{{ project.title }}</p>
                    <p class="grow-1 text-[14px] leading-[20px] text-gray-500 tracking-[1px]">{{ project.description }}
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:mx-0">
                        <!-- <button
                            class="border border-violet-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div
                                class="hover:scale-110 transition-all ease-in-out flex items-center justify-center relative">
                                <a :href="project.webUrl" class="pl-2 text-violet-500 ">live demo</a>
                            </div>
                        </button> -->
                        <div
                            class=" cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 md:px-7  rounded-full relative group w-full sm:w-max flex justify-center shadow-lg hover:shadow-xl transition-shadow duration-300  ">
                            <div
                                class="hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center relative px-10 py-2 text-center">
                                <a :href="project.webUrl" target="_blank"
                                    class=" no-underline pl-2 text-white hover:text-white! font-semibold ">{{
                                        project.label }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <!-- projectCard -->
    <!-- <div class="projectCard shadow-2xl bg-white rounded-3xl flex gap-4 mr-80 ">
        <div class="projectCard__image w-1/3 m-4">
            <img src="/ejoin.png" alt="Project Image rounded-lg object-cover shadow-2xl"
                class="w-full h-full rounded-lg object-cover shadow-2xl">
        </div>
        <div class="projectCard__content  w-2/3 m-4">
            <bedge class="projectCard__bedge ">
                <span
                    class="projectCard__category bg-amber-400 w-50 text-center font-semibold px-4 py-2 rounded-3xl text-black mr-2">.NET</span>
                <span
                    class="projectCard__category bg-amber-400 w-50 text-center font-semibold px-4 py-2 rounded-3xl text-black mr-2">MSSQL</span>
            </bedge>
            <h3 class="projectCard__title">eJoin</h3>
            <div class="projectCard__description my-8">ASP.NET MVC 7進行開發使用Code First From DB產生Data Model，並使用Entity
                Framework
                進行資料庫操作，結合第三方api如cloudinary等以及QRcode掃描票券等功能。</div>
            <div
                class="action flex gap-2 border rounded-full p-2  px-30 items-center justify-center cursor-pointer bg-gradient-to-r from-purple-300 to-indigo-500 text-white ">
                <a href="#" class="text-white! font-bold!"> see more </a>
                <Arrow />
            </div>
        </div>

    </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos';
import Arrow from './Icons/Arrow.vue';
AOS.init();

const projects = ref([
    {
        id: 1,
        image: '/my-vitepress/ejoin.png',
        title: "eJoin",
        category: '.NET MVC',
        webUrl: 'https://github.com/Tinowei/eJoin_Project',
        description: 'ASP.NET MVC 7進行開發使用Code First From DB產生Data Model，並使用Entity Framework 進行資料庫操作，結合第三方api如cloudinary等以及QRcode掃描票券等功能。',
        label: 'See detail'
    },
    {
        id: 2,
        image: '/my-vitepress/simple-calc.png',
        title: "simple calculator",
        category: 'VueJS',
        webUrl: 'https://tinowei.github.io/simple-calculator/',
        description: '使用vue3搭配tailwindcss，手切自定義toggle元件實現三個主題顏色的切換功能，並使用pinia狀態管理，將計算邏輯模組化，,進行的簡單計算功能。',
        label: 'Live Demo'
    },
    {
        id: 3,
        image: '/my-vitepress/shortly-app.png',
        title: "shortly-App",
        category: 'VueJS',
        webUrl: 'https://tinowei.github.io/shortly-app/',
        description: '使用Vue3搭配tailwindcss實現RWD前端landing頁面,進行的URL縮短服務，整合了 TinyURL API 實現網址縮短功能。',
        label: 'Live Demo'
    },
    {
        id: 4,
        image: '/my-vitepress/chatto_login.png',
        title: "Chatto",
        category: 'Nuxt3',
        webUrl: 'https://github.com/Tinowei/simple-chat-app',
        description: '以Nuxt3搭配NuxtUI與tailwindcss實現RWD,資料庫使用MongoDB Atlas進行資料庫操作, 串接cloudinary圖床服務、pusher channels練習即時聊天功能...',
        label: 'Source Code'
    },
])



</script>

<style scoped>
a {
    text-decoration: none;
    /* 移除下劃線 */
    color: inherit;
    /* 繼承父元素的文字顏色 */
}
</style>