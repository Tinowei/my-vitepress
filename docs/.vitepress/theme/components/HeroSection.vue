<template>
    <section class="relative w-full mb-40" data-aos="zoom-in-up">
        <!-- <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3  bg-gradient-to-br from-[#570cac] blur-2xl invisible  opacity-40 ">
            </div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] blur-2xl  opacity-40 "></div>
        </div> -->
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2  xl:gap-14 relative md:pt-24 g:max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6 max-lg:order-2 max-md:top-0">
                    <div class="text-center lg:text-left">
                        <p class="pt-4 text-black dark:text-white  font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600">Tino</span>
                        </p>
                    </div>
                    <p ref="introRef"
                        class="h-20 text-zinc-400 font-medium pt-8 text-center lg:text-left mx-auto max-w-xl max-lg:text-center">

                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <div
                            class="font-bold px-6 md:px-7 rounded-full relative w-full sm:w-max group flex justify-center cursor-pointer">
                            <span
                                class="absolute inset-0 rounded-3xl group-hover:scale-110 origin-center transition-all ease-in-out bg-amber-400 border-2 border-transparent"></span>
                            <a href="/Resume.pdf" download="/Resume.pdf"
                                class="relative flex items-center justify-center text-black! py-2 no-underline! hover:text-white!">
                                Resume
                                <Download />
                            </a>
                        </div>
                        <!-- <button
                            class="border-2 border-amber-400 text-amber-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div
                                class="hover:scale-110 origin-center transition-all ease-in-out flex items-center justify-center">
                                <div class="svg-container">
                                    <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22"
                                        fill="none">
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="#" download="tino_cv.pdf" class="pl-2 text-amber-500">Download CV</a>
                            </div>
                        </button> -->
                    </div>
                </div>
                <div class="lg:h-full flex md:flex  max-lg:order-1">
                    <div
                        class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative max-lg:justify-center">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-yellow-400 blur-2xl">
                        </div>
                        <div
                            class="absolute z-10 p-2  -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-amber-400 ">
                            <img src="/avatar.jpg" alt="Hero pic"
                                class="max-w-[350px] max-h-[300px] object-cover rounded-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <!-- <div class="fixed inset-0">
        <div class="h-full flex flex-col items-center relative">
            <div class="mt-28 min-w-48 max-w-64 w-15% aspect-square rounded-full overflow-hidden shadow-md shadow-dark"
                md="mt-32" dark="shadow shadow-#fff6">
                <img src="../../public/avatar.jpg" class="w-full h-full  object-cover object-0-20% brightness-100%"
                    dark="brightness-75%" alt="avatar">
            </div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] blur-2xl   dark:from-gray-900 border border-black">
            </div>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos';
import Download from './Icons/download.vue';
import Typer from "super-typer";
import { onMounted, onUnmounted, ref } from 'vue';

const introRef = ref<HTMLElement>();
const isLooping = ref(false);

const typer = new Typer({
    speed: 70, // 速度參數 (字母間隔時間，單位：毫秒)
    onChange(text) { // 當打字內容改變時觸發
        introRef.value && (introRef.value.innerText = text + "|"); // 更新內容在畫面上
    },
});

const typeLoop = () => {
    // 關閉循環時重置打字效果
    if (!isLooping.value) {
        typer.reset();
        return;
    }

    // 開始觸發效果
    typer
        // 等待 300 毫秒
        .wait(300)
        // 打字效果
        .type("我是Tino, ")
        .wait(1500)
        .type("\n這裡是一個隨手記的地方，這裡記錄著一些學習過程中的知識。")
        .wait(2000)
        // -1 為刪除所有內容 (設置當前命令速度為 10 毫秒)
        .backspace(-1, { speed: 10 })
        // 在最後一次命令且執行 onAfterChange (結束所有改動) 時循環呼叫
        .wait(500, { onAfterChange: typeLoop });
};

onMounted(() => {
    isLooping.value = true;
    // 開始循環
    typeLoop();
});

onUnmounted(() => {
    isLooping.value = false;
});

AOS.init();
</script>

<style scoped></style>