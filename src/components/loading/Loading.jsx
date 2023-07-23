import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';

const Loading = () => {
    const [dots, setDots] = useState('...');
    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prevDots) => {
          switch (prevDots) {
            case '...':
              return '..';
            case '..':
              return '.';
            case '.':
              return '...';
            default:
              return '...';
          }
        });
      }, 500);
      return () => clearInterval(interval);
    }, []); 
  
    return (
      <div>
        <h1>Loading{dots}</h1>
      </div>
    );
  };


export default Loading;
