import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function AITransformationPage() {
  const features = [
    { title: 'AI Strategy & Roadmap', description: 'Comprehensive planning to align AI initiatives with your core business objectives.' },
    { title: 'Generative AI Implementation', description: 'Deploy cutting-edge LLMs and generative models for content, code, and insights.' },
    { title: 'Machine Learning Models', description: 'Custom-trained models designed to predict trends and automate complex decisions.' },
    { title: 'AI-Powered Automation', description: 'Integrate AI agents into your workflows to handle cognitive tasks at scale.' },
    { title: 'Predictive Analytics', description: 'Forecast market shifts and operational needs using historical data patterns.' },
    { title: 'System Integration', description: 'Seamlessly embed AI capabilities into your existing enterprise architecture.' }
  ];

  const benefits = [
    'Accelerated Innovation',
    'Enhanced Decision-Making',
    'Operational Efficiency',
    'New Revenue Opportunities'
  ];

  const useCases = [
    'Intelligent Customer Service',
    'Predictive Maintenance',
    'Automated Content Generation',
    'Fraud Detection'
  ];

  return (
    <ServiceDetailTemplate
      title="AI Transformation"
      overview="Harness the power of Generative AI and machine learning to revolutionize your business operations, enhance decision-making, and unlock new revenue streams."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default AITransformationPage;