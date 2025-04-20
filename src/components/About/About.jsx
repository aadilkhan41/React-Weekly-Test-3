import styles from './styles.module.css';
import Title from '../Title/Title';
import User from '../../assets/User';
import geekster from '../../assets/geekster.svg';
import profile from '../../assets/profile.png';

function About(){
    const data = {
        title: 'About',
        b: 'Me',
        p: 'A story of growth and discovery',
    };
    
    return (
        <article id='About' className={styles.article}>
            <Title data={data} Icon={User}/>
            <div className={styles.aboutme}>
                <section className={styles.profile}>
                    <div></div>
                    <div>
                        <img src={profile} alt="Aadil Khan"/>
                        <p>Aadil khan</p>
                    </div>
                </section>
                <section className={styles.details}>
                    <h2>Aadil Khan</h2>
                    <p>Full-stack Intern at <a href="https://www.geekster.in/"><span>Geekster <img src={geekster} alt="Geekster"/></span></a></p>
                    <p>Hey, I’m <b>Aadil</b> — a fresher Software Engineer passionate about full-stack development and building real-world applications using Java and the MERN stack.</p>
                    <p>Coming from a telecom background, I made the switch to tech out of a genuine love for problem-solving and creating useful digital experiences. I’m particularly drawn to the React ecosystem and enjoy turning ideas into clean, responsive interfaces.</p>
                    <p>As part of my learning journey, I’ve been diving into hands-on projects and continuously improving my skills in both front-end and back-end development. I’m also a big fan of writing clean, maintainable code and understanding how things work under the hood.</p>
                    <p>Even though I’m at the beginning of my professional career, I bring curiosity, consistency, and a strong desire to grow as a developer. I’m always looking to learn, collaborate, and contribute to meaningful projects.</p>
                </section>
            </div>
        </article>
    );
}

export default About;