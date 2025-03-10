import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0F] text-white p-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-8 h-8" />
            Your Cart
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-500" />
            <p className="text-gray-400">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 p-6 rounded-lg flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-500/10 text-red-500 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate('/payment')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-medium transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}