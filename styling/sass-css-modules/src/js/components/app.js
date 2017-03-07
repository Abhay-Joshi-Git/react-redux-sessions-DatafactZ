import React from "react";
import About from "./about.js";
import styles from "../../styles/container.scss";
import classnames from 'classnames';


console.log(styles);

export default () => (
    <div
        className={classnames(styles.container, styles['container-color'])}
        //className={styles.container + ' ' + styles['container-color']}
        style={{color: 'red'}}
    >
        your app goes here!!

        <br />
        <br />

        <About />
    </div>
);
