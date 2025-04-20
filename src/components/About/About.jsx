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
                    <p>Hello! You can call me <b>Aadil</b>. I am a Software Engineer who works with the React ecosystem and writes to teach people how to rebuild and redefine fundamental concepts through mental models.</p>
                    <p>I was born in 2001 in Jakarta, Indonesia. When the pandemic hit 5 years ago, my university was closed for a few weeks, and I started to learn web development, especially front-end development, out of boredom.</p>
                    <p>As part of my learning journey, I started writing blog articles as a way to solidify my knowledge. When I posted them here as documentation, I discovered that many people found them valuable. Hopefully, it can help you too.</p>
                    <p>I am also a full-stack engineer, here are my current favorite tech stack:</p>
                </section>
            </div>
        </article>
    );
}

export default About;