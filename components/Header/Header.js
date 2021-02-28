import styles from './Header.module.css'
import {useState} from 'react'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuToggle = e => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <nav className={styles.nav} data-open={isOpen ? 'open' : 'closed'}>
                <h2 className={styles.h2}>Matthew Dodd</h2>
                <button className={styles.toggle} onClick={handleMenuToggle}>
                    <div />
                </button>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="">Projects</a></li>
                    <li className={styles.li}><a href="">About</a></li>
                    <li className={styles.li}><a href="">Say Hello</a></li>
                </ul>
            </nav>
        </header>
    )
}