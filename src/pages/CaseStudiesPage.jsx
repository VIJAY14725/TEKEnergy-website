import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CaseStudyCard from '@/components/CaseStudyCard.jsx';
import { motion } from 'framer-motion';

function CaseStudiesPage() {
  const caseStudies = [
    {
      image: 'https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/9f2c2048a1338bc517059d2cdcd69098.jpg',
      title: 'Empowering Growth: Transforming Utilities Operations for Enhanced Customer Satisfaction',
      customer: 'The Electricity and Water Authority (Middle East)',
      challenges: 'The authority faced challenges with legacy billing systems, inefficient meter data management, and limited customer engagement capabilities. Manual processes led to billing errors and delayed customer service responses.',
      solution: 'TEKenergy implemented a comprehensive CC&B and MDM solution, integrating smart metering infrastructure with advanced analytics. The solution included automated billing processes, real-time meter data collection, and a customer self-service portal.',
      benefits: [
        '47% reduction in billing errors',
        '62% improvement in customer satisfaction scores',
        '38% decrease in operational costs',
        '2.3x faster customer service response times',
      ],
    },
    {
      image: 'https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/77a6ec7e90b2c422e78945ce802a7fd0.jpg',
      title: 'Empowering Growth - Modernizing Utilities Operations for Enhanced Customer Satisfaction',
      customer: 'The Electricity and Water Authority (North India)',
      challenges: 'The organization struggled with outdated infrastructure, high operational costs, and limited visibility into energy consumption patterns. Manual data collection processes resulted in inaccurate forecasting and resource allocation.',
      solution: 'TEKenergy deployed an integrated RPA and Data Analytics platform, automating key operational workflows and implementing predictive analytics for demand forecasting. The solution included real-time monitoring dashboards and automated reporting systems.',
      benefits: [
        '54% reduction in manual processing time',
        '71% improvement in forecast accuracy',
        '43% decrease in energy waste',
        '3.1x increase in operational efficiency',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - TEKenergy</title>
        <meta
          name="description"
          content="Discover how TEKenergy has transformed utilities operations for leading organizations worldwide."
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
                  Case Studies
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Real-world success stories showcasing how we help utilities achieve operational excellence and customer satisfaction.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard
                    key={index}
                    image={study.image}
                    title={study.title}
                    customer={study.customer}
                    challenges={study.challenges}
                    solution={study.solution}
                    benefits={study.benefits}
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

export default CaseStudiesPage;