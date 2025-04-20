import styles from './styles.module.css';
import Title from '../Title/Title';
import ContactUs from '../../assets/ContactUs';
import Email from '../../assets/Email';
import Linkedin from '../../assets/Linkedin';
import Twitter from '../../assets/Twitter';

function Contact(){
    const data = {
        title: 'Contact',
        b: 'Me',
        p: 'Fell free to connect with me',
    };

    return (
        <article id='Contact' className={styles.article}>
            <Title data={data} Icon={ContactUs}/>
            <div className={styles.contactus}>
                <p>I’m always open to new opportunities, whether it's collaborating on a project, exploring job roles, or simply connecting with like-minded people. If you have something in mind or just want to say hello, feel free to reach out — <b>I’d love to hear from you!</b></p>
                <section>
                    <span><Email/></span>
                    <span><Linkedin/></span>
                    <span><Twitter/></span>
                </section>
            </div>
        </article>
    );
}

export default Contact;