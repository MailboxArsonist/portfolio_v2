import styles from './ProjectModal.module.css'

export default function ProjectModal({project : { title, text, src, alt }, closeModal}) {
    return (
        <div className={styles.container}>
            <button onClick={closeModal}>X</button>
            <img src={src} className={styles.image} alt={alt} />
            <div>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}