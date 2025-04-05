import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        Hadi<span className="brand-orange">&Co.</span>
      </Link>
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/notice-board">Notice Board</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/login" className="login-btn">
          <i className="fas fa-user"></i>
          Owner's Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 