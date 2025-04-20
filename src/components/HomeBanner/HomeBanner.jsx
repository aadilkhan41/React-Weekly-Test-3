import styles from './styles.module.css';
import profileSticker from '../../assets/profile-sticker.png';

function HomeBanner(){
    return (
    <main id='Home' className={styles.main}>
        <div>
            <section className={styles.details}>
                <h1>I'm Aadil</h1>
                <p>I'm a fresher full-stack developer who enjoys building clean, functional web applications using Java and the MERN stack. I’m passionate about learning through hands-on experience and love turning ideas into real, working projects.</p>
                <span><a href="#About">More about me</a></span>
                <ul>
                    <li><a href="https://github.com/aadilkhan41" className={styles.github}></a></li>
                    <li><a href="https://leetcode.com/u/Aadil-khan/" className={styles.leetcode}></a></li>
                    <li><a href="https://www.linkedin.com/in/aadil-khan-82523a318" className={styles.linkedin}></a></li>
                    <li><a href="" className={styles.twitter}></a></li>
                </ul>
            </section>
            <section className={styles.sticker}>
                <img src={profileSticker} alt="Aadil's Profile"/>
            </section>
        </div>
    </main>
    );
}

export default HomeBanner;