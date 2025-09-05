import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';

export default function PortfolioView() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get(`/profiles/${id}`).then(res => setProfile(res.data));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return profile.template === 1 
    ? <TemplateOne profile={profile} /> 
    : <TemplateTwo profile={profile} />;
}
