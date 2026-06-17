<script setup>
import { profile } from '../data/site.js'
import SocialLinks from './SocialLinks.vue'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-slate-950"
  >
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/20" />
      <div class="absolute top-1/2 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-600/10" />
      <div
        class="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 48px 48px"
      />
    </div>

    <div class="relative mx-auto w-full max-w-6xl px-5 py-28 text-center sm:px-8">
      <p
        v-if="profile.available"
        class="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for freelance work
      </p>

      <h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Hi, I'm
        <span class="bg-gradient-to-r from-accent-600 to-sky-500 bg-clip-text text-transparent dark:from-accent-400 dark:to-sky-400">
          Simon
        </span>
      </h1>
      <p class="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
        {{ profile.role }}
      </p>
      <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
        {{ profile.tagline }}
      </p>

      <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 hover:shadow-md"
        >
          <AppIcon name="send" :size="18" /> Get in touch
        </a>
        <a
          :href="profile.resume"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <AppIcon name="download" :size="18" /> Download CV
        </a>
      </div>

      <div class="mt-10 flex justify-center">
        <SocialLinks />
      </div>
    </div>

    <a
      href="#about"
      aria-label="Scroll to About"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition hover:text-accent-600 dark:hover:text-accent-400"
    >
      <AppIcon name="chevron-down" :size="28" />
    </a>
  </section>
</template>
