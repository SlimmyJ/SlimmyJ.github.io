<script setup>
import { profile } from '../data/site.js'
import SocialLinks from './SocialLinks.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8">
      <a href="#home" class="font-display text-lg font-bold text-slate-900 dark:text-white">
        {{ profile.name }}
      </a>
      <SocialLinks :size="18" />
      <p class="text-sm text-slate-500 dark:text-slate-400">
        © {{ year }} {{ profile.name }}. Built with Vue &amp; Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
