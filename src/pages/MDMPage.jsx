import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureList from '@/components/FeatureList.jsx';
import { motion } from 'framer-motion';

function MDMPage() {
  const features = [
    {
      title: 'Automated Data Collection',
      description: 'Seamlessly collect meter data from multiple sources with automated validation and error handling.',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor energy consumption patterns in real-time with advanced analytics and alerting capabilities.',
    },
    {
      title: 'Data Validation',
      description: 'Ensure data accuracy with comprehensive validation rules and automated quality checks.',
    },
    {
      title: 'Integration Capabilities',
      description: 'Connect seamlessly with existing billing, CRM, and operational systems for unified data flow.',
    },
    {
      title: 'Advanced Analytics',
      description: 'Transform raw meter data into actionable insights with powerful analytics and reporting tools.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Handle growing data volumes with a scalable infrastructure designed for future expansion.',
    },
    {
      title: 'Security & Compliance',
      description: 'Protect sensitive data with enterprise-grade security and regulatory compliance features.',
    },
    {
      title: 'Custom Reporting',
      description: 'Generate tailored reports and dashboards to meet specific business requirements and KPIs.',
    },
  ];

  const benefits = [
    {
      title: 'Clean Data',
      description: 'Eliminate data inconsistencies and errors with automated validation and cleansing processes.',
    },
    {
      title: 'Smarter Decisions',
      description: 'Make informed decisions based on accurate, real-time insights from comprehensive meter data.',
    },
    {
      title: 'Faster Processes',
      description: 'Accelerate billing cycles and operational workflows with automated data processing.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>MDM Solutions - TEKenergy</title>
        <meta
          name="description"
          content="Efficient data management with MDM - Unlocking insights for informed decision-making in the utilities sector."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Efficient Data Management with MDM - Unlocking Insights for Informed Decision-Making
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Transform your meter data into a strategic asset with our comprehensive MDM solutions designed for modern utilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/1ab18b88f2e91aed824cfac19579ae70.jpg"
                  alt="Advanced meter data management system dashboard showing real-time analytics"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              <FeatureList features={features} benefits={benefits} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MDMPage;