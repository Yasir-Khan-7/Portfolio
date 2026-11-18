import { clients, type Client } from '@/content/projects'
import { ProjectCard } from './ProjectCard'
import { BebeNouraScene, MadikhaScene, OrbitScene, OtengaScene, PakSadatScene } from './scenes'

const byId = (id: Client['id']) => clients.find((c) => c.id === id)!

/** The five client launches, in the order the design sets. */
export function ClientCards() {
  return (
    <div className="pc-list">
      <ProjectCard client={byId('otenga')} sceneFirst mark="Otenga" scene={<OtengaScene />} />
      <ProjectCard client={byId('madikha')} mark="MK" sub="Clinical psychologist" scene={<MadikhaScene />} />
      <ProjectCard
        client={byId('bebenoura')}
        mark="BN"
        topbar={['Project 03 · Client build', 'Design · Development · SEO']}
        scene={<BebeNouraScene />}
      />
      <ProjectCard client={byId('orbit')} mark={<i />} scene={<OrbitScene />} />
      <ProjectCard
        client={byId('paksadat')}
        sub="Travel & Tours"
        mark={
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5 2.5L2.8 10.1c-.8.3-.7 1.4.1 1.6l6.6 1.9 1.9 6.6c.2.8 1.3.9 1.6.1l7.6-18.7c.2-.5-.3-1-.8-.8l-.3-.3zM10.4 13.2l7-7-5.6 8.4-1.4-1.4z" />
          </svg>
        }
        scene={<PakSadatScene />}
      />
    </div>
  )
}
