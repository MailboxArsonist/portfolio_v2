import styles from './Button.module.css';
export default function Button({clicked, children}) {
    return (
        <button onClick={clicked} className={styles.button}>{children}</button>
    )
}