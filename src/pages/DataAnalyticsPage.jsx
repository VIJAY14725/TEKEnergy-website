import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function DataAnalyticsPage() {
  const features = [
    { title: 'Data Strategy & Governance', description: 'Establish frameworks for data quality, security, and compliance.' },
    { title: 'Data Warehouse Design', description: 'Architect scalable central repositories for enterprise data.' },
    { title: 'Business Intelligence', description: 'Develop comprehensive reporting solutions for all organizational tiers.' },
    { title: 'Advanced Analytics', description: 'Apply statistical models to uncover hidden patterns and correlations.' },
    { title: 'Data Visualization', description: 'Create intuitive, interactive dashboards that tell compelling data stories.' },
    { title: 'Real-Time Analytics', description: 'Process and analyze streaming data for instant situational awareness.' }
  ];

  const benefits = [
    'Data-Driven Decision Making',
    'Competitive Advantage',
    'Improved Operational Efficiency',
    'Revenue Growth'
  ];

  const useCases = [
    'Customer Analytics',
    'Sales Forecasting',
    'Operational Analytics',
    'Market Intelligence'
  ];

  return (
    <ServiceDetailTemplate
      title="Data Analytics"
      overview="Transform raw data into actionable insights that drive informed decision-making and unlock business value."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default DataAnalyticsPage;