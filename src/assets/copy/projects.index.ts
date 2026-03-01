import projectsJson from './projects.json'
import type { Project } from '@/models/project'

const projects: Project[] = projectsJson as Project[]

export default projects
