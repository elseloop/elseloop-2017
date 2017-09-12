import React from 'react';
import styles from './Block.css';

const Block = ( props ) => {

  let classname = 'Block';
  classname += props.border ? ' Block--bordered' : '';
  classname += props.full ? ' Block--full' : '';

  return (
    <section className={classname} style={props.styles}>
       {props.children}
     </section>
  );
}

export default Block
