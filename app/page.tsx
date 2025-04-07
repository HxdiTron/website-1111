// app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import WelcomeMessage from './components/WelcomeMessage';
import Notification from './components/Notification';

export default function HomePage() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  
  const handleNoticeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const userData = localStorage.getItem('userData');
    const staySignedIn = localStorage.getItem('staySignedIn') === 'true';
    
    if (!userData || !staySignedIn) {
      setShowNotification(true);
    } else {
      router.push('/notice-board');
    }
  };

  const ManagementName = process.env.NEXT_PUBLIC_Management_Name || 'Hadi&Co.';

  return (
    <div className="container">
      <WelcomeMessage />
      <Notification 
        message="Please login first to access the Notice Board"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <nav className="navbar">
        <Link href="/" className="brand">
          Hadi<span className="brand-orange">&Co.</span>
        </Link>
        <div className="navLinks">
          <a href="/notice-board" onClick={handleNoticeClick}>Notice Board</a>
          <Link href="/contact">Contact Us</Link>
          <Link href="/login" className="login-btn">
            <i className="fas fa-user"></i>
            Owner's Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero relative h-[900px]">
        <Image
          src="/building.jpg"
          alt={`${ManagementName} Building`}
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="hero-content">
          <h1 className="hero-title">STRATA MANAGEMENT</h1>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="contactInfo">
          <div>Contact us:</div>
          <div>Email: <a href="mailto:management@hadi&co.au">management@hadi&co.au</a></div>
          <div>Phone: (+61) 987 654 3</div>
        </div>
        <div className="officeHours">
          Office Hours:<br />
          Monday – Friday<br />
          9am – 5pm
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Hadi&Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}