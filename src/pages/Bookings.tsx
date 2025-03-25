import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

// Mock data for demonstration
const mockBookings = [
  {
    id: 1,
    worker: {
      name: "Rajesh Kumar",
      category: "Mistri",
      phone: "+91 98765 43210"
    },
    date: "2025-03-25",
    time: "10:00 AM",
    location: "Delhi",
    status: "confirmed"
  },
  {
    id: 2,
    worker: {
      name: "Amit Sharma",
      category: "Electrician",
      phone: "+91 98765 43211"
    },
    date: "2025-03-26",
    time: "2:00 PM",
    location: "Mumbai",
    status: "pending"
  }
];

export default function Bookings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
      
      <div className="space-y-6">
        {mockBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {booking.worker.name}
                </h3>
                <p className="text-blue-600">{booking.worker.category}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                booking.status === 'confirmed' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{booking.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{booking.location}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div className="text-gray-600">
                Contact: {booking.worker.phone}
              </div>
              <div className="space-x-3">
                <button className="text-red-600 hover:text-red-700">
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}