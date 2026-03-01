<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Jorge Carvajal</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  background-color: var(--bg-color);
  border-bottom: 2px solid var(--border-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

header h1 {
  font-size: 2rem;
  margin: 0;
  color: var(--text-color);
  font-weight: 700;
}

header nav {
  margin-top: 0.75rem;
  display: flex;
  gap: 1.5rem;
}

header nav a {
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s ease;
}

header nav a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
}

header nav a:hover {
  color: var(--primary-color);
}

header nav a:hover::after {
  width: 100%;
}

@media (min-width: 600px) {
  header {
    flex-direction: row;
    justify-content: space-between;
  }

  header nav {
    margin-top: 0;
  }
}
</style>
