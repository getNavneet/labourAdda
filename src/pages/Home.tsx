import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Tractor, Grid, PenTool as Tools } from 'lucide-react';

const categories = [
  { icon: Wrench, name: 'Mistri', description: 'Expert construction workers' },
  { icon: Zap, name: 'Electrician', description: 'Professional electrical services' },
  { icon: Tractor, name: 'Farm Labour', description: 'Agricultural workforce' },
  { icon: Grid, name: 'Tiles/Marble', description: 'Flooring specialists' },
  { icon: Tools, name: 'Mechanics', description: 'Vehicle and machinery repair' },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2070"
            alt="Construction workers"
            className="w-full h-[500px] object-cover brightness-50"
          />
        </div>
        <div className="relative text-center py-32">
          <h1 className="text-5xl font-bold text-white mb-4">
            Find Skilled Workers for Your Next Project
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Connect with professional workers in your area
          </p>
          <Link
            to="/workers"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Find Workers
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {categories.map((Category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Category.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {Category.name}
            </h3>
            <p className="text-gray-600">{Category.description}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
            alt="Electrician working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose LabourAdda?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Verified Workers</h3>
              <p className="text-gray-600">All workers are verified for quality and reliability</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and quick booking process</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and transparent payment system</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
            alt="Construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Construction Experts</h3>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069"
            alt="Electrical work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Skilled Electricians</h3>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?auto=format&fit=crop&q=80&w=2070"
            alt="Farm work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-xl font-semibold text-white">Agricultural Workers</h3>
          </div>
        </div>
      </section>
    </div>
  );
}