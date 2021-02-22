import styles from './Card.module.css';
export default function Card(props) {
    return (
        <Card className={styles.card}>
            <div></div>
            <h4 className={styles.h4}>{props.title}</h4>
            <p className={styles.p}>{props.text}</p>
        </Card>
    )
}