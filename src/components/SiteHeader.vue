<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header
    class="sticky top-0 z-20 mx-4 mt-4 rounded-2xl border border-[#27314f] bg-[rgba(10,13,22,0.72)] px-4 py-4 backdrop-blur md:mx-6 lg:mx-8"
  >
    <div class="flex items-center justify-between gap-4">
      <a href="#home" class="text-xl font-extrabold text-[#b8f26c] no-underline" aria-label="Aller a l'accueil">JUSTICE AUBIN</a>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#30416a] text-[#d8e1f0] md:hidden"
        aria-label="Ouvrir le menu principal"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6l-12 12" />
        </svg>
      </button>
    </div>

    <nav
      id="main-navigation"
      aria-label="Navigation principale"
      :class="[
        'mt-4 flex flex-col gap-3 md:mt-0 md:flex-row md:items-center md:gap-4',
        isMenuOpen ? 'flex' : 'hidden md:flex'
      ]"
    >
      <a href="#home" class="rounded-lg bg-[#b8f26c] px-3 py-1.5 font-bold text-[#1f2912] no-underline" @click="closeMenu">Home</a>
      <a href="#about" class="font-semibold text-[#d8e1f0] no-underline hover:text-[#7cc5ff]" @click="closeMenu">About</a>
      <a href="#skills" class="font-semibold text-[#d8e1f0] no-underline hover:text-[#7cc5ff]" @click="closeMenu">Services</a>
      <a href="#projects" class="font-semibold text-[#d8e1f0] no-underline hover:text-[#7cc5ff]" @click="closeMenu">Project</a>
      <a href="#experience" class="font-semibold text-[#d8e1f0] no-underline hover:text-[#7cc5ff]" @click="closeMenu">Review</a>
      <a
        href="#contact"
        class="w-fit rounded-full border border-[#7cc5ff] px-4 py-2 font-semibold text-[#d8e1f0] no-underline hover:text-[#7cc5ff] hover:shadow-[0_0_24px_-10px_#7cc5ff]"
        @click="closeMenu"
      >
        Contact
      </a>
    </nav>
  </header>
</template>
