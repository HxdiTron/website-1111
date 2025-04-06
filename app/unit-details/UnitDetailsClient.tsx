'use client';

import React, { Suspense } from 'react';
import UnitDetailsContent from './UnitDetailsContent';

function LoadingFallback() {
  return (
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
  );
}

export default function UnitDetailsClient() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <UnitDetailsContent />
    </Suspense>
  );
} 