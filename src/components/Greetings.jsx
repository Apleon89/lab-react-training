import React from 'react';

function Greetings(props) {
  return (
    <div>
      <p
        style={{
          border: '1px solid black',
        }}
      >
        {props.lang === 'de'
          ? 'Hallo'
          : props.lang === 'en'
          ? 'Hello'
          : props.lang === 'es'
          ? 'Hola'
          : props.lang === 'fr'
          ? 'Bonjour'
          : null}{' '}
        {props.children}
      </p>
    </div>
  );
}

export default Greetings;
