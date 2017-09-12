import React from 'react';
import styles from './GridLayout.css';

export const GridLayout = ( props ) => {
  const classname = `GridLayout GridLayout--${props.variant}`;

  return (
    <div className={classname} style={props.styles}>
       {props.children}
     </div>
  );
}


export const GridLayoutColumn = ( props ) => {
  return (
    <div className="GridLayout__column" style={props.styles}>
       {props.children}
     </div>
  );
}


export const GridLayoutRow = ( props ) => {
  return (
    <div className="GridLayout__row" style={props.styles}>
       {props.children}
     </div>
  );
}
