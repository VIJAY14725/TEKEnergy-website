import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function ProductEngineeringPage() {
  const features = [
    { title: 'Product Strategy & Ideation', description: 'Define market fit, technical feasibility, and strategic roadmaps.' },
    { title: 'Full-Stack Development', description: 'End-to-end engineering from robust backends to engaging frontends.' },
    { title: 'UI/UX Design', description: 'Craft intuitive user journeys and pixel-perfect interfaces.' },
    { title: 'Quality Assurance & Testing', description: 'Rigorous manual and automated testing to ensure flawless delivery.' },
    { title: 'DevOps & Deployment', description: 'Streamlined CI/CD pipelines for rapid, reliable release cycles.' },
    { title: 'Product Maintenance', description: 'Ongoing support and feature iteration post-launch.' }
  ];

  const benefits = [
    'Faster Time-to-Market',
    'High-Quality Products',
    'Scalable Architecture',
    'Continuous Innovation'
  ];

  const useCases = [
    'SaaS Product Development',
    'Mobile App Development',
    'Enterprise Software Solutions',
    'IoT Product Development'
  ];

  return (
    <ServiceDetailTemplate
      title="Product Engineering"
      overview="Design, develop, and deploy innovative products from concept to market with our expert engineering team."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default ProductEngineeringPage;