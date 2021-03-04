import styles from './ProjectCard.module.css'
import Button from '../Button/Button'

export default function ProjectCard({title, text, src, buttonText, alt, openModal, index}) {

    const handleSeeMoreButtonClicked = () => {
        openModal(index);
    }
    return (
        <article className={styles.article}>
            <img src={src} className={styles.image} alt={alt} />
            <div>
                <h6>{title}</h6>
                <p>{text}</p>
                <Button clicked={handleSeeMoreButtonClicked}>
                    {buttonText}
                </Button>
            </div>
        </article>
    )
}