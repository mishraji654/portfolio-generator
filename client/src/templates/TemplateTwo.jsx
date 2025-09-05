import React from 'react';

export default function TemplateTwo({ profile }) {
  return (
    <div style={{padding:20, background:'#222', color:'#fff'}}>
      <h1>{profile.hero.name}</h1>
      <p>{profile.hero.title} - {profile.hero.tagline}</p>
      {profile.hero.image && <img src={profile.hero.image} alt="hero" width="200" style={{borderRadius:'50%'}} />}
      <h2>About</h2>
      <p>{profile.about.bio}</p>
      <p>Email: {profile.about.email}</p>
      <p>Phone: {profile.about.phone}</p>
      <p>Location: {profile.about.location}</p>
    </div>
  );
}
