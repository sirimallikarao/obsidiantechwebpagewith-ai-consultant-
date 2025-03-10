import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Network,
  Cpu,
  Zap,
  ArrowRight,
  Globe2,
  Blocks,
  Cloud,
  Fingerprint,
  MessageCircle,
  Layers,
  ShoppingCart,
  Users,
  Twitter,
  Linkedin,
  Send,
  Instagram,
  Mail
} from 'lucide-react';
import { Chat } from '../components/Chat';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ObsidianIcon } from '../components/ObsidianIcon';

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 rounded-lg w-fit mb-6">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function SolutionCard({ title, description, image, price }: { title: string; description: string; image: string; price: number }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: title.toLowerCase().replace(/\s+/g, '-'),
      name: title,
      description,
      price
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-purple-400 font-semibold">${price}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

function TeamMember({ name, role, imagePlaceholder }: { name: string; role: string; imagePlaceholder: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="aspect-square bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">{imagePlaceholder}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useCart();
  const { user, signIn, signOut } = useAuth();

  const handleScheduleDemo = () => {
    window.location.href = 'mailto:contactus@obsidiantech.ai?subject=Demo Request&body=I would like to schedule a demo of your solutions.';
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <nav className="border-b border-white/10 backdrop-blur-lg bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ObsidianIcon />
              <span className="text-white font-semibold text-xl">Obsidian Technology</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a 
                href="https://chat.obsidiantech.ai/chat.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                AI Consultant
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button
                onClick={() => navigate('/cart')}
                className="relative text-gray-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
              {user ? (
                <button
                  onClick={signOut}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Sign Out ({user.email})
                </button>
              ) : (
                <button
                  onClick={signIn}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Next-Gen AI & Blockchain Solutions</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Building the Future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                AI & Blockchain Technology
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl"
            >
              Transform your business with our cutting-edge AI solutions and blockchain applications. From smart contracts to machine learning models, we build the future of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={handleScheduleDemo}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <span>About Us</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="solutions" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Globe2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Enterprise Solutions</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Available Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our comprehensive suite of AI and blockchain solutions designed for enterprise needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            title="AI Development Platform"
            description="Build, train, and deploy custom AI models with our enterprise-grade platform."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
            price={999.99}
          />
          <SolutionCard
            title="Blockchain Infrastructure"
            description="Secure, scalable blockchain infrastructure for enterprise applications."
            image="https://images.unsplash.com/photo-1644143379190-08a5f055de1d?q=80&w=2070"
            price={1499.99}
          />
          <SolutionCard
            title="Smart Contract Development"
            description="Custom smart contract development and auditing services."
            image="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2072"
            price={799.99}
          />
        </div>
      </div>

      <div id="services" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Our Services</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Tech Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From AI integration to blockchain development, we provide end-to-end solutions for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Code2}
            title="Custom AI Development"
            description="Tailored AI solutions including machine learning models, natural language processing, and computer vision systems."
          />
          <FeatureCard
            icon={Blocks}
            title="Blockchain Development"
            description="End-to-end blockchain application development, smart contracts, and DApp creation."
          />
          <FeatureCard
            icon={Cloud}
            title="Cloud AI Solutions"
            description="Scalable cloud-based AI infrastructure and deployment services."
          />
          <FeatureCard
            icon={Network}
            title="Enterprise Integration"
            description="Seamless integration of AI and blockchain solutions with existing enterprise systems."
          />
          <FeatureCard
            icon={Fingerprint}
            title="Identity & Security"
            description="Blockchain-based identity management and security solutions."
          />
          <FeatureCard
            icon={Layers}
            title="Data Analytics"
            description="Advanced data analytics and visualization powered by AI."
          />
        </div>
      </div>

      <div id="about" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Our Team</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Obsidian Technology
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            Founded in 2023, Obsidian Technology is at the forefront of AI and blockchain innovation. 
            Our mission is to democratize advanced technology solutions, making them accessible to businesses of all sizes. 
            With a team of industry veterans and innovative thinkers, we're building the future of enterprise technology.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Donald Ojo"
              role="Founder & CEO"
              imagePlaceholder="Photo Coming Soon"
            />
            <TeamMember
              name="Shanice Williams"
              role="Co-Founder"
              imagePlaceholder="Photo Coming Soon"
            />
            <TeamMember
              name="Victor Momodu"
              role="Chief Technical Officer"
              imagePlaceholder="Photo Coming Soon"
            />
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ObsidianIcon className="w-6 h-6" />
                <span className="text-white font-semibold">Obsidian Technology</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future with AI & Blockchain Technology
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/ObsidianTech_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/obsidiantechai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://t.me/+LrkRqMGjVS4zNjQ8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Send className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/memesniperai._" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:contactus@obsidiantech.ai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-sm text-center pt-8 border-t border-white/10">
            © 2025 Obsidian Technology. All rights reserved.
          </div>
        </div>
      </footer>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}