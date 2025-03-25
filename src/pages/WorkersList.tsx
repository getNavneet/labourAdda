import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

// Mock data for demonstration
const mockWorkers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    category: "Mistri",
    location: "Delhi",
    experience_years: 8,
    hourly_rate: 500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=1935"
  },
  {
    id: 2,
    name: "Amit Sharma",
    category: "Electrician",
    location: "Mumbai",
    experience_years: 5,
    hourly_rate: 400,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=2069"
  },
  {
    id: 3,
    name: "Suresh Patel",
    category: "Farm Labour",
    location: "Gujarat",
    experience_years: 10,
    hourly_rate: 300,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1592805144716-feeccccef5ac?auto=format&fit=crop&q=80&w=2070"
  }
];

export default function WorkersList() {
  const [category, setCategory] = useState('all');
  const workers = mockWorkers.filter(worker => 
    category === 'all' || worker.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="space-y-6">
      <div className="relative h-[200px] rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2070"
          alt="Workers"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Available Workers</h1>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="all">All Categories</option>
          <option value="mistri">Mistri</option>
          <option value="electrician">Electrician</option>
          <option value="farm">Farm Labour</option>
          <option value="tiles">Tiles/Marble</option>
          <option value="mechanic">Mechanic</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <Link
            key={worker.id}
            to={`/worker/${worker.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="h-48 relative">
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center shadow">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <span className="ml-1 text-sm font-medium">{worker.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{worker.name}</h3>
                <p className="text-blue-600">{worker.category}</p>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {worker.location}
                </div>
                <p className="mt-2 text-gray-600">
                  {worker.experience_years} years experience
                </p>
                <p className="mt-2 font-semibold text-gray-900">
                  ₹{worker.hourly_rate}/hour
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}