import React, { useState } from 'react';

const Extracurricular = () => {
  const activities = [
    { id: 1, title: "Project Chairperson - Sundown Motor Fest",  description: "Dedicated to helping communities through various initiatives, fostering a sense of social responsibility and making a tangible difference in the lives of others." },
    { id: 2, title: "Treasurer - Leo Club of Homagama Central",  description: "Actively participated in over 5 hackathons, collaborating with diverse teams to develop innovative solutions to real-world problems under tight deadlines. This experience has honed my problem-solving, teamwork, and rapid prototyping skills." },
    { id: 3, title: "Director of Public Relationships - Rotaract Club of Cinnamon Gardens", description: "Served as an active member of the Leo Club, the youth wing of Lions Clubs International, engaging in community service projects, developing leadership skills, and contributing to philanthropic endeavors." },
    { id: 4, title: "Membership Chairperson",  description: "Engaged with the Rotaract Club, a Rotary-sponsored service club for young adults, participating in projects focused on community development, international understanding, and leadership development. This involvement has enhanced my teamwork and organizational abilities." },
    // Add more activities as needed
  ];

  const [expandedActivityId, setExpandedActivityId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedActivityId(expandedActivityId === id ? null : id);
  };

  return (
    <div className="extracurricular-section">
      <h2>Extracurricular Activities</h2>
      <div className="activities-grid">
        {activities.map(activity => (
          <div key={activity.id} className={`activity-card ${expandedActivityId === activity.id ? 'expanded' : ''}`}>
            <div className="activity-header" onClick={() => handleToggleExpand(activity.id)}>
              <img src={activity.image} alt={activity.title} className="activity-image" />
              <h3>{activity.title}</h3>
              <button className="expand-button" aria-expanded={expandedActivityId === activity.id} aria-controls={`description-${activity.id}`}>
                {expandedActivityId === activity.id ? 'Show Less' : 'Show More'}
              </button>
            </div>
            {expandedActivityId === activity.id && (
              <div className="activity-details" id={`description-${activity.id}`}>
                <p>{activity.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;