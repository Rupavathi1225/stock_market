import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose }) => {
  const [currentOffer, setCurrentOffer] = useState({ discount: '25%', text: 'Wednesday Special' });

  useEffect(() => {
    const today = new Date().getDay();
    const offers = {
      0: { discount: '20%', text: 'Sunday Special' },
      1: { discount: '15%', text: 'Monday Boost' },
      2: { discount: '20%', text: 'Tuesday Deal' },
      3: { discount: '25%', text: 'Wednesday Special' },
      4: { discount: '20%', text: 'Thursday Offer' },
      5: { discount: '30%', text: 'Friday Flash Sale' },
      6: { discount: '25%', text: 'Weekend Special' }
    };
    setCurrentOffer(offers[today as keyof typeof offers]);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full rounded-lg p-6 bg-white shadow-2xl z-[9999]"
        aria-describedby="offer-description"
      >
        <DialogTitle className="sr-only">Special Offer Popup</DialogTitle>

        <DialogDescription asChild>
          <div id="offer-description">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-black/70 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6 relative z-10">
              {/* Offer Title */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-2">
                  {currentOffer.discount} OFF
                </h2>
                <p className="text-black/80 text-lg">
                  {currentOffer.text} - Limited Time!
                </p>
              </div>

              {/* Offer Image */}
              <div className="bg-white rounded-xl">
                <img
                  src="https://pepeleads.com/uploads/1753419453-3227695.jpeg"
                  alt="Special Offer"
                  className="w-full max-w-xs mx-auto rounded-xl shadow-md"
                />
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                <Button
                  onClick={onClose}
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  GET MY {currentOffer.discount} OFF!
                </Button>

                <button
                  onClick={onClose}
                  className="text-black/60 hover:text-black text-sm underline transition-colors"
                >
                  No, thanks. I'll rather pay full price!
                </button>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default OfferModal;
