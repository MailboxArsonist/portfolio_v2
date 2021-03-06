import styles from './Card.module.css';
import Image from 'next/image'
export default function Card(props) {
    const Icons = props.icons.map((path, index) => <Image src={`/icons/${path}`} height={36} width={36} key={path + index} alt={path.replace('.svg', '')} />)
    return (
        <article className={styles.article}>
            <div className={styles.icons}>
                {Icons}
            </div>
            <h4 className={styles.h4}>{props.title}</h4>
            <p className={styles.p}>{props.text}</p>
        </article>
    )
}