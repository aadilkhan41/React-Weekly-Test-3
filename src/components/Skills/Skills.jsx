import styles from './styles.module.css';
import Title from '../Title/Title';
import Skill from '../../assets/Skill';
import React from '../../assets/React';
import Tailwind from '../../assets/Tailwind';

function Skills(){
    const data = {
        title: 'My',
        b: 'Skills',
        p: 'What I Bring to the Table',
    };
    return (
        <article id='Skills' className={styles.article}>
            <Title data={data} Icon={Skill}/>
            <div className={styles.skills}>
                <span><React/></span>
                <span><Tailwind/></span>
            </div>
        </article>
    );
}

export default Skills;