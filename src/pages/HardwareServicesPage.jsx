import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function HardwareServicesPage() {
  const features = [
    { title: 'Hardware Procurement', description: 'Strategic sourcing of enterprise-grade equipment at competitive rates.' },
    { title: 'Infrastructure Deployment', description: 'Physical installation and configuration of servers and network gear.' },
    { title: 'Maintenance & Support', description: 'On-site and remote troubleshooting for all hardware issues.' },
    { title: 'Asset Management', description: 'Comprehensive tracking of hardware inventory throughout its lifecycle.' },
    { title: 'Hardware Refresh', description: 'Planned upgrade cycles to prevent performance bottlenecks.' },
    { title: 'Vendor Management', description: 'Single point of contact for all OEM relationships and warranties.' }
  ];

  const benefits = [
    'Optimized Hardware Investments',
    'Reduced Downtime',
    'Extended Equipment Lifespan',
    'Simplified Procurement'
  ];

  const useCases = [
    'Data Center Infrastructure',
    'Desktop & Laptop Management',
    'Network Equipment Deployment',
    'IoT Device Management'
  ];

  return (
    <ServiceDetailTemplate
      title="Hardware Services"
      overview="Comprehensive hardware solutions including procurement, deployment, maintenance, and lifecycle management."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default HardwareServicesPage;