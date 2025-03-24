// components/Activities.jsx
import React, { useState } from 'react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  
  const activities = {
    volunteer: [
      {
        id: 1,
        title: 'Community Clean-up Drive',
        organization: 'Green Earth Initiative',
        period: 'Jan 2023 - Present',
        description: 'Organizing monthly clean-up drives in local parks and beaches.',
        image: '/api/placeholder/300/200'
      },
      {
        id: 2,
        title: 'Coding Mentor',
        organization: 'CodeForAll',
        period: 'Mar 2022 - Dec 2023',
        description: 'Teaching programming to underprivileged students.',
        image: '/api/placeholder/300/200'
      }
    ],
    extracurricular: [
      {
        id: 1,
        title: 'Hackathon Winner',
        organization: 'TechFest 2023',
        period: 'Nov 2023',
        description: 'First place in the annual hackathon for an AI-driven solution.',
        image: '/api/placeholder/300/200'
      },
      {
        id: 2,
        title: 'Chess Club',
        organization: 'City Chess Association',
        period: 'Jan 2020 - Present',
        description: 'Active member and tournament participant.',
        image: '/api/placeholder/300/200'
      }
    ]
  };
  
  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">My Activities</h2>
        
        <div className="activity-tabs">
          <button 
            className={activeTab === 'volunteer' ? 'active' : ''} 
            onClick={() => setActiveTab('volunteer')}
          >
            Volunteer Work
          </button>
          <button 
            className={activeTab === 'extracurricular' ? 'active' : ''} 
            onClick={() => setActiveTab('extracurricular')}
          >
            Extracurricular
          </button>
        </div>
        
        <div className="activities-grid">
          {activities[activeTab].map((activity) => (
            <div className="activity-card" key={activity.id} data-aos="fade-up">
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
              </div>
              <div className="activity-info">
                <div className="activity-header">
                  <h3>{activity.title}</h3>
                  <span className="period">{activity.period}</span>
                </div>
                <p className="organization">{activity.organization}</p>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;