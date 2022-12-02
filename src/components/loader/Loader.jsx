import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
