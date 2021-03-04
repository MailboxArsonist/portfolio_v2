import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
    const Projects = projects.map(({title, text, src, buttonText}) => (<ProjectCard title={title} text={text} key={title} src={src} buttonText={buttonText} />))
    return (
        <section className={styles.section}>
            <h3 className={styles.h3}>Heres’s some of my work</h3>
            {Projects}
        </section>
    )
}