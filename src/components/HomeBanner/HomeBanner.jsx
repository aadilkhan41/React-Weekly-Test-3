import styles from './styles.module.css';
import profileSticker from '../../assets/profile-sticker.png';
import ArrowButton from '../ArrowButton/ArrowButton';

function HomeBanner(){
    return (
    <main id='Home' className={styles.main}>
        <div>
            <section className={styles.details}>
            <h1>I'm Aadil</h1>
            <p>I work with React Ecosystem, and write to teach people how to rebuild and redefine fundamental concepts through mental models.</p>
            <span><a href="#About">More about me</a></span>
            <ul>
                <li><a href="" className={styles.github}></a></li>
                <li><a href="" className={styles.leetcode}></a></li>
                <li><a href="" className={styles.linkedin}></a></li>
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