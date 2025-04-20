import { useState } from "react";
import styles from "./styles.module.css";

function NavigationBar(){
    const [activLink, setActiveLink] = useState("Home");
    return (
        <header className={styles.header}>
            <nav>
                {["Home","About","Projects","Skills","Contact"].map((link)=>{
                    return <a   key={link}
                                className={link===activLink? styles.active : ""} 
                                href={`#${link}`} 
                                onClick={()=>{setActiveLink(link)}}>{link}</a>;
                })}
            </nav>
        </header>
    );
}

export default NavigationBar;