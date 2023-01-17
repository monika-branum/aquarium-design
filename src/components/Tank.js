import './Tank.css';
import React from 'react';

export default function Tank(buddy) {
  return (
    <div>
      <img src={`./images/${buddy}.png`}></img>Tank
    </div>
  );
}
