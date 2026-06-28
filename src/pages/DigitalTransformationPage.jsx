import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function DigitalTransformationPage() {
  const features = [
    { title: 'Process Digitization', description: 'Convert manual, paper-based operations into streamlined digital workflows.' },
    { title: 'Legacy System Modernization', description: 'Upgrade outdated monolithic architectures to modern, agile frameworks.' },
    { title: 'Digital Workflow Automation', description: 'Connect siloed systems to create seamless, automated end-to-end processes.' },
    { title: 'Customer Experience Enhancement', description: 'Build intuitive, responsive interfaces that delight users and drive engagement.' },
    { title: 'Data Integration', description: 'Unify disparate data sources to establish a single source of truth.' },
    { title: 'Change Management & Training', description: 'Ensure smooth organizational adoption of new digital tools and processes.' }
  ];

  const benefits = [
    'Improved Agility',
    'Enhanced Customer Experience',
    'Cost Reduction',
    'Increased Productivity'
  ];

  const useCases = [
    'E-commerce Platform Migration',
    'Business Process Automation',
    'Customer Portal Development',
    'Mobile-First Transformation'
  ];

  return (
    <ServiceDetailTemplate
      title="Digital Transformation"
      overview="Transform your legacy systems and processes into modern, agile, and customer-centric digital solutions that drive growth and competitive advantage."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default DigitalTransformationPage;