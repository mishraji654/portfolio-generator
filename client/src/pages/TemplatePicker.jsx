import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TemplatePicker() {
  const navigate = useNavigate();

  return (
    <div style={{padding:20}}>
      <h1>Select a Portfolio Template</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop:20 }}>
        <div 
          onClick={() => navigate('/create/1')} 
          style={{border:'1px solid #ccc', padding:20, cursor:'pointer'}}
        >
          <h3>Template 1</h3>
        </div>
        <div 
          onClick={() => navigate('/create/2')} 
          style={{border:'1px solid #ccc', padding:20, cursor:'pointer'}}
        >
          <h3>Template 2</h3>
        </div>
      </div>
    </div>
  );
}
