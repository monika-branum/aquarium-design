import './Tank.css';
import React from 'react';

export default function Tank({ buddy, axolotl, coral, affirmations }) {
  return (
    <div>
      <img src={`images/${buddy}.png`}></img>
      <img src={`images/${axolotl}.png`}></img>
      <img src={`images/${coral}.png`}></img>
      {affirmations.map((affirmation) => (
        <p key={affirmation}>{affirmation}</p>
      ))}
    </div>
  );
}
