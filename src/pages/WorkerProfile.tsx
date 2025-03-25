import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Phone, Clock, Award } from 'lucide-react';

// Mock data for demonstration
const mockWorker = {
  id: 1,
  name: "Rajesh Kumar",
  category: "Mistri",
  location: "Delhi",
  experience_years: 8,
  hourly_rate: 500,
  rating: 4.5,
  phone: "+91 98765 43210",
  availability: "Monday to Saturday, 8 AM - 6 PM",
  skills: ["Construction", "Renovation", "Plastering", "Tiling"],
  description: "Experienced construction worker specializing in residential and commercial projects. Expert in renovation and new construction work.",
  completed_projects: 150,
  image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=1935",
  gallery: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&q=80&w=2069"
  ]
};

export default function WorkerProfile() {
  const { id } = useParams();
  const worker = mockWorker; // In real app, fetch worker by id

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-[300px] relative">
          <img
            src={worker.image}
            alt={worker.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold">{worker.name}</h1>
            <p className="text-xl mt-2">{worker.category}</p>
            <div className="flex items-center mt-2">
              <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              <span className="ml-1">{worker.rating} Rating</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{worker.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{worker.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{worker.availability}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-5 w-5 mr-2" />
                <span>{worker.experience_years} years of experience</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600">{worker.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Work Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              {worker.gallery.map((image, index) => (
                <div key={index} className="h-48 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Work sample ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Hourly Rate</p>
                <p className="text-3xl font-bold text-blue-600">₹{worker.hourly_rate}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Completed Projects</p>
                <p className="text-3xl font-bold text-blue-600">{worker.completed_projects}</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}