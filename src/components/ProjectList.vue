<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import type { Project } from '@/models/project'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="list">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  max-width: 60rem;
  padding: 10xpx;
  margin: 0 auto;
  margin-bottom: 50px;
}

/* Large screens */
@media (min-width: 768px) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
