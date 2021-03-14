import { useState } from 'react'
import emailjs from 'emailjs-com'
import styles from './Footer.module.css'
import Image from 'next/image'
import Button from '../Button/Button'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const successMessage = 'Thanks a lot! I\'ll get back to you soon. 😊'
    const errorMessage = <a href="mailto:matthewdodd93@gmail.com">😟 Sorry.. Looks like something went wrong, click here to send me an email the old fashioned way!</a>

    const handleSubmit = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, e.target, process.env.NEXT_PUBLIC_EMAIL_USER)
          .then(() => {
            setEmailSent(true)
          }, () => {
            setEmailSent(true)
            setEmailError(true)
          });
    }

    return (
        <footer id="footer" className={styles.footer}>
            <div>
                <div>
                    <h4>Contact</h4>
                    <p>Shoot me a message, I’ll get back to you within 24 hours!</p>
                    <ul className={styles.info}>
                        <li>📬   <span>matthewdodd93@gmail.com</span></li>
                        <li>📱   <span>+44 7832 789 508</span></li>
                        <li>📍   <span>Brighton</span></li>
                    </ul>
                    <p>You can also find me here.</p>
                    <ul className={styles.links}>
                        <li>
                            <a href="https://github.com/MailboxArsonist" target="_blank">
                                <Image src={"/icons/github.svg"} height={28} width={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/matthew-dodd-5ab50315a/" target="_blank">
                                <Image src={"/icons/linkedin.svg"} height={28} width={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MatthewDodd1993" target="_blank">
                                <Image src={"/icons/twitter.svg"} height={28} width={28} />
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className={styles.formContainer}>
                    <h4>Looking for someone to drink all the office coffee?</h4>
                    <p>Fill in the form below..</p>
                    { emailSent ? 
                        <p class={styles.emailSentMessage}>{ emailError ? errorMessage : successMessage }</p> :
                    
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input 
                                placeholder="Email" 
                                type="email"
                                name="user_email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                            />
                            <input 
                                placeholder="Subject"
                                type="text"
                                name="user_subject"
                                required
                                value={subject}
                                onChange={e => setSubject(e.target.value)} 
                            />
                            <textarea
                                rows='5'
                                placeholder="Message"
                                name="user_message"
                                required
                                value={message}
                                onChange={e => setMessage(e.target.value)} 
                            />
                            <Button>Whoooosh</Button>
                        </form>
                    }
                </div>

            </div>

        </footer>
    )
}