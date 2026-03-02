<script setup lang="ts">
import { useProjectStore } from '@/stores/ProjectsStore'
import ProjectList from '@/components/ProjectList.vue'
import ProjectSearch from '@/components/ProjectSearch.vue'

const store = useProjectStore()
</script>

<template>
  <ProjectSearch />

  <ProjectList :projects="store.filteredProjects" />
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0.5rem 0;
}
</style>
