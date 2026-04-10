<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  stats: {
    type: Array,
    required: true
  },
  profile: {
    type: Object,
    required: true
  },
  quickLinks: {
    type: Array,
    required: true
  }
});

const photoError = ref(false);
const animatedName = ref("");

let timerId;
let index = 0;
let isDeleting = false;
let pauseUntil = 0;

function loopTyping() {
  const now = Date.now();
  const text = props.profile.fullName || "";

  if (now < pauseUntil) {
    timerId = setTimeout(loopTyping, 60);
    return;
  }

  if (!isDeleting) {
    if (index < text.length) {
      index += 1;
      animatedName.value = text.slice(0, index);
      timerId = setTimeout(loopTyping, 85);
      return;
    }
    isDeleting = true;
    pauseUntil = Date.now() + 900;
    timerId = setTimeout(loopTyping, 60);
    return;
  }

  if (index > 0) {
    index -= 1;
    animatedName.value = text.slice(0, index);
    timerId = setTimeout(loopTyping, 55);
    return;
  }

  isDeleting = false;
  pauseUntil = Date.now() + 350;
  timerId = setTimeout(loopTyping, 60);
}

onMounted(() => {
  animatedName.value = "";
  index = 0;
  isDeleting = false;
  pauseUntil = 0;
  loopTyping();
});

onUnmounted(() => {
  clearTimeout(timerId);
});
</script>

<template>
  <section id="home" class="flex min-h-[78svh] items-stretch py-4 md:min-h-[82svh] md:py-6">
    <div
      class="hero-frame w-full overflow-hidden rounded-3xl border border-[#253253] bg-[linear-gradient(120deg,#060a13_15%,#0a1120_52%,#111a2f_100%)]"
    >
      <div class="grid gap-6 p-5 md:grid-cols-[1.12fr_0.88fr] md:items-start md:p-8 lg:p-10">
        <div class="self-start">
          <p class="mb-3 inline-block rounded-full bg-[#b8f26c] px-3 py-1 text-xs font-bold text-[#1f2912]">
            HELLO THERE
          </p>
          <h1 class="text-5xl leading-[0.95] font-black md:mt-1 md:text-7xl">
            I'm {{ animatedName }}<span class="opacity-80">|</span>
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-[#c0cada]">
            Je concois des experiences web modernes avec une forte orientation performance, accessibilite et impact business.
          </p>
          <p class="mt-3 max-w-2xl text-lg text-[#a7b4ca]">
            Mon approche combine design propre, architecture evolutive et execution rapide.
          </p>
        </div>

        <div class="photo-frame relative h-[clamp(280px,44vh,430px)] self-start rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#27314f,#090d16_70%)] p-3">
          <img
            v-if="!photoError"
            :src="profile.photo"
            :alt="`Photo de ${profile.fullName}`"
            class="h-full w-full rounded-xl object-cover object-center"
            @error="photoError = true"
          />
          <div v-else class="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-[#30416a] text-[#8fd1ff]">
            Ajoute la photo dans public/profile.jpg
          </div>
        </div>

        <div class="md:col-span-2">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <ul class="grid min-w-[min(100%,680px)] list-none grid-cols-1 gap-3 rounded-2xl bg-[#b8f26c] p-4 text-[#1d2613] sm:grid-cols-3">
              <li v-for="item in stats" :key="item.label" class="rounded-xl bg-[#c7f57d] p-4">
                <strong class="text-4xl leading-none font-black">{{ item.value }}</strong>
                <p class="mt-1 text-base font-semibold">{{ item.label }}</p>
              </li>
            </ul>

            <div class="flex flex-wrap gap-3 md:justify-end">
              <a href="#projects" class="rounded-xl border border-[#4d5b79] px-5 py-3 font-semibold text-[#e8ecf2]">
                Swipe to Explore
              </a>
              <a href="#contact" class="rounded-xl bg-[#3ea5ff] px-5 py-3 font-bold text-[#08111f]">
                Me contacter
              </a>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <a
              v-for="item in quickLinks"
              :key="item.name"
              :href="item.href"
              class="flex items-center gap-2 rounded-xl border border-[#30416a] bg-[#111a2f] px-3 py-2 text-[#d8e1f0] no-underline hover:border-[#7cc5ff]"
            >
              <img :src="item.icon" :alt="`Logo ${item.name}`" class="h-5 w-5 rounded object-contain" />
              <span class="text-sm font-semibold">{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-frame {
  position: relative;
  isolation: isolate;
}

.hero-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 1.5rem;
  pointer-events: none;
  background: linear-gradient(
    120deg,
    rgba(255, 70, 70, 0.85),
    rgba(90, 230, 120, 0.85),
    rgba(80, 145, 255, 0.85),
    rgba(232, 191, 88, 0.9),
    rgba(255, 255, 255, 0.88)
  );
  background-size: 230% 230%;
  animation: heroFrameGlow 8s ease-in-out infinite alternate;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.78;
}

.photo-frame {
  isolation: isolate;
}

.photo-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 1rem;
  pointer-events: none;
  background: linear-gradient(
    130deg,
    rgba(255, 78, 78, 0.82),
    rgba(100, 232, 130, 0.82),
    rgba(86, 150, 255, 0.82),
    rgba(238, 198, 96, 0.88),
    rgba(255, 255, 255, 0.84)
  );
  background-size: 230% 230%;
  animation: heroFrameGlow 8s ease-in-out infinite alternate;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.72;
}

@keyframes heroFrameGlow {
  0% {
    background-position: 0% 50%;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.26));
  }
  50% {
    background-position: 100% 50%;
    filter: drop-shadow(0 0 5px rgba(255, 220, 120, 0.32));
  }
  100% {
    background-position: 50% 100%;
    filter: drop-shadow(0 0 3px rgba(120, 180, 255, 0.3));
  }
}
</style>
