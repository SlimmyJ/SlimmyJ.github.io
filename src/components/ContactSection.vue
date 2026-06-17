<script setup>
import { reactive, ref } from 'vue'
import { profile } from '../data/site.js'
import { reveal as vReveal } from '../composables/reveal.js'
import SectionHeading from './SectionHeading.vue'
import SocialLinks from './SocialLinks.vue'
import AppIcon from './AppIcon.vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const copied = ref(false)

function submit() {
  const subject = form.subject || `Portfolio enquiry from ${form.name}`
  const body = `${form.message}\n\n— ${form.name} (${form.email})`
  window.location.href =
    `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}

const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
</script>

<template>
  <section id="contact" class="scroll-mt-16 bg-slate-50 py-24 dark:bg-slate-900/40">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading eyebrow="Say hello" title="Get in touch" />

      <div class="grid gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-2">
          <p class="leading-relaxed text-slate-600 dark:text-slate-400">
            Have a project in mind, a question, or just want to say hi? Drop me a
            message and I'll get back to you.
          </p>

          <div class="mt-8 space-y-4">
            <div class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <AppIcon name="mail" :size="20" />
              </span>
              <div class="min-w-0">
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
                <a :href="`mailto:${profile.email}`" class="block truncate text-sm font-medium text-slate-800 hover:text-accent-600 dark:text-slate-200">
                  {{ profile.email }}
                </a>
              </div>
              <button
                type="button"
                class="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-accent-600 dark:hover:bg-slate-800"
                :aria-label="copied ? 'Copied' : 'Copy email address'"
                @click="copyEmail"
              >
                <AppIcon :name="copied ? 'check' : 'copy'" :size="18" />
              </button>
            </div>

            <div class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <AppIcon name="map-pin" :size="20" />
              </span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Location</p>
                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">{{ profile.location }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <SocialLinks />
          </div>
        </div>

        <form v-reveal="120" class="grid gap-4 lg:col-span-3" @submit.prevent="submit">
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="name" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input id="name" v-model="form.name" type="text" required autocomplete="name" placeholder="Your name" :class="fieldClass" />
            </div>
            <div>
              <label for="email" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input id="email" v-model="form.email" type="email" required autocomplete="email" placeholder="you@example.com" :class="fieldClass" />
            </div>
          </div>
          <div>
            <label for="subject" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="What's this about?" :class="fieldClass" />
          </div>
          <div>
            <label for="message" class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required placeholder="Tell me a little about it…" :class="fieldClass" />
          </div>
          <button
            type="submit"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 hover:shadow-md"
          >
            <AppIcon name="send" :size="18" /> Send message
          </button>
          <p class="text-center text-xs text-slate-400">Opens in your email app — no data is stored.</p>
        </form>
      </div>
    </div>
  </section>
</template>
