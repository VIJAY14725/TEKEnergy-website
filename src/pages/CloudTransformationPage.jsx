import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function CloudTransformationPage() {
  const features = [
    { title: 'Cloud Migration Strategy', description: 'Assess and plan the optimal path for moving workloads to the cloud.' },
    { title: 'Infrastructure as Code', description: 'Automate provisioning and management using tools like Terraform and Ansible.' },
    { title: 'Multi-Cloud Management', description: 'Operate seamlessly across AWS, Azure, and Google Cloud environments.' },
    { title: 'Cloud Security & Compliance', description: 'Implement robust security postures aligned with industry regulations.' },
    { title: 'Cost Optimization', description: 'Analyze usage patterns to eliminate waste and right-size cloud resources.' },
    { title: 'Disaster Recovery', description: 'Design resilient architectures ensuring business continuity under any scenario.' }
  ];

  const benefits = [
    'Scalability & Flexibility',
    'Cost Efficiency',
    'Enhanced Security',
    'Improved Reliability'
  ];

  const useCases = [
    'On-Premises to Cloud Migration',
    'Hybrid Cloud Setup',
    'Serverless Architecture Implementation',
    'Cloud-Native Application Development'
  ];

  return (
    <ServiceDetailTemplate
      title="Cloud Transformation"
      overview="Migrate, optimize, and manage your infrastructure on cloud platforms to achieve scalability, reliability, and cost efficiency."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default CloudTransformationPage;