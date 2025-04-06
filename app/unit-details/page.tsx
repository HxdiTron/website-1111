import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UnitDetailsClient from './UnitDetailsClient';

// Mark this as a dynamic route
export const dynamic = 'force-dynamic';

export default function UnitDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <UnitDetailsClient />
      <Footer />
    </div>
  );
} 