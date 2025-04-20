import styles from './styles.module.css';

function Title({data, Icon}){
    return (
        <div className={styles.title}>
            <div><Icon/></div>
            <h1>{data.title} <b>{data.b}</b></h1>
            <p>{data.p}</p>
        </div>
    );
}

export default Title;