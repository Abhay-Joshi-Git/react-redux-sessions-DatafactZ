import React from 'react';
import styles from "../../styles/about.scss";
import classnames from 'classnames';

console.log('about', styles);

export default () => (
    <div className={classnames(styles['container-color'])}>
        this is about styling!!
    </div>
)
