import React, { useState } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';

interface PaymentSectionProps {
  onPaymentMethodChange: (method: string) => void;
}

export function PaymentSection({ onPaymentMethodChange }: PaymentSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');

  const handleMethodChange = (method: string) => {
    setPaymentMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Payment Method</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleMethodChange('card')}
          className={`p-4 border rounded-lg flex items-center justify-center gap-2 ${
            paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
          }`}
        >
          <CreditCard className="h-5 w-5" />
          <span>Card Payment</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleMethodChange('upi')}
          className={`p-4 border rounded-lg flex items-center justify-center gap-2 ${
            paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
          }`}
        >
          <Smartphone className="h-5 w-5" />
          <span>UPI Payment</span>
        </button>
      </div>

      {paymentMethod === 'card' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">UPI ID</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="username@upi"
            />
          </div>
          <div className="text-sm text-gray-500">
            Popular UPI apps: Google Pay, PhonePe, Paytm, BHIM
          </div>
        </div>
      )}
    </div>
  );
}