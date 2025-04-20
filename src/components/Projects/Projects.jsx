import styles from './styles.module.css';
import Title from '../Title/Title';
import Project from '../../assets/Project';
import RightProject from '../Project/RightProject';
import LeftProject from '../Project/LeftProject';
import JavaScript from '../../assets/JavaScript';
import projectBanner from '../../assets/project-banner.jpg';

function Projects(){
    const data = {
        title: 'Curated',
        b: 'Projects',
        p: 'Showcase of my projects that I\'m proud of.',
    };

    const projests = [{
        title: "Hexcape",
        disc: "A game that combines iOS and physical puzzle game, using 3D, 360 world view, and AR",
        cover: projectBanner,
        tools: [JavaScript, JavaScript],
        link: "/",
        repo: "/",
    }];

    return (
        <article id='Projects' className={styles.article}>
            <Title data={data} Icon={Project}/>
            <div className={styles.projects}>
                <RightProject project={projests[0]}/>
                {/*<LeftProject/>
                <RightProject project={projests[0]}/>*/}
            </div>
        </article>
    );
}

export default Projects;