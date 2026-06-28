import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

function CaseStudyCard({ image, title, customer, challenges, solution, benefits, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-card border-border h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <Badge className="w-fit mb-2 bg-primary text-primary-foreground">{customer}</Badge>
          <CardTitle className="text-2xl font-semibold text-card-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Challenges</h3>
            <p className="text-muted-foreground leading-relaxed">{challenges}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Benefits</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default CaseStudyCard;