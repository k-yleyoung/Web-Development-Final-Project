import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import 'w3-css/w3.css';

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className='w3-container w3-black'>
      <h1 className='w3-margin-bottom w3-text-white' style={{ fontFamily: 'Courier New, monospace' }}>
        {title}
      </h1>
      <button
        onClick={() => navigate('/')}
        className='w3-button w3-hover-grey'
        style={{ fontFamily: 'Courier New, monospace', color: 'white' }}
      >
        Dashboard
      </button>
    </header>
  );
}

Header.defaultProps = {
  title: 'Journal',
};

Header.propTypes = {
  title: PropTypes.string,
};
