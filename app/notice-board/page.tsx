'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

export default function NoticeBoard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: 1,
      title: 'Annual General Meeting',
      content: 'The Annual General Meeting will be held on June 15, 2025. All residents are required to attend. The meeting will cover important matters including budget review, maintenance plans, and community updates.',
      date: 'June 15, 2025',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Building Maintenance',
      content: 'Scheduled maintenance work will be conducted on July 20, 2025. This includes elevator servicing, fire safety checks, and general building inspections. Please ensure your units are accessible.',
      date: 'July 20, 2025',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'New Security System',
      content: 'A new security system will be installed on August 15, 2025. This upgrade will enhance building security with modern surveillance and access control systems.',
      date: 'August 15, 2025',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Parking Rules Update',
      content: 'Updated parking regulations will be implemented from September 10, 2025. Please review the new rules regarding visitor parking and designated spaces.',
      date: 'September 10, 2025',
      priority: 'medium'
    },
    {
      id: 5,
      title: 'Community Clean-up Day',
      content: 'Join us for our annual community clean-up day on October 25, 2025. This event helps maintain our building\'s appearance and fosters community spirit.',
      date: 'October 25, 2025',
      priority: 'low'
    },
    {
      id: 6,
      title: 'Emergency Contact Numbers',
      content: 'Updated emergency contact numbers for building management and maintenance staff are now available. Please save these numbers for quick access during emergencies.',
      date: 'November 5, 2025',
      priority: 'high'
    }
  ]);

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('userData');
      const staySignedIn = localStorage.getItem('staySignedIn') === 'true';
      const sessionExpiry = localStorage.getItem('sessionExpiry');

      if (!userData) {
        router.replace('/login');
        return;
      }

      if (staySignedIn && sessionExpiry) {
        const expiryDate = new Date(sessionExpiry);
        if (expiryDate > new Date()) {
          setIsLoading(false);
          return;
        }
      }

      router.replace('/login');
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('staySignedIn');
    localStorage.removeItem('sessionExpiry');
    router.replace('/login');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading notice board...</p>
      </div>
    );
  }

  return (
    <div className="notice-board-container">
      <nav className="navbar">
        <div className="nav-left">
          <Link href="/" className="brand">
            Hadi<span className="brand-orange">Co.</span>
          </Link>
        </div>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>

      <div className="notice-board-header">
        <h1>Notice Board</h1>
      </div>

      <div className="notices-grid">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-card">
            <h2>{notice.title}</h2>
            <p>{notice.content}</p>
            <div className="notice-footer">
              <span className="notice-date">{notice.date}</span>
              <span className={`notice-priority ${notice.priority}`}>
                {notice.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 