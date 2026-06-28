import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - TEKenergy</title>
        <meta
          name="description"
          content="Get in touch with TEKenergy to discuss your energy and utilities technology needs."
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
                  Contact TEKenergy
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto">
                  Ready to transform your energy operations? Get in touch with our team to discuss how we can help you achieve your goals.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Send us a message</h2>
                    <ContactForm />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a
                            href="mailto:info@tekenergy.com"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            info@tekenergy.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <a
                            href="tel:+12144557623"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            +1 (214) 455-7623
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Office</p>
                          <p className="text-muted-foreground">
                            123 
                            <br />
                            Irving
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Ready to get started?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Our team of experts is ready to help you transform your energy operations with innovative technology solutions. Contact us today to schedule a consultation.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;