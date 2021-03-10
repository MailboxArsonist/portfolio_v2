import styles from './Projects.module.css'
import projectsData from '../../data/projects.json'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectModal from '../ProjectModal/ProjectModal'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#__next')

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width : '800px',
      maxHeight : '100%',
      padding: '0',
      maxWidth : '100%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(53, 53, 53, 0.75)'
    }
};

export default function Projects() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projects] = useState(projectsData);
    const [currentProject, setCurrentProject] = useState(null);
    
    function openModal(index) {
        setIsOpen(true)
        setCurrentProject(projects[index])
    }

    function closeModal(){
        setIsOpen(false)
        setCurrentProject(null)
    }

    const Projects = projects.map(({title, text, src, buttonText}, index) => (
        <ProjectCard openModal={openModal} title={title} text={text} key={index + title} src={src} buttonText={buttonText} index={index} />
    ))

    return (
        <section className={styles.section}>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                { currentProject && <ProjectModal project={currentProject} closeModal={closeModal} /> }
            </Modal>

            <h3 className={styles.h3}>Heres’s some of my work</h3>

            <div className={styles.projects}>
                { Projects }
            </div>

        </section>
    )
}