import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function NoLowCodeAdoptionPage() {
  const features = [
    { title: 'Platform Selection', description: 'Guidance on choosing the right tools (e.g., PowerApps, OutSystems) for your needs.' },
    { title: 'Application Development', description: 'Rapid creation of business applications using visual interfaces.' },
    { title: 'Process Automation', description: 'Streamline repetitive tasks using intuitive workflow builders.' },
    { title: 'Integration & APIs', description: 'Connect low-code apps securely to core enterprise systems.' },
    { title: 'Custom Extensions', description: 'Develop traditional code blocks when requirements exceed platform limits.' },
    { title: 'Training & Support', description: 'Enable your internal teams to become proficient citizen developers.' }
  ];

  const benefits = [
    'Faster Development Cycles',
    'Reduced Development Costs',
    'Empowered Business Users',
    'Rapid Prototyping'
  ];

  const useCases = [
    'Business Process Automation',
    'Rapid Application Development',
    'Citizen Developer Programs',
    'Legacy System Modernization'
  ];

  return (
    <ServiceDetailTemplate
      title="No/Low Code Adoption"
      overview="Accelerate application development and digital transformation using modern no-code and low-code platforms."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default NoLowCodeAdoptionPage;