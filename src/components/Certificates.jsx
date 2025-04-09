import React, { useState } from 'react';

const Certificates = () => {
  const allCertificates = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      category: 'Technical',
      issuingOrganization: 'Amazon Web Services',
      dateIssued: '2024-10',
      credentialURL: '#', // Add your credential URL
      image: '/src/assets/images/certificate-placeholder.png', // Placeholder image
    },
    {
      id: 2,
      title: 'Introduction to Python Programming',
      category: 'Technical',
      issuingOrganization: 'Coursera',
      dateIssued: '2023-05',
      credentialURL: '#',
      image: '/src/assets/images/certificate-placeholder.png',
    },
    {
      id: 3,
      title: 'Effective Communication Skills',
      category: 'Non-Technical',
      issuingOrganization: 'LinkedIn Learning',
      dateIssued: '2024-03',
      credentialURL: '#',
      image: '/src/assets/images/certificate-placeholder.png',
    },
    {
      id: 4,
      title: 'Project Management Fundamentals',
      category: 'Non-Technical',
      issuingOrganization: 'Google Career Certificates',
      dateIssued: '2024-07',
      credentialURL: '#',
      image: '/src/assets/images/certificate-placeholder.png',
    },
    {
      id: 5,
      title: 'React Fundamentals',
      category: 'Technical',
      issuingOrganization: 'Udemy',
      dateIssued: '2023-11',
      credentialURL: '#',
      image: '/src/assets/images/certificate-placeholder.png',
    },
    // Add more certificates
  ];

  const [filter, setFilter] = useState('All');
  const [expandedCertificateId, setExpandedCertificateId] = useState(null);

  const filteredCertificates = filter === 'All'
    ? allCertificates
    : allCertificates.filter(cert => cert.category === filter);

  const handleFilterChange = (category) => {
    setFilter(category);
    setExpandedCertificateId(null); // Collapse any open certificate on filter change
  };

  const handleToggleExpand = (id) => {
    setExpandedCertificateId(expandedCertificateId === id ? null : id);
  };

  return (
    <div className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-filter">
        <button onClick={() => handleFilterChange('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('Technical')} className={filter === 'Technical' ? 'active' : ''}>Technical</button>
        <button onClick={() => handleFilterChange('Non-Technical')} className={filter === 'Non-Technical' ? 'active' : ''}>Non-Technical</button>
        {/* You can add more filter categories if needed */}
      </div>
      <div className="certificates-grid">
        {filteredCertificates.map(certificate => (
          <div key={certificate.id} className={`certificate-card ${expandedCertificateId === certificate.id ? 'expanded' : ''}`}>
            <div className="certificate-header" onClick={() => handleToggleExpand(certificate.id)}>
              <img src={certificate.image} alt={certificate.title} className="certificate-image" />
              <h3>{certificate.title}</h3>
              <button className="expand-button" aria-expanded={expandedCertificateId === certificate.id} aria-controls={`details-${certificate.id}`}>
                {expandedCertificateId === certificate.id ? 'Show Less' : 'Show More'}
              </button>
            </div>
            {expandedCertificateId === certificate.id && (
              <div className="certificate-details" id={`details-${certificate.id}`}>
                <p><strong>Issuing Organization:</strong> {certificate.issuingOrganization}</p>
                <p><strong>Date Issued:</strong> {certificate.dateIssued}</p>
                {certificate.credentialURL && (
                  <p><a href={certificate.credentialURL} target="_blank" rel="noopener noreferrer">View Credential</a></p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;