import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function ManagedServicesPage() {
  const features = [
    { title: 'Infrastructure Management', description: 'Proactive monitoring and maintenance of servers, networks, and endpoints.' },
    { title: 'Security Monitoring', description: '24/7 threat detection and response to safeguard your digital assets.' },
    { title: 'Performance Optimization', description: 'Continuous tuning of systems to ensure maximum speed and reliability.' },
    { title: 'Patch Management', description: 'Automated deployment of critical updates to close security vulnerabilities.' },
    { title: 'Backup & Recovery', description: 'Reliable data protection strategies with tested restoration protocols.' },
    { title: 'Help Desk Support', description: 'Responsive technical assistance for your workforce to minimize downtime.' }
  ];

  const benefits = [
    'Reduced Operational Costs',
    'Enhanced Security Posture',
    'Improved System Uptime',
    'Focus on Core Business'
  ];

  const useCases = [
    'IT Infrastructure Outsourcing',
    'Security Operations Center (SOC)',
    'Network Management',
    'Database Administration'
  ];

  return (
    <ServiceDetailTemplate
      title="Managed Services"
      overview="Comprehensive managed services to ensure your IT infrastructure runs smoothly, securely, and efficiently 24/7."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default ManagedServicesPage;