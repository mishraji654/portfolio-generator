import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplatePicker from './pages/TemplatePicker';
import CreateProfile from './pages/CreateProfile';
import ProfilesList from './pages/ProfilesList';
import PortfolioView from './pages/PortfolioView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TemplatePicker />} />
      <Route path="/create/:templateId" element={<CreateProfile />} />
      <Route path="/profiles" element={<ProfilesList />} />
      <Route path="/portfolio/:id" element={<PortfolioView />} />
    </Routes>
  );
}
