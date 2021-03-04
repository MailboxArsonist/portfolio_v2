import styles from './ProjectCard.module.css'
import Button from '../Button/Button'

export default function ProjectCard({title, text, src, buttonText, alt}) {
    return (
        <article className={styles.article}>
            <img src={src} className={styles.image} alt={alt} />
            <div>
                <h6>{title}</h6>
                <p>{text}</p>
                <Button>{buttonText}</Button>
            </div>
        </article>
    )
}