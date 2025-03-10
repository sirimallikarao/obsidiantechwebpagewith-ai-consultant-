import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';
import { ObsidianIcon } from '../components/ObsidianIcon';

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
        <p className="text-gray-500 mt-4 text-sm">
          {role === "Founder & CEO" && "Visionary leader with extensive experience in AI and blockchain technology."}
          {role === "Co-Founder" && "Strategic innovator driving business development and partnerships."}
          {role === "Chief Technical Officer" && "Technical genius behind our cutting-edge solutions."}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex items-center justify-center mb-16">
          <ObsidianIcon className="w-12 h-12" />
          <h1 className="text-4xl font-bold ml-4">About Obsidian Technology</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                At Obsidian Technology, our mission is to democratize advanced technology solutions, 
                making cutting-edge AI and blockchain technology accessible to businesses of all sizes. 
                We believe in creating solutions that not only solve today's challenges but anticipate 
                tomorrow's needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We envision a future where advanced technology is seamlessly integrated into every business operation, 
                driving innovation and growth across industries. Our goal is to be at the forefront of this transformation, 
                leading the way in AI and blockchain innovation while maintaining our commitment to accessibility and excellence.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Company Overview</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Founded in 2023</li>
                <li>• Specializing in AI and Blockchain Solutions</li>
                <li>• Global Client Base</li>
                <li>• Industry-Leading Innovation</li>
                <li>• Commitment to Accessibility</li>
                <li>• Sustainable Technology Focus</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Leadership Team</span>
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              innovation, and business strategy to drive Obsidian Technology forward.
            </p>
          </div>

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
    </div>
  );
}