import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureList from '@/components/FeatureList.jsx';
import { motion } from 'framer-motion';

function CCBPage() {
  const features = [
    {
      title: 'Flexible Billing',
      description: 'Support multiple billing cycles, rate structures, and payment options to meet diverse customer needs.',
    },
    {
      title: 'Customer Portal',
      description: 'Provide self-service capabilities for bill viewing, payment processing, and account management.',
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline billing operations with automated meter reading, validation, and invoice generation.',
    },
    {
      title: 'Multi-channel Support',
      description: 'Engage customers across web, mobile, email, and call center channels seamlessly.',
    },
    {
      title: 'Payment Processing',
      description: 'Accept payments through multiple channels with secure, PCI-compliant processing.',
    },
    {
      title: 'Credit & Collections',
      description: 'Manage credit risk and collections efficiently with automated workflows and notifications.',
    },
    {
      title: 'Analytics & Insights',
      description: 'Gain visibility into billing performance, customer behavior, and revenue trends.',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with industry regulations and reporting requirements automatically.',
    },
  ];

  const benefits = [
    {
      title: 'Happy Customers',
      description: 'Improve customer satisfaction with accurate billing, flexible payment options, and self-service tools.',
    },
    {
      title: 'Efficient Operations',
      description: 'Reduce operational costs and improve efficiency with automated billing and customer service processes.',
    },
    {
      title: 'Flexible Billing',
      description: 'Adapt quickly to new rate structures, regulatory changes, and business requirements.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>CC&B Solutions - TEKenergy</title>
        <meta
          name="description"
          content="Enhancing customer experience with CC&B - Empowering utilities to deliver exceptional customer experiences."
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
                  Enhancing Customer Experience with CC&B - Empowering Utilities to Deliver Exceptional Customer Experiences
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Transform your customer care and billing operations with solutions designed for modern utilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/bf06015d7ccf6bea6463f68bce7eee44.jpg"
                  alt="Customer care and billing system interface showing customer account management"
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

export default CCBPage;