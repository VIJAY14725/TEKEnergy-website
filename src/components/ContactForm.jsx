import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Message sent successfully');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground">Name *</Label>
        <Input
          id="name"
          {...register('name')}
          className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">Email *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
          placeholder="your.email@company.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="company" className="text-foreground">Company *</Label>
        <Input
          id="company"
          {...register('company')}
          className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
          placeholder="Your company name"
        />
        {errors.company && (
          <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={6}
          className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;