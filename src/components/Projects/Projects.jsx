import styles from './styles.module.css';
import Title from '../Title/Title';
import Project from '../../assets/Project';
import RightProject from '../Project/RightProject';
import LeftProject from '../Project/LeftProject';
import JavaScript from '../../assets/JavaScript';
import projectBanner from '../../assets/project-1.png';

function Projects(){
    const data = {
        title: 'Curated',
        b: 'Projects',
        p: 'Showcase of my projects that I\'m proud of.',
    };

    const projests = [{
        title: "Bisleri Clone",
        disc: "The Bisleri Clone is a front-end web project designed to replicate 99% of the original Bisleri website, offering a seamless and dynamic user experience. This clone features a visually appealing layout with smooth animations and responsiveness across all devices.",
        cover: projectBanner,
        tools: [JavaScript],
        link: "https://bisleri-ui.vercel.app/",
        repo: "https://github.com/aadilkhan41/bisleri?tab=readme-ov-file",
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