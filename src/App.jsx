import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import AITransformationPage from './pages/AITransformationPage';
import DigitalTransformationPage from './pages/DigitalTransformationPage';
import CloudTransformationPage from './pages/CloudTransformationPage';
import ManagedServicesPage from './pages/ManagedServicesPage';
import ProductEngineeringPage from './pages/ProductEngineeringPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import FlexiSkillEngagementPage from './pages/FlexiSkillEngagementPage';
import HardwareServicesPage from './pages/HardwareServicesPage';
import NoLowCodeAdoptionPage from './pages/NoLowCodeAdoptionPage';
import TestingAsAServicePage from './pages/TestingAsAServicePage';

// Legacy Routes (Kept per task 6)
import MDMPage from './pages/MDMPage';
import RPAPage from './pages/RPAPage';
import CCBPage from './pages/CCBPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Service Detail Routes */}
        <Route path="/services/ai-transformation" element={<AITransformationPage />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
        <Route path="/services/cloud-transformation" element={<CloudTransformationPage />} />
        <Route path="/services/managed-services" element={<ManagedServicesPage />} />
        <Route path="/services/product-engineering" element={<ProductEngineeringPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/services/flexi-skill-engagement" element={<FlexiSkillEngagementPage />} />
        <Route path="/services/hardware-services" element={<HardwareServicesPage />} />
        <Route path="/services/no-low-code-adoption" element={<NoLowCodeAdoptionPage />} />
        <Route path="/services/testing-as-a-service" element={<TestingAsAServicePage />} />

        {/* Legacy Solutions Routes (Not in nav, but active) */}
        <Route path="/solutions/mdm" element={<MDMPage />} />
        <Route path="/solutions/rpa" element={<RPAPage />} />
        <Route path="/solutions/ccb" element={<CCBPage />} />

        {/* Catch-all 404 Route could go here */}
      </Routes>
    </Router>
  );
}

export default App;