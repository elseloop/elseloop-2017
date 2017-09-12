import React from 'react';

export const Header = (props) => {
  return (
    <div>
      <div style={{
        backgroundColor: '#00c0ff'
      }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            elseloop
          </Link>
        </h1>
      </div>
    </div>
  );
}
