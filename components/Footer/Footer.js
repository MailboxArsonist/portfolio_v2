import { useState } from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Button from '../Button/Button'

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting email ${email}, subject ${subject}, message ${message}`)
    }

    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h4>Contact</h4>
                    <p>Shoot me a message, I’ll get back to you the same day, except Sundays..</p>
                    <ul className={styles.info}>
                        <li>📬   matthewdodd93@gmail.com</li>
                        <li>📱   +44 7832 789 508</li>
                        <li>📍   Brighton </li>
                    </ul>
                    <p>You can also find me here.</p>
                    <ul className={styles.links}>
                        <li>
                            <a href="https://github.com/MailboxArsonist" target="_blank">
                                <Image src={"/icons/github.svg"} height={28} width={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MailboxArsonist" target="_blank">
                                <Image src={"/icons/linkedin.svg"} height={28} width={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MailboxArsonist" target="_blank">
                                <Image src={"/icons/twitter.svg"} height={28} width={28} />
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className={styles.formContainer}>
                    <h4>Looking for someone to drink all the office coffee?</h4>
                    <p>Fill in the form below..</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input 
                            placeholder="Email" 
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <input 
                            placeholder="Subject"
                            type="text"
                            required
                            value={subject}
                            onChange={e => setSubject(e.target.value)} 
                        />
                        <textarea
                            rows='5'
                            placeholder="Message"
                            required
                            value={message}
                            onChange={e => setMessage(e.target.value)} 
                        />
                        <Button>Whoooosh</Button>
                    </form>
                </div>

            </div>

        </footer>
    )
}