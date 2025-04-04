// app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  useEffect(() => {
    // Any client-side logic can go here
  }, []);

  const ManagementName = process.env.NEXT_PUBLIC_Management_Name || 'Hadi&Co.';

  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/" className="brand">
          Hadi<span className="brand-orange">&Co.</span>
        </Link>
        <div className="navLinks">
          <Link href="/About">About Us</Link>
          <Link href="/Notice">Notice Board</Link>
          <Link href="/Rules">Rules</Link>
          <Link href="/login" className="login-btn"> Owner's Login</Link>
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
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* MAIN CONTENT */}
      <main className="main">
        <div className="contentBox">
          {/* Left Panel (Text on light-blue background) */}
          <div className="leftPanel">
            <h1>WELCOME TO {ManagementName}</h1>

            <h2>◇ About This Site</h2>
            <p>
              This website is your go-to hub for everything related to living at Azure Heights.
            </p>

            <h2>◇ What You Can Do</h2>
            <ul>
              <li>View building notices</li>
              <li>Submit maintenance requests</li>
              <li>Access strata documents</li>
            </ul>

            <h2>◇ Our Promise</h2>
            <p>
              Our goal is to keep you informed, supported, and involved in the smooth running of our community.
              If you're new, be sure to explore the resources available — and don't hesitate to reach out if you need assistance.
              Welcome home!
            </p>
          </div>

          {/* Right Panel (Notice Board) */}
          <div className="rightPanel">
            <div className="noticeBoardHeader">
              <h2>Notice Board</h2>
            </div>
            <ul>
              <li>Upcoming maintenance on the 20th of April</li>
              <li>Inter-tower badminton match. Selections tomorrow</li>
              <li>Please make sure not to throw large bags down the garbage chute</li>
              <li>Always carry your keycard, as the guard will not let you in every time</li>
              <li>
                Please be sure to pay your maintenance fees before the end of the aforementioned date
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="contactInfo">
          <div>Contact us:</div>
          <div>Email: <a href="mailto:management@hadi&co.au">management@hadi&co.au</a></div>
          <div>Phone: (+61) 987 654 32</div>
        </div>
        <div className="officeHours">
          Office Hours:<br />
          Monday – Friday<br />
          9am – 5pm
        </div>
      </footer>
    </div>
  );
}