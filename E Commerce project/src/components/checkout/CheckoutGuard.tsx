import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthModal } from '../auth/AuthModal';

interface CheckoutGuardProps {
  children: React.ReactNode;
}

export function CheckoutGuard({ children }: CheckoutGuardProps) {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = React.useState(!user);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Please Sign In to Continue</h2>
          <p className="text-gray-600 mb-6">You need to be signed in to complete your purchase</p>
          <AuthModal isOpen={showAuthModal} onClose={() => {}} />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}