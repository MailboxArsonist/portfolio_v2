import styles from './Header.module.css'
import {useState} from 'react'
import Button from '../Button/Button'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuToggle = e => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <nav className={styles.nav} data-open={isOpen ? 'open' : 'closed'}>

                <svg className={styles.logo} width="92" height="103" viewBox="0 0 236 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M130.339 81.0372C128.924 73.4841 127.063 61.1794 124.759 44.123L123.964 44.272L115.246 143.223L81.5551 149.537L37.1657 60.332L36.3706 60.481C40.5472 75.815 43.5171 88.1861 45.2801 97.5943L55.9145 154.342L24.609 160.208L0.0998324 29.4211L47.207 20.5933L91.8326 108.313L92.5283 108.183L101.867 10.3501L149.074 1.50366L173.583 132.291L141.085 138.381L130.339 81.0372Z" fill="black"/>
                        <path d="M143.105 220.105C155.423 222.11 165.069 220.028 172.043 213.859C179.028 207.613 183.686 197.337 186.015 183.029C188.356 168.645 187.314 157.676 182.889 150.122C178.553 142.505 170.799 137.787 159.628 135.969L147.807 134.045L134.038 218.629L143.105 220.105ZM228.738 187.627C224.64 212.8 214.514 231.101 198.359 242.53C182.294 253.894 161.713 257.534 136.617 253.449L87.7255 245.49L112.311 94.4552L164.646 102.974C188.824 106.91 206.484 116.146 217.626 130.684C228.845 145.233 232.549 164.215 228.738 187.627Z" fill="#1539CF"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="236" height="259" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>


                <button className={styles.toggle} onClick={handleMenuToggle}>
                    <div />
                </button>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="#projects">Projects</a></li>
                    <li className={styles.li}><a href="#about">About</a></li>
                    <li className={styles.li}>
                        <a href="#footer"><Button>Get in touch 🙋</Button></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}