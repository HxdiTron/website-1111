import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        Hadi<span className="brand-orange">&Co.</span>
      </Link>
      <div className="navLinks">
        <Link href="/About">About Us</Link>
        <Link href="/Notice">Notice Board</Link>
        <Link href="/Rules">Rules</Link>
        <Link href="/login" className="login-btn">Owner's Login</Link>
      </div>
    </nav>
  );
};

export default Navbar; 