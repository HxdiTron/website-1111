'use client';

import React from 'react';

const NoticeBoard: React.FC = () => {
  return (
    <div className="notice-board">
      <h1>Notice Board</h1>
      
      <div className="notice-sections">
        {/* Maintenance Updates */}
        <section className="notice-section">
          <h2>Maintenance Updates</h2>
          <div className="notice-card">
            <h3>Building Inspection</h3>
            <p>Annual building inspection scheduled for next week. Please ensure your units are accessible.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 15, 2024</span>
              <span className="priority-badge high">HIGH</span>
            </div>
          </div>
          <div className="notice-card">
            <h3>Elevator Maintenance</h3>
            <p>Elevator maintenance scheduled for Saturday, March 20th. Please use stairs during this time.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 10, 2024</span>
              <span className="priority-badge high">HIGH</span>
            </div>
          </div>
        </section>

        {/* Community Announcements */}
        <section className="notice-section">
          <h2>Community Announcements</h2>
          <div className="notice-card">
            <h3>Resident Meeting</h3>
            <p>Monthly resident meeting scheduled for March 25th at 7 PM in the community room.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 12, 2024</span>
              <span className="priority-badge medium">MEDIUM</span>
            </div>
          </div>
          <div className="notice-card">
            <h3>Community Clean-up Day</h3>
            <p>Join us for our quarterly community clean-up day on March 30th.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 8, 2024</span>
              <span className="priority-badge low">LOW</span>
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="notice-section">
          <h2>Important Notices</h2>
          <div className="notice-card">
            <h3>Fire Alarm Testing</h3>
            <p>Monthly fire alarm testing will be conducted on March 22nd at 10 AM.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 18, 2024</span>
              <span className="priority-badge high">HIGH</span>
            </div>
          </div>
          <div className="notice-card">
            <h3>Building Policy Update</h3>
            <p>New visitor parking policy effective from April 1st, 2024.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 15, 2024</span>
              <span className="priority-badge medium">MEDIUM</span>
            </div>
          </div>
        </section>

        {/* Service Updates */}
        <section className="notice-section">
          <h2>Service Updates</h2>
          <div className="notice-card">
            <h3>Garbage Collection</h3>
            <p>Garbage collection schedule updated for Easter week.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 14, 2024</span>
              <span className="priority-badge low">LOW</span>
            </div>
          </div>
          <div className="notice-card">
            <h3>Mail Service</h3>
            <p>New mail sorting system implemented. Please check your mailboxes for updated information.</p>
            <div className="notice-meta">
              <span className="notice-date">Posted: March 10, 2024</span>
              <span className="priority-badge low">LOW</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NoticeBoard; 