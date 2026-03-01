import { defineStore } from 'pinia'
import type { Project } from '@/models/project'
import projects from '@/assets/copy/projects.index'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: projects.sort((a, b) => a.order - b.order) as Project[],
    searchQuery: '',
  }),

  getters: {
    filteredProjects: (state) => {
      if (!state.searchQuery.trim()) return state.projects

      const query = state.searchQuery.toLowerCase()

      return state.projects.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase().includes(query)),
      )
    },
  },

  actions: {
    setSearch(query: string) {
      this.searchQuery = query
    },
  },
})
