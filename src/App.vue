<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import BlogSection from "./components/BlogSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { profile, quickLinks, stats, skills, projects, experiences, posts } from "./data/portfolioData";
</script>

<template>
  <div
    class="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1b2640,#0f1525_42%,#0a0d16_100%)] text-[#e8ecf2]"
  >
    <SiteHeader />
    <main class="w-full px-4 md:px-6 lg:px-8">
      <HeroSection :stats="stats" :profile="profile" :quick-links="quickLinks" />
      <AboutSection />
      <SkillsSection :skills="skills" />
      <ProjectsSection :projects="projects" />
      <ExperienceSection :experiences="experiences" />
      <BlogSection :posts="posts" />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
