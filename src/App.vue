<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { nav } from './data/site.js'
import { useScrollSpy } from './composables/useScrollSpy.js'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import AppIcon from './components/AppIcon.vue'

const { activeId } = useScrollSpy(['home', ...nav.map((n) => n.id)])

const showTop = ref(false)
function onScroll() {
  showTop.value = window.scrollY > 500
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  if (location.hash) {
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'auto' })
      )
    )
  }
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <TheHeader :active-id="activeId" />

  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ResumeSection />
    <ContactSection />
  </main>

  <TheFooter />

  <Transition
    enter-active-class="transition duration-200"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-200"
    leave-to-class="translate-y-4 opacity-0"
  >
    <button
      v-if="showTop"
      type="button"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent-600 text-white shadow-lg transition hover:bg-accent-500"
      @click="toTop"
    >
      <AppIcon name="arrow-up" :size="20" />
    </button>
  </Transition>
</template>
