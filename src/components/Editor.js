import React from 'react';
import './Editor.css';

export default function Editor({ setBuddy }) {
  return (
    <div>
      <select onChange={(e) => setBuddy(e.target.value)}>
        <option value="blobburrito">Bloburrito</option>
        <option value="blobcrown">King Blob</option>
        <option value="blobsushi">Unagi</option>
        <option value="jellycute">Janie and Jared</option>
        <option value="turtle">Timmy</option>
        <option value="whale">Johnathon</option>
      </select>
    </div>
  );
}
