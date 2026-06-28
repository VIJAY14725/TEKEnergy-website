import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CaseStudyCard from '@/components/CaseStudyCard.jsx';
import { ShieldCheck, Target, TrendingUp, Users, Zap, Award } from 'lucide-react';
import Empowering from "@/assets/images/About/Empowering.png";
import Modernizing from "@/assets/images/About/Modernizing.PNG";

function AboutPage() {
  const differentiators = [
    { icon: ShieldCheck, title: 'Comprehensive understanding', desc: 'Deep expertise across diverse industries, enabling us to tackle complex technical challenges.' },
    { icon: Award, title: 'Proven track record', desc: 'Consistent delivery of high-quality solutions that meet and exceed client expectations globally.' },
    { icon: Users, title: 'Dedicated team', desc: 'A passionate group of engineers, architects, and strategists committed to your success.' },
    { icon: Target, title: 'Tailored solutions', desc: 'Customized approaches that align precisely with your unique business goals and workflows.' },
    { icon: Zap, title: 'Continuous innovation', desc: 'Always leveraging the latest advancements in AI, cloud, and digital technologies.' },
    { icon: TrendingUp, title: 'Future-proof strategies', desc: 'Architectures designed to scale, adapt, and remain resilient in a rapidly changing digital landscape.' },
  ];

  const caseStudies = [
    {
      image: Empowering,
      title: 'Empowering Growth: Transforming Operations',
      customer: 'Global Energy Authority',
      challenges: 'Legacy systems hindering operational speed and limiting customer engagement capabilities. High technical debt.',
      solution: 'Comprehensive modernization using cloud-native architectures, integrating AI for predictive maintenance.',
      benefits: [
        '47% reduction in operational errors',
        '62% improvement in customer satisfaction',
        '38% decrease in total cost of ownership'
      ],
    },
    {
      image: Modernizing,
      title: 'Modernizing Digital Infrastructure',
      customer: 'Regional Service Provider',
      challenges: 'Siloed data systems, manual reporting processes, and inability to scale during peak demand.',
      solution: 'Deployed an integrated data analytics platform and automated core workflows using RPA solutions.',
      benefits: [
        '54% reduction in manual processing',
        '71% improvement in data accuracy',
        '3.1x increase in operational efficiency'
      ],
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TEKenergy</title>
        <meta name="description" content="TEKenergy pioneers the crafting, architecture, and engineering of next-generation digital solutions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-24 relative overflow-hidden bg-muted/20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground"
              >
                Building Tomorrow's Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TODAY</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                We specialize in rapidly accelerating performance, catalyzing breakthrough productivity, and amplifying business potential.
              </motion.p>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl leading-relaxed text-foreground/90 font-medium border-l-4 border-primary pl-6">
                  TEKenergy pioneers the crafting, architecture, and engineering of next-generation Generative Artificial Intelligence, Digital Solutions, and Cloud Deployments. Envision a future where AI drives groundbreaking innovation, digital solutions streamline workflows, and cloud platforms unlock boundless capabilities.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground pl-7">
                  With TEKenergy at your side, prepare for exponential performance enhancements, revolutionary productivity gains, and a resilient foundation primed for the future. We specialize in rapidly accelerating performance, catalyzing breakthrough productivity, amplifying business potential, maximizing operational efficiency, and future-proofing growth for global enterprises.
                </p>
              </div>
            </div>
          </section>

          {/* Value Prop Banner */}
          <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-border">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 max-w-4xl mx-auto leading-snug">
                Experience up to <span className="text-primary font-bold">40% cost savings</span> and achieve <span className="text-secondary font-bold">50% faster time-to-market</span> with our tailored IT services solutions and consulting.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our expertise drives efficiency, scalability, and innovation, ensuring your business remains ahead of the curve.
              </p>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-24">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground">Why Choose TEKenergy</h2>
                <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {differentiators.map((diff, index) => {
                  const Icon = diff.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">{diff.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{diff.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="py-24 bg-muted/20 border-t border-border/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground">Featured Case Studies</h2>
                <p className="mt-4 text-muted-foreground">Real-world impact driven by our specialized technology solutions.</p>
              </div>

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

export default AboutPage;