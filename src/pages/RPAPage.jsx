import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureList from '@/components/FeatureList.jsx';
import { motion } from 'framer-motion';

function RPAPage() {
  const features = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks across billing, customer service, and operational workflows.',
    },
    {
      title: 'Error Reduction',
      description: 'Minimize human errors with consistent, rule-based automation that ensures accuracy.',
    },
    {
      title: 'Scalable Deployment',
      description: 'Deploy bots quickly across multiple processes and scale as your needs grow.',
    },
    {
      title: 'Integration Ready',
      description: 'Connect seamlessly with existing systems and applications without major infrastructure changes.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track bot performance and process efficiency with comprehensive analytics dashboards.',
    },
    {
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated audit trails and documentation.',
    },
    {
      title: '24/7 Operations',
      description: 'Run automated processes around the clock without human intervention or downtime.',
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs by automating labor-intensive manual processes.',
    },
  ];

  const benefits = [
    {
      title: 'Boosts Productivity',
      description: 'Free up your team to focus on strategic initiatives while bots handle routine tasks.',
    },
    {
      title: 'Reduces Errors',
      description: 'Achieve near-perfect accuracy with automated processes that eliminate manual mistakes.',
    },
    {
      title: 'Improves Efficiency',
      description: 'Complete tasks faster and more consistently with intelligent automation.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>RPA Solutions - TEKenergy</title>
        <meta
          name="description"
          content="Experience efficiency and innovation with TEKenergy's RPA solutions - Transforming energy operations with cutting-edge technology."
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
                  Experience Efficiency and Innovation with TEKenergy's RPA Solutions! - Transforming Energy Operations with Cutting-edge Technology
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Automate your energy operations with intelligent RPA solutions that drive efficiency and reduce costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/bf5747e0f3e5432140936c264c93dd4b.jpg"
                  alt="Robotic process automation system managing energy operations workflows"
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

export default RPAPage;