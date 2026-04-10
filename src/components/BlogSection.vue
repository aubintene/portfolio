<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="blog" class="py-12">
    <h2 class="mb-4 text-3xl font-semibold md:text-4xl">Blog / Articles</h2>
    <p class="mb-6 text-[#b8c2d3]">Partage de retours d'experience, veille et tutoriels techniques.</p>
    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="post in posts"
        :key="post.title"
        class="rounded-2xl border border-[#253253] bg-[#111a2f] p-5"
      >
        <h3 class="font-semibold">{{ post.title }}</h3>
        <p class="mt-2 text-[#b8c2d3]">{{ post.excerpt }}</p>
        <a :href="post.url" class="mt-4 inline-block text-[#8fd1ff]">Lire l'article</a>
      </article>
    </div>
  </section>
</template>
