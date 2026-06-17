<script setup>
import { services, skills } from '../data/site.js'
import { reveal as vReveal } from '../composables/reveal.js'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="services" class="scroll-mt-16 bg-slate-50 py-24 dark:bg-slate-900/40">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading eyebrow="What I bring" title="What I Do" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal="i * 100"
          class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-700"
        >
          <div class="grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/10 dark:text-accent-400">
            <AppIcon :name="service.icon" :size="24" />
          </div>
          <h3 class="mt-5 text-lg font-semibold">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {{ service.text }}
          </p>
        </div>
      </div>

      <div v-reveal class="mt-14">
        <h3 class="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Tools &amp; technologies
        </h3>
        <ul class="mt-6 flex flex-wrap justify-center gap-2.5">
          <li
            v-for="skill in skills"
            :key="skill"
            class="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
