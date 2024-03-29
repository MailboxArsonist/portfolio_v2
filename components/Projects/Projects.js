import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "800px",
    maxHeight: "100%",
    padding: "0",
    maxWidth: "100%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
  overlay: {
    backgroundColor: "rgba(53, 53, 53, 0.75)",
  },
};

export default function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projects] = useState(projectsData);
  const [currentProject, setCurrentProject] = useState(null);

  function openModal(index) {
    setIsOpen(true);
    setCurrentProject(projects[index]);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentProject(null);
  }

  const Projects = projects.map(
    ({ title, text, src, buttonText, alt }, index) => (
      <ProjectCard
        openModal={openModal}
        title={title}
        text={text}
        key={index + title}
        src={src}
        buttonText={buttonText}
        index={index}
        alt={alt}
      />
    )
  );

  return (
    <section id="projects" className={styles.section}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Modal"
      >
        {currentProject && (
          <ProjectModal project={currentProject} closeModal={closeModal} />
        )}
      </Modal>

      <h3 className={styles.h3}>Heres’s some of my work</h3>

      <div className={styles.projects}>{Projects}</div>

      <a
        className={styles.githubLink}
        href="https://github.com/MailboxArsonist?tab=repositories"
        target="_blank"
        name="github"
        rel="noopener"
      >
        <svg
          width="50"
          height="30"
          viewBox="0 0 247 201"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M217.089 0.00298392C210.412 -0.095707 194.901 2.16916 169.004 19.4871C154.89 15.9626 139.873 14.2233 124.829 14.2233C108.278 14.2233 91.5511 16.3234 75.9525 20.5988C38.772 -4.74463 22.3609 0.449003 22.3609 0.449003C11.647 27.2188 18.2677 47.0384 20.28 51.9606C7.68745 65.5398 0 82.8798 0 104.132C0 120.176 1.82762 134.567 6.29275 147.076C6.54039 148.042 6.46012 147.826 6.87734 148.653C7.86106 151.242 8.95481 153.756 10.1842 156.184C10.6054 157.057 10.9888 157.704 10.9888 157.704C23.5407 181.082 48.2846 196.183 92.31 200.925L158.896 201C205.847 196.348 228.376 181.202 238.758 157.666L239.418 156.134C240.402 153.756 241.26 151.282 243.605 142.956C245.951 134.629 247 120.208 247 104.126C247 81.0598 238.33 62.6036 224.249 48.5623C226.71 40.6269 229.997 23.0036 220.968 0.442571C220.968 0.442571 219.702 0.0415759 217.089 0.00278292L217.089 0.00298392ZM164.616 84.6476C175.458 84.6241 184.744 86.484 191.717 93.7929V93.7992C200.441 102.953 205.547 114.005 205.547 125.915C205.547 181.523 169.753 183.035 125.603 183.035C81.4451 183.035 45.6584 175.33 45.6584 125.915C45.6584 114.083 50.6894 103.098 59.3063 93.9813C73.6799 78.7877 98.004 86.8333 125.603 86.8333C139.77 86.8311 153.075 84.6726 164.617 84.6474L164.616 84.6476ZM82.3771 101.023C73.1905 101.023 65.743 113.433 65.743 128.748C65.743 144.065 73.1901 156.479 82.3771 156.479C91.5636 156.479 99.0111 144.065 99.0111 128.748C99.0111 113.435 91.564 101.034 82.3771 101.023ZM171.625 101.023C162.439 101.023 154.991 113.433 154.991 128.748C154.991 144.065 162.438 156.479 171.625 156.479C180.812 156.479 188.259 144.065 188.259 128.748C188.259 113.435 180.812 101.034 171.625 101.023Z"
            fill="inherit"
          />
        </svg>
        <span>See more projects</span>
      </a>
    </section>
  );
}
