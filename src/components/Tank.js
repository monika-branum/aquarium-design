import './Tank.css';
import React from 'react';

export default function Tank(buddy, axolotl) {
  return (
    <div>
      <img src={`images/${buddy}.png`}></img>
      <img src={`images/${axolotl}.png`}></img>
    </div>
  );
}
