import styles from './CardContainer.module.css';
export default function CardContainer({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {children}
            </div>
        </div>
    )
}