import React from 'react';

const Footer = () => {
  const footerStyle = {
    margin: 0,
    padding: 0,
    borderTop: 0,
    marginTop: 0,
    fontFamily: 'Courier New, monospace',
  };

  const h4Style = {
    fontFamily: 'Courier New, monospace',
  };

  return (
    <div className="w3-container w3-padding-16 w3-center w3-black w3-bottom" style={footerStyle}>
      <footer>
        <h4 style={h4Style}>CS 2830 Final Project Fall 2023</h4>
        <h4 style={h4Style}>Created by: Alissa Chimienti, Elise Stoddard, Chad Sandidge, and Kyle Young</h4>
      </footer>
    </div>
  );
};

export default Footer;
