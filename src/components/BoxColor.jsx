import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        height: '50px',
        width: '300px',
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
