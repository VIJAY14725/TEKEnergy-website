import React from 'react';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate.jsx';

function FlexiSkillEngagementPage() {
  const features = [
    { title: 'Skill-Based Augmentation', description: 'Source precisely the technical skills missing from your current team.' },
    { title: 'Flexible Engagement Models', description: 'Choose from part-time, full-time, or project-specific resource allocation.' },
    { title: 'Expert Talent Pool', description: 'Access a vetted network of senior engineers and domain specialists.' },
    { title: 'Quick Onboarding', description: 'Rapid integration of new talent into your existing workflows and culture.' },
    { title: 'Scalable Team Expansion', description: 'Ramp team size up or down based on current project demands.' },
    { title: 'Knowledge Transfer', description: 'Ensure IP and domain knowledge remain in-house when engagements end.' }
  ];

  const benefits = [
    'Cost Flexibility',
    'Access to Specialized Skills',
    'Faster Project Delivery',
    'Reduced Hiring Overhead'
  ];

  const useCases = [
    'Project-Based Staffing',
    'Specialized Skill Augmentation',
    'Team Scaling',
    'Knowledge Transfer & Training'
  ];

  return (
    <ServiceDetailTemplate
      title="Flexi Skill Engagement"
      overview="Access flexible, on-demand technology talent to augment your team with specialized skills and expertise."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  );
}

export default FlexiSkillEngagementPage;