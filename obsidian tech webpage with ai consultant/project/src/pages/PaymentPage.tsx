import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsSuccess(true);
    clearCart();
    
    // Redirect to home after success
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 mx-auto mb-6 text-green-500"
          >
            <CheckCircle className="w-full h-full" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-gray-400 mb-8">Thank you for your purchase.</p>
          <p className="text-sm text-gray-500">Redirecting to home...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0F] text-white p-8"
    >
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </button>

        <div className="bg-white/5 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-8">
            <CreditCard className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl font-bold">Payment Details</h1>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Total Amount</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Lock className="w-3 h-3" />
              <span>Secure Payment</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white py-4 rounded-lg font-medium transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}