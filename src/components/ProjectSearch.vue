<script setup lang="ts">
import { useProjectStore } from '@/stores/ProjectsStore'
import Magnifier from './icons/Magnifier.vue'

const store = useProjectStore()

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  store.setSearch(value)
}
</script>

<template>
  <div class="search">
    <Magnifier />
    <input
      type="text"
      placeholder="Search by technology"
      :value="store.searchQuery"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  margin: 0.5rem auto;
  width: 10rem;
  border: 2px solid;
  border-radius: 100px;
  padding: 0 10px;
  svg {
    height: 20px;
    width: 20px;
    margin: 5px;
  }
}

input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--text-color);
}
input:focus {
  border: none;
}
</style>
