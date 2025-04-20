import styles from './styles.module.css';
import projectBanner from '../../assets/project-banner.jpg';
import ArrowButton from '../ArrowButton/ArrowButton';
import Github from '../../assets/Github';
import LinkButton from '../LinkButton/LinkButton';
import JavaScript from '../../assets/JavaScript';
import ProjectTools from '../ProjectTools/ProjectTools';

function LeftProject(props){
    const tools = [JavaScript];
    
    return (
        <div className={styles.project}>
            <section style={styles.cover}>
                <img src={projectBanner} alt="Project"/>
            </section>
            <section className={styles.info}>
                <h2>Hexcape</h2>
                <p>A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR</p>
                <ProjectTools tools={tools}/>
                <div className={styles.buttons}>
                    <ArrowButton title='Visit'/>
                    <LinkButton title='Repository' Icon={Github} link='/'/>
                </div>
            </section>
        </div>
    );
}

export default LeftProject;