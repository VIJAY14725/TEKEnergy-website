import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ServiceDetailTemplate({ title, overview, features, benefits, useCases, ctaLink = "/contact" }) {
  return (
    <>
      <Helmet>
        <title>{title} - TEKenergy Services</title>
        <meta name="description" content={overview} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted/40 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
            
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <LayoutGrid className="w-4 h-4" />
                  Technology Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {overview}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 border-t border-border/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
                <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-muted/20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Business Benefits</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Implementing our {title.toLowerCase()} solutions yields measurable improvements across your organization, driving growth and efficiency.
                  </p>
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link to={ctaLink}>
                      Discuss your needs <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border"
                    >
                      <div className="mt-1 bg-accent/20 p-2 rounded-lg shrink-0">
                        <Zap className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{benefit}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 border-t border-border/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground">Common Use Cases</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  See how leading organizations are applying these capabilities to solve real-world challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-card/50 border border-border/50 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-card-foreground font-medium">{useCase}</span>
                  </motion.div>
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

export default ServiceDetailTemplate;