import React from 'react';

export default function TemplateOne({ profile }) {
  return (
    <div style={{padding:20}}>
      <h1>{profile.hero.name}</h1>
      <h3>{profile.hero.title}</h3>
      <p>{profile.hero.tagline}</p>
      {profile.hero.image && <img src={profile.hero.image} alt="hero" width="200" />}
      <h2>About</h2>
      <p>{profile.about.bio}</p>
      <p>Email: {profile.about.email}</p>
      <p>Phone: {profile.about.phone}</p>
      <p>Location: {profile.about.location}</p>
    </div>
  );
}
