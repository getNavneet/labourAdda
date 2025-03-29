import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkersList from './pages/WorkersList';
import WorkerProfile from './pages/WorkerProfile';
import Bookings from './pages/Bookings';
import RegistrationForm from './pages/RegistrationForm';
import UserRegistration from './pages/UserRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workers" element={<WorkersList />} />
            <Route path="/worker/:id" element={<WorkerProfile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/registeruser" element={<UserRegistration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;