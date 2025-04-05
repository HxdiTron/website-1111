'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface UnitDetails {
  unitNumber: string;
  owner: string;
  size: number;
  type: string;
  parking: boolean;
  storage: boolean;
}

export default function UnitDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [unitDetails, setUnitDetails] = useState<UnitDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unitId = searchParams.get('id');
    
    if (!unitId) {
      setError('No unit ID provided');
      return;
    }

    // Example of GET request
    fetch(`/api/units/${unitId}`)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            router.push('/404');
            return;
          }
          throw new Error('Failed to fetch unit details');
        }
        return response.json();
      })
      .then(data => {
        setUnitDetails(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!unitDetails) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3 mt-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Unit Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold text-gray-600">Unit Number</h2>
              <p className="text-lg">{unitDetails.unitNumber}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Owner</h2>
              <p className="text-lg">{unitDetails.owner}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Size</h2>
              <p className="text-lg">{unitDetails.size} m²</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Type</h2>
              <p className="text-lg">{unitDetails.type}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Parking</h2>
              <p className="text-lg">{unitDetails.parking ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Storage</h2>
              <p className="text-lg">{unitDetails.storage ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 