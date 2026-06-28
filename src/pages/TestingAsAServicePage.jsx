import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function TestingAsAServicePage() {
  const features = [
    { title: 'Functional Testing', description: 'Verify application features perform exactly according to requirements.' },
    { title: 'Performance & Load Testing', description: 'Ensure systems remain stable under extreme user traffic conditions.' },
    { title: 'Security Testing', description: 'Identify vulnerabilities before they can be exploited by malicious actors.' },
    { title: 'Automation Testing', description: 'Build robust test suites to accelerate regression testing.' },
    { title: 'Mobile Testing', description: 'Cross-device validation to ensure consistent mobile experiences.' },
    { title: 'CI/CD Integration', description: 'Embed automated quality checks directly into your deployment pipelines.' }
  ];

  const benefits = [
    'Improved Software Quality',
    'Reduced Time-to-Market',
    'Cost-Effective Testing',
    'Risk Mitigation'
  ];

  const useCases = [
    'Enterprise Application Testing',
    'Mobile App Quality Assurance',
    'Performance Optimization',
    'Security Compliance Testing'
  ];

  return (
    <ServiceDetailTemplate
      title="Testing as a Service"
      overview="Comprehensive testing services to ensure quality, reliability, and performance of your applications."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default TestingAsAServicePage;