<script setup>
import { ref } from "vue";

defineProps({
  projects: {
    type: Array,
    required: true
  }
});

const brokenImages = ref({});

function onImageError(projectName) {
  brokenImages.value[projectName] = true;
}
</script>

<template>
  <section id="projects" class="py-12">
    <h2 class="mb-4 text-3xl font-semibold md:text-4xl">Projets</h2>
    <p class="mb-6 text-[#b8c2d3]">Une selection de projets orientes impact metier.</p>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      <article
        v-for="project in projects"
        :key="project.name"
        class="rounded-2xl border border-[#253253] bg-[#111a2f] p-5"
      >
        <div class="mb-4 h-40 w-full overflow-hidden rounded-xl border border-[#30416a] bg-[#0d1324]">
          <img
            v-if="project.image && !brokenImages[project.name]"
            :src="project.image"
            :alt="`Capture du projet ${project.name}`"
            class="h-full w-full object-cover"
            loading="lazy"
            referrerpolicy="no-referrer"
            @error="onImageError(project.name)"
          />
          <div v-else class="flex h-full items-center justify-center text-center text-sm text-[#8fa3c0]">
            Capture indisponible pour le moment
          </div>
        </div>
        <span class="mb-2 inline-block rounded-full border border-[#30416a] px-2 py-1 text-xs font-bold text-[#80dbff]">
          {{ project.type }}
        </span>
        <h3 class="font-semibold">{{ project.name }}</h3>
        <p class="mt-2">{{ project.description }}</p>
        <p class="mt-2"><strong>Stack:</strong> {{ project.stack }}</p>
        <p class="mt-2"><strong>Probleme:</strong> {{ project.problem }}</p>
        <p class="mt-2"><strong>Solution:</strong> {{ project.solution }}</p>
        <div class="mt-4 flex gap-3">
          <a :href="project.github" target="_blank" rel="noopener" class="rounded-lg border border-[#30416a] px-3 py-1.5 text-[#8fd1ff]">
            GitHub
          </a>
          <a :href="project.live" target="_blank" rel="noopener" class="rounded-lg border border-[#30416a] px-3 py-1.5 text-[#8fd1ff]">
            Live
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
