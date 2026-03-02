<script setup lang="ts">
import { ref } from 'vue'
import Me from '@/assets/me.jpeg'
import resume from '@/assets/resume.pdf'
import Github from './icons/Github.vue'
import LinkedIn from './icons/LinkedIn.vue'
import Mail from './icons/Mail.vue'
import Document from './icons/Document.vue'

const showTooltip = ref(false)

function downloadResume() {
  const confirmed = window.confirm('Do you want to download my resume?')
  if (confirmed) {
    const link = document.createElement('a')
    link.href = resume
    link.download = 'Jorge_Carvajal_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
</script>

<template>
  <div class="card">
    <img :src="Me" alt="Card image" class="card-image" />
    <h1 class="card-title">Hello There!</h1>
    <ul class="details">
      <li>San Diego, CA</li>
      <li>Full-stack developer</li>
      <li>Home Lab enthusiast</li>
      <li>Sci-Fi nerd</li>
    </ul>
    <p>
      &emsp; I'm Jorge, and that's my dog, Bug. I love learning and making things from 3D objects in
      blender, to useful software, to sewing clothes. I got to travel the world in the Navy, serving
      2 tours. I'm originally from South Florida. Ask me about my homelab. <br />
      &emsp; Feel free to email me and lets get coffee IRL or virtually.
    </p>

    <div class="links">
      <a href="https://github.com/codingMustache" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/codingmustache/" target="_blank">
        <LinkedIn />
      </a>
      <a href="mailto:contact@codingMustache.dev">
        <Mail />
      </a>

      <!-- Resume Download with Tooltip -->
      <div
        class="tooltip-container"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
      >
        <button class="icon-btn" @click="downloadResume">
          <Document />
        </button>
        <span v-if="showTooltip" class="tooltip-text">Download Resume</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  padding: 1rem;
  max-width: 30rem;
  background-color: var(--bg-color, #fff);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 50px;
}
.card > p {
  text-align: left;
  line-height: 1.5;
}
.card-image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin: 0.25rem 0;
  font-weight: bold;
  text-align: center;
}

.details {
  font-size: 0.85rem;
  color: var(--text-color);
  text-align: left;
  line-height: 1.4;
}

.details p {
  margin: 0.25rem 0;
}

.links {
  display: flex;
  justify-content: space-around;
  margin: 0px 15px;
  align-items: center;
}

.links svg {
  height: 20px;
  width: auto;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--text-color);
}

.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
}
</style>
