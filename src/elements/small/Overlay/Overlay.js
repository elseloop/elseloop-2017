import React from 'react';
import styles from './Overlay.css';

const Overlay = ( props ) => {

  const classname = 'Overlay';

  return (
    <div className={classname} style={props.styles}>
       {props.children}
     </div>
  );
}

export default Overlay
