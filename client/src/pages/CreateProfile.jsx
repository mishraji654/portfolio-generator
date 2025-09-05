import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export default function CreateProfile() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    hero: { name:'', title:'', tagline:'', image:'' },
    about: { bio:'', email:'', phone:'', location:'' }
  });

  const handleChange = (section, field, value) => {
    setForm(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { template: Number(templateId), ...form };
    await api.post('/profiles', payload);
    alert('Profile saved!');
    navigate('/profiles');
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:20, display:'flex', flexDirection:'column', gap:'10px'}}>
      <h2>Create Portfolio (Template {templateId})</h2>
      <input placeholder="Name" value={form.hero.name} 
        onChange={(e)=>handleChange('hero','name',e.target.value)} />
      <input placeholder="Title" value={form.hero.title}
        onChange={(e)=>handleChange('hero','title',e.target.value)} />
      <input placeholder="Tagline" value={form.hero.tagline}
        onChange={(e)=>handleChange('hero','tagline',e.target.value)} />
      <input placeholder="Hero Image URL" value={form.hero.image}
        onChange={(e)=>handleChange('hero','image',e.target.value)} />
      <textarea placeholder="About Bio" value={form.about.bio}
        onChange={(e)=>handleChange('about','bio',e.target.value)} />
      <input placeholder="Email" value={form.about.email}
        onChange={(e)=>handleChange('about','email',e.target.value)} />
      <input placeholder="Phone" value={form.about.phone}
        onChange={(e)=>handleChange('about','phone',e.target.value)} />
      <input placeholder="Location" value={form.about.location}
        onChange={(e)=>handleChange('about','location',e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
