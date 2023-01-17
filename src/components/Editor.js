import React from 'react';
import './Editor.css';

export default function Editor({ setBuddy }) {
  const handleBuddy = (e) => setBuddy(e.target.value);
  return (
    <div>
      <select onChange={handleBuddy}>
        <option value="blobburrito">Bloburrito</option>
        <option value="blobcrown">King Blob</option>
        <option value="blobsushi">Unagi</option>
        <option value="jellyfish">Janie and Jared</option>
        <option value="turtle">Timmy</option>
        <option value="narwhal">Johnathon</option>
      </select>
    </div>
  );
}
