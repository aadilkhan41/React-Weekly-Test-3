import styles from './styles.module.css';
import ArrowButton from '../ArrowButton/ArrowButton';
import Github from '../../assets/Github';
import LinkButton from '../LinkButton/LinkButton';
import ProjectTools from '../ProjectTools/ProjectTools';

function RightProject({project}){    
    return (
        <div className={styles.project}>
            <section className={styles.info}>
                <h2>{project.title}</h2>
                <p>{project.disc}</p>
                <ProjectTools tools={project.tools}/>
                <div className={styles.buttons}>
                    <ArrowButton title='Visit' link={project.link}/>
                    <LinkButton title='Repository' Icon={Github} link={project.repo}/>
                </div>
            </section>
            <section style={styles.cover}>
                <img src={project.cover} alt={project.title}/>
            </section>
        </div>
    );
}

export default RightProject;