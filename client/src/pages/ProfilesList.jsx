import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function ProfilesList() {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/profiles').then(res => setProfiles(res.data));
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Saved Profiles</h1>
      {profiles.length === 0 && <p>No profiles yet</p>}
      {profiles.map(p => (
        <div key={p.id} style={{border:'1px solid #ccc', padding:10, margin:'10px 0'}}>
          <h3>{p.hero?.name}</h3>
          <p>{p.hero?.title}</p>
          <button onClick={()=>navigate(`/portfolio/${p.id}`)}>View Portfolio</button>
        </div>
      ))}
    </div>
  );
}
