<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/models/project'
import Github from '@/components/icons/Github.vue'
import Globe from '@/components/icons/Globe.vue'

defineProps<{
  project: Project
}>()

const showLong = ref(false)

function toggleDescription() {
  showLong.value = !showLong.value
}
</script>

<template>
  <div class="card">
    <img v-if="project.images" :src="project.images" :alt="project.title" class="card-image" />

    <div class="card-content">
      <div class="card-header">
        <h3>{{ project.title }}</h3>
        <span class="status" :class="project.status.toLowerCase()">
          {{ project.status }}
        </span>
      </div>

      <p class="description">
        {{ showLong ? project.longDescription : project.description }}
      </p>

      <button class="toggle-btn" @click="toggleDescription">
        {{ showLong ? 'Show less' : 'Detailed Description' }}
      </button>

      <div class="meta">
        <span>{{ project.year }}</span>
        <span>•</span>
        <span>{{ project.role }}</span>
      </div>

      <div class="tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-item">
          {{ tech }}
        </span>
      </div>

      <div v-if="project.links" class="links">
        <a v-if="project.links.live" :href="project.links.live" target="_blank">
          <Globe />
        </a>
        <a v-if="project.links.github" :href="project.links.github" target="_blank">
          <Github />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--text-color);
  border-radius: 6px;
  padding: 1rem;
  height: fit;
}

.card-image {
  width: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }
}

.description {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.toggle-btn {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid var(--primary-color);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-color);
}

.toggle-btn:hover {
  background: var(--primary-color);
  color: white;
}

.meta {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.tech-item {
  font-size: 0.8rem;
  border: 2px solid var(--primary-color);
  padding: 0.15rem 0.4rem;
  border-radius: 100px;
}

.links a svg {
  margin-right: 0.5rem;
  height: 25px;
  color: var(--primary-color);
}

.links a svg:hover {
  color: var(--text-color);
  scale: 1.2;
}

.status {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 100px;
}

.status.completed {
  background: var(--active-color);
}

.status.active {
  background: var(--inactive-color);
}
</style>
