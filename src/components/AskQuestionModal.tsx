import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MessageSquare, Send, Sparkles } from "lucide-react";

import { db } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface AskQuestionModalProps {
  children: React.ReactNode;
}

export const AskQuestionModal = ({ children }: AskQuestionModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "questions"), {
        name: formData.name,
        email: formData.email,
        question: formData.question,
        createdAt: Timestamp.now()
      });

      toast({
        title: "Question Submitted Successfully! ✨",
        description: "We'll get back to you within 24 hours with a detailed response.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", question: "" });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-display font-semibold text-foreground">
                Ask Your Question
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Get expert advice on your development needs
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="question" className="text-foreground font-medium">
                Your Question
              </Label>
              <Textarea
                id="question"
                placeholder="Describe your project, requirements, or any questions you have..."
                value={formData.question}
                onChange={(e) => handleInputChange("question", e.target.value)}
                required
                rows={4}
                className="bg-card border-border focus:border-primary transition-colors resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="premium"
              disabled={isSubmitting}
              className="flex-1 relative overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Question
                  <Sparkles className="h-4 w-4 animate-sparkle" />
                </div>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/50">
          <div className="flex items-start gap-3">
            <div className="p-1 rounded bg-primary/20 mt-0.5">
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Premium Support</p>
              <p>Get personalized solutions, code reviews, and project consultations from our expert team.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};