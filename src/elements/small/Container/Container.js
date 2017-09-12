import React from 'react';
import styles from './Container.css';

const Container = (props) => {
    const classname = props.stacked ? 'Container Container--stacked' : 'Container';

    return (
      <div className={classname}>
        {props.children}
      </div>
    )
};

export default Container;
