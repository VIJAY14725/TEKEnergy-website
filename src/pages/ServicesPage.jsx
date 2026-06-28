import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Globe, Cloud, Shield, 
  Cpu, BarChart3, Users, HardDrive, 
  Code2, TestTube2, ArrowRight
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const servicesList = [
  {
    icon: BrainCircuit,
    title: 'AI Transformation',
    slug: 'ai-transformation',
    desc: 'Harness Generative AI and machine learning to revolutionize business operations and enhance decision-making.'
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Modernize legacy systems into agile, customer-centric digital solutions driving competitive advantage.'
  },
  {
    icon: Cloud,
    title: 'Cloud Transformation',
    slug: 'cloud-transformation',
    desc: 'Migrate, optimize, and manage infrastructure for maximum scalability, reliability, and cost efficiency.'
  },
  {
    icon: Shield,
    title: 'Managed Services',
    slug: 'managed-services',
    desc: 'Ensure your IT infrastructure runs smoothly, securely, and efficiently with our 24/7 expert support.'
  },
  {
    icon: Cpu,
    title: 'Product Engineering',
    slug: 'product-engineering',
    desc: 'Design, develop, and deploy innovative software products from concept to market-ready solutions.'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    slug: 'data-analytics',
    desc: 'Transform raw data into actionable insights that drive informed decisions and unlock business value.'
  },
  {
    icon: Users,
    title: 'Flexi Skill Engagement',
    slug: 'flexi-skill-engagement',
    desc: 'Access flexible, on-demand tech talent to augment your team with specialized expertise instantly.'
  },
  {
    icon: HardDrive,
    title: 'Hardware Services',
    slug: 'hardware-services',
    desc: 'End-to-end hardware solutions from procurement and deployment to maintenance and lifecycle management.'
  },
  {
    icon: Code2,
    title: 'No/Low Code Adoption',
    slug: 'no-low-code-adoption',
    desc: 'Accelerate app development and automation using modern no-code and low-code platforms.'
  },
  {
    icon: TestTube2,
    title: 'Testing as a Service',
    slug: 'testing-as-a-service',
    desc: 'Comprehensive QA services ensuring the quality, reliability, and performance of your applications.'
  }
];

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Technology Services - TEKenergy</title>
        <meta name="description" content="Comprehensive suite of technology services designed to transform your business. From AI to Cloud and Managed Services." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-b from-muted/30 to-background border-b border-border">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight"
              >
                Technology Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Comprehensive suite of technology services designed to transform your business and accelerate your digital journey.
              </motion.p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {servicesList.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link 
                        to={`/services/${service.slug}`}
                        className="group flex flex-col h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                          {service.desc}
                        </p>
                        <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                          Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;