import React from 'react';
import './Editor.css';

export default function Editor({ setBuddy, setAxolotl, setCoral }) {
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
      <select onChange={(e) => setAxolotl(e.target.value)}>
        <option value="axolotlcherry">Cherry</option>
        <option value="axolotllavender">Lavender</option>
        <option value="axolotlsakura">Sakura</option>
        <option value="axolotlspace">Space</option>
      </select>
      <select onChange={(e) => setCoral(e.target.value)}>
        <option value="coralfish">Pink with Buddies</option>
        <option value="coraljelly">Jellies</option>
        <option value="coralombre">Ombre</option>
        <option value="coralpink">Pink</option>
        <option value="coralpurple">Purple</option>
        <option value="coralpurple2">Also Purple</option>
      </select>
    </div>
    <div>
      <input type="text"
    </div>
  );
}
