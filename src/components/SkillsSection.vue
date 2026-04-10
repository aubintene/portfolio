<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="skills" class="py-12">
    <h2 class="mb-4 text-3xl font-semibold md:text-4xl">Stack technique</h2>
    <p class="mb-6 text-[#b8c2d3]">Technologies que j'utilise au quotidien pour livrer vite et bien.</p>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4">
      <article
        v-for="skill in skills"
        :key="skill.category"
        class="rounded-2xl border border-[#253253] bg-[#111a2f] p-4"
      >
        <h3 class="font-semibold text-[#8fd1ff]">{{ skill.category }}</h3>
        <ul class="mt-3 space-y-2">
          <li v-for="item in skill.items" :key="item.name" class="flex items-center gap-2">
            <img :src="item.logo" :alt="`Logo ${item.name}`" class="h-5 w-5 object-contain" loading="lazy" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
