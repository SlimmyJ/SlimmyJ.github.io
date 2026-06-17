<script setup>
import { about, facts, profile } from '../data/site.js'
import { reveal as vReveal } from '../composables/reveal.js'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'
import portrait from '../assets/simon.png'
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 sm:px-8">
    <SectionHeading eyebrow="Get to know me" title="About" />

    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div v-reveal class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent-500/20 to-sky-400/20 blur-2xl" />
        <img
          :src="portrait"
          alt="Portrait of Simon Van Tittelboom"
          loading="lazy"
          class="w-full rounded-2xl border border-slate-200 object-cover shadow-lg dark:border-slate-800"
        />
      </div>

      <div v-reveal="120">
        <h3 class="text-2xl font-bold">Who am I</h3>
        <div class="mt-4 space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
          <p v-for="(para, i) in about" :key="i">{{ para }}</p>
        </div>

        <dl class="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div v-for="fact in facts" :key="fact.label" class="border-l-2 border-accent-500/40 pl-4">
            <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {{ fact.label }}
            </dt>
            <dd class="font-medium text-slate-800 dark:text-slate-200">{{ fact.value }}</dd>
          </div>
        </dl>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            :href="profile.resume"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-500"
          >
            <AppIcon name="download" :size="18" /> Resume
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <AppIcon name="mail" :size="18" /> Contact me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
