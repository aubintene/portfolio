<template>
  <section id="contact" class="py-12">
    <h2 class="mb-4 text-3xl font-semibold md:text-4xl">Contact</h2>
    <p class="mb-6 text-[#b8c2d3]">Je reponds sous 24h. Ecris-moi pour discuter de ton projet.</p>
    <form class="grid max-w-[650px] gap-4 rounded-2xl border border-[#253253] bg-[#111a2f] p-5" @submit.prevent>
      <label class="grid gap-1.5 font-semibold">
        Nom
        <input
          type="text"
          name="name"
          autocomplete="name"
          required
          class="rounded-[10px] border border-[#32426b] bg-[#0d1324] p-3 text-[#eaf1ff] outline-none focus:ring-2 focus:ring-[#7cc5ff]"
        />
      </label>
      <label class="grid gap-1.5 font-semibold">
        Email
        <input
          type="email"
          name="email"
          autocomplete="email"
          required
          class="rounded-[10px] border border-[#32426b] bg-[#0d1324] p-3 text-[#eaf1ff] outline-none focus:ring-2 focus:ring-[#7cc5ff]"
        />
      </label>
      <label class="grid gap-1.5 font-semibold">
        Sujet
        <input
          type="text"
          name="subject"
          required
          class="rounded-[10px] border border-[#32426b] bg-[#0d1324] p-3 text-[#eaf1ff] outline-none focus:ring-2 focus:ring-[#7cc5ff]"
        />
      </label>
      <label class="grid gap-1.5 font-semibold">
        Message
        <textarea
          name="message"
          rows="5"
          required
          class="rounded-[10px] border border-[#32426b] bg-[#0d1324] p-3 text-[#eaf1ff] outline-none focus:ring-2 focus:ring-[#7cc5ff]"
        ></textarea>
      </label>
      <button
        type="submit"
        class="w-fit rounded-[10px] bg-[#3ea5ff] px-4 py-3 font-bold text-[#08111f] transition hover:-translate-y-px"
      >
        Envoyer
      </button>
    </form>
  
  </section>
</template>
