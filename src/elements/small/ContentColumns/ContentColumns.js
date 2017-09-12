import React from 'react';
import styles from './ContentColumns.css';

const ContentColumns = ( props ) => {
  const classname = props.cols ? `ContentColumns ContentColumns--${cols}` : 'ContentColumns';

  return (
    <div className={classname} style={props.styles}>
       {props.children}
     </div>
  );
}

export default ContentColumns
