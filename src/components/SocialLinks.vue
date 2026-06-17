<script setup>
import { social } from '../data/site.js'
import AppIcon from './AppIcon.vue'

defineProps({
  size: { type: Number, default: 20 },
})
</script>

<template>
  <ul class="flex items-center gap-3">
    <li v-for="item in social" :key="item.label">
      <a
        :href="item.href"
        :target="item.icon === 'mail' ? undefined : '_blank'"
        rel="noopener"
        :aria-label="item.label"
        :title="item.label"
        class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
      >
        <AppIcon :name="item.icon" :size="size" />
      </a>
    </li>
  </ul>
</template>
