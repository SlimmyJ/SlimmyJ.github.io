<script setup>
import { reveal as vReveal } from '../composables/reveal.js'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
})
</script>

<template>
  <div v-reveal class="mb-12 text-center">
    <p v-if="eyebrow" class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-bold sm:text-4xl">{{ title }}</h2>
    <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-600 to-sky-500" />
  </div>
</template>
