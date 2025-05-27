<template>
    <section id="skills ">
        <p class="text-4xl font-bold text-yellow-500 dark:text-white mb-4 text-center " data-aos="fade-up">
            I Have Expriences in ...
        </p>
        <div class="skills-container mt-20 flex flex-wrap w-full p-6 gap-4 justify-center shadow-2xl rounded-3xl bg-white"
            data-aos="fade-up">
            <template v-for="(component, idx) in components">
                <component :is="component" class="w-12 h-12 hover:scale-120 transition-all ease-in-out"></component>
            </template>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, markRaw } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos';
import Csharp from './Icons/Csharp.vue';
import Html from './Icons/Html.vue';
import Css from './Icons/Css.vue';
import Tailwindcss from './Icons/Tailwindcss.vue';
import JavaScript from './Icons/JavaScript.vue';
import Vue from './Icons/Vue.vue';
import Sql from './Icons/Sql.vue';
import Git from './Icons/Git.vue';
import DotNet from './Icons/DotNet.vue';
import Nuxt from './Icons/Nuxt.vue';

AOS.init();

const components = reactive([markRaw(Csharp), markRaw(DotNet), markRaw(Sql), markRaw(Html), markRaw(Css), markRaw(Tailwindcss), markRaw(JavaScript), markRaw(Vue), markRaw(Nuxt), markRaw(Git)])



</script>