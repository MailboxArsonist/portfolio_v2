import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <h2 className={styles.h2}>Matthew Dodd</h2>

                <ul className={styles.ul}>
                    <li className={styles.li}><a href="">Projects</a></li>
                    <li className={styles.li}><a href="">About</a></li>
                    <li className={styles.li}><a href="">Say Hello</a></li>
                </ul>
            </nav>
        </header>
    )
}