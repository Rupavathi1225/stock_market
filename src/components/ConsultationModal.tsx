import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    whatsappOptIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', formData);
    // Here you can add the submission logic
    onClose();
  };

  const services = [
    'Web Landing Pages',
    'Firebase Form Integration',
    'Email + WhatsApp Automation',
    'Freelance Profile Setup',
    'AI Chat Assistants',
    'Analytics Dashboard'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background border-accent/20 max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground mb-2">
            Get Your Free Consultation
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Please provide your details below.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-card border-accent/20 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-card border-accent/20 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 12345 67890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-card border-accent/20 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground">Service Needed</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger className="bg-card border-accent/20 text-foreground">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-accent/20">
                {services.map((service) => (
                  <SelectItem key={service} value={service} className="text-foreground hover:bg-accent/10">
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-3 py-2">
            <Checkbox
              id="whatsapp"
              checked={formData.whatsappOptIn}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, whatsappOptIn: checked as boolean })
              }
              className="border-accent/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent mt-1"
            />
            <div className="space-y-1">
              <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground cursor-pointer">
                Opt-in for WhatsApp updates
              </Label>
              <p className="text-xs text-muted-foreground">
                You'll receive updates via WhatsApp and Email.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full mt-6 premium">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};