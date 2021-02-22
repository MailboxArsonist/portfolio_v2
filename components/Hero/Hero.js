import styles from './Hero.module.css'
import Button from '../Button/Button'

export default function Hero() {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Hi there, I’m a Full-Stack developer</h1>
            <h2 className={styles.h2}>On a mission to make cool things on the internet..</h2>
            <Button>Say hello! 👋</Button>
        </section>
    )
}