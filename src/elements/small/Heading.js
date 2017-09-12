import React from 'react';

export const Heading = ( props ) => {
  const Tag = props.tagName || props.level || 'h1';

  return (
    <Tag className={classname}>
      {props.children}
    </Tag>
  );
}
