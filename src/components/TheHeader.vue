<script setup>
import { ref, watch } from 'vue'
import { nav } from '../data/site.js'
import { useDarkMode } from '../composables/useDarkMode.js'
import AppIcon from './AppIcon.vue'

defineProps({
  activeId: { type: String, default: '' },
})

const { isDark, toggleDark } = useDarkMode()
const open = ref(false)

watch(open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#home" class="group flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white">
        <span class="grid h-9 w-9 place-items-center rounded-lg bg-accent-600 text-sm text-white shadow-sm transition group-hover:bg-accent-500">SVT</span>
        <span class="hidden sm:inline">Simon Van Tittelboom</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            activeId === item.id
              ? 'text-accent-600 dark:text-accent-400'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          "
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark"
        >
          <AppIcon :name="isDark ? 'sun' : 'moon'" :size="20" />
        </button>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Open menu"
          :aria-expanded="open"
          @click="open = true"
        >
          <AppIcon name="menu" :size="22" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm md:hidden" @click="close" />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="open"
        class="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80%] flex-col gap-1 bg-white p-6 shadow-xl md:hidden dark:bg-slate-900"
      >
        <button
          type="button"
          class="mb-4 grid h-10 w-10 place-items-center self-end rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Close menu"
          @click="close"
        >
          <AppIcon name="close" :size="22" />
        </button>
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="rounded-lg px-4 py-3 text-base font-medium transition-colors"
          :class="
            activeId === item.id
              ? 'bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
          "
          @click="close"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </header>
</template>
