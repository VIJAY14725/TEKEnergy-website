import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Users, Lightbulb, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function WhyChoosePage() {
  const differentiators = [
    {
      icon: Award,
      title: 'Comprehensive understanding',
      description: 'Deep expertise in Energy & Utilities sector with proven methodologies and best practices.',
    },
    {
      icon: TrendingUp,
      title: 'Proven track record',
      description: 'Successfully delivered complex projects for leading utilities across multiple regions.',
    },
    {
      icon: Users,
      title: 'Dedicated team',
      description: 'Experienced professionals committed to your success with 24/7 support and guidance.',
    },
    {
      icon: Target,
      title: 'Tailored solutions',
      description: 'Customized approaches that align with your specific business needs and objectives.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous innovation',
      description: 'Staying ahead with cutting-edge technologies and industry-leading practices.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose TEKenergy - Your Partner in Innovation</title>
        <meta
          name="description"
          content="Discover why leading utilities choose TEKenergy as their partner in innovation and excellence."
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
                  Why Choose TEKenergy for Utilities - Your Partner in Innovation and Excellence
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  We combine deep industry expertise with innovative technology solutions to drive transformational results for utilities worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/6bcbb689-f1bb-4e76-bd0a-877aca1fb639/4e95c4d111be4937d079485451463908.jpg"
                  alt="TEKenergy team collaborating on innovative energy solutions"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {differentiators.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 p-8 rounded-2xl bg-card border border-border transition-all duration-200 hover:shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/contact">
                    Partner with us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default WhyChoosePage;