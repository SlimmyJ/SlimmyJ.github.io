<script setup>
import { experience, education, profile } from '../data/site.js'
import { reveal as vReveal } from '../composables/reveal.js'
import SectionHeading from './SectionHeading.vue'
import AppIcon from './AppIcon.vue'

const columns = [
  { key: 'work', label: 'Experience', icon: 'server', items: experience },
  { key: 'edu', label: 'Education', icon: 'check', items: education },
]
</script>

<template>
  <section id="resume" class="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 sm:px-8">
    <SectionHeading eyebrow="My journey" title="Resume" />

    <div class="grid gap-12 lg:grid-cols-2">
      <div v-for="col in columns" :key="col.key" v-reveal>
        <h3 class="mb-8 flex items-center gap-3 text-xl font-bold">
          <span class="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
            <AppIcon :name="col.icon" :size="20" />
          </span>
          {{ col.label }}
        </h3>

        <ol class="relative border-l border-slate-200 dark:border-slate-800">
          <li v-for="(item, i) in col.items" :key="i" class="mb-9 ml-6 last:mb-0">
            <span class="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent-500 dark:border-slate-950" />
            <span class="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
              {{ item.period }}
            </span>
            <h4 class="mt-1 text-base font-semibold">{{ item.title }}</h4>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.org }}</p>
            <ul v-if="item.points.length" class="mt-2 space-y-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <li v-for="(point, p) in item.points" :key="p" class="flex gap-2">
                <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>

    <div v-reveal class="mt-14 text-center">
      <a
        :href="profile.resume"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
      >
        <AppIcon name="download" :size="18" /> Download full CV (PDF)
      </a>
    </div>
  </section>
</template>
