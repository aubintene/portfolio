<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="experience" class="py-12">
    <h2 class="mb-4 text-3xl font-semibold md:text-4xl">Experience</h2>
    <p class="mb-6 text-[#b8c2d3]">Parcours professionnel et evolution technique.</p>
    <div class="grid gap-5 border-l-2 border-[#30416a] pl-4">
      <article
        v-for="item in experiences"
        :key="item.title"
        class="rounded-r-xl border border-l-0 border-[#253253] bg-[#111a2f] p-4"
      >
        <p class="m-0 text-[0.92rem] text-[#91a7c9]">{{ item.date }}</p>
        <h3 class="my-1 font-semibold">{{ item.title }}</h3>
        <p class="m-0">{{ item.details }}</p>
      </article>
    </div>
  </section>
</template>
