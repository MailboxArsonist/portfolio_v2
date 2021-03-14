import styles from './Intro.module.css'
import CardContainer from '../CardContainer/CardContainer'
import Card from '../Card/Card'
import services from '../../data/services.json'

const Cards = services.map(({title, text, icons}) => (<Card title={title} text={text} key={title} icons={icons} />))
export default function Intro() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.h3}>My name is Matthew</h3>
                <p className={styles.p}>
                    I am a self taught Full Stack developer currently living in sunny Brighton.
                    I love working with JavaScript but I believe in finding the right tool for
                    the job and I truly love learning and keeping up to date as much as possible.
                    I’m always up for a challenge so hit me up if you’re working on something interesting!
                </p>
                <p className={styles.p}>
                    Currently I’m working at Obat helping to digitalise the French speaking construction / trade industry 
                    (salut, je parle Francais aussi 🇨🇮).
                </p>
            </div>
            <h4 className={styles.h4}>So what do I do ?</h4>
            <CardContainer>
                { Cards }
            </CardContainer>
        </section>
    )
}