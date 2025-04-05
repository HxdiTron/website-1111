'use client';

import React, { useEffect, useState } from 'react';

interface WelcomeData {
  time: string;
  location: {
    city: string;
    country: string;
  };
}

const WelcomeMessage: React.FC = () => {
  const [data, setData] = useState<WelcomeData | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [timeRes, locationRes] = await Promise.all([
          fetch('/api/time'),
          fetch('/api/location')
        ]);
        
        const timeData = await timeRes.json();
        const locationData = await locationRes.json();
        
        setData({
          time: timeData.time,
          location: locationData
        });
      } catch (error) {
        console.error('Error fetching welcome data:', error);
      }
    };

    fetchData();

    // Hide message after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !data) return null;

  return (
    <div className="welcome-container">
      <div className="welcome-message time-message">
        <button className="close-button" onClick={() => setIsVisible(false)}>×</button>
        <div className="welcome-content">
          <p>Welcome to Hadi&Co.</p>
          <p className="time-display">Current Time: {data.time}</p>
        </div>
      </div>
      <div className="welcome-message location-message">
        <button className="close-button" onClick={() => setIsVisible(false)}>×</button>
        <div className="welcome-content">
          <p>Location: {data.location.city}, {data.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage; 