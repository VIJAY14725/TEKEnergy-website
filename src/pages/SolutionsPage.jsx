import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SolutionCard from '@/components/SolutionCard.jsx';
import { motion } from 'framer-motion';

function SolutionsPage() {
  const solutions = [
    {
      title: 'OUAF',
      description: 'Oracle Utilities Application Framework provides a robust foundation for building and deploying utility applications with enhanced performance and scalability.',
    },
    {
      title: 'CC&B',
      description: 'Customer Care and Billing solutions that streamline billing processes, improve customer satisfaction, and reduce operational costs.',
      link: '/solutions/ccb',
    },
    {
      title: 'MDM',
      description: 'Meter Data Management systems that collect, validate, and analyze meter data to provide actionable insights for better decision-making.',
      link: '/solutions/mdm',
    },
    {
      title: 'RPA',
      description: 'Robotic Process Automation solutions that automate repetitive tasks, reduce errors, and boost productivity across your operations.',
      link: '/solutions/rpa',
    },
    {
      title: 'Smart Metering',
      description: 'Advanced metering infrastructure that enables real-time monitoring, remote reading, and improved energy management capabilities.',
    },
    {
      title: 'Data Analytics',
      description: 'Powerful analytics platforms that transform raw data into meaningful insights, driving informed business decisions and operational excellence.',
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive managed services that ensure your systems run smoothly, with 24/7 support and proactive maintenance.',
    },
    {
      title: 'Oracle AI',
      description: 'Artificial Intelligence solutions that leverage machine learning and predictive analytics to optimize energy operations and customer experiences.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Solutions - TEKenergy</title>
        <meta
          name="description"
          content="Tailored solutions for operational excellence in the Energy & Utilities sector. Explore our comprehensive technology offerings."
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
                  Our Energy & Utilities Solutions - Tailored Solutions for Operational Excellence
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Discover our comprehensive suite of technology solutions designed to transform your energy operations and drive sustainable growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <SolutionCard
                    key={index}
                    title={solution.title}
                    description={solution.description}
                    link={solution.link}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SolutionsPage;