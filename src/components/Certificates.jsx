import React, { useState } from 'react';
import uxImg from '../assets/images/google.png'
import x17Img from '../assets/images/xtreme17.png'
import mongoImg from '../assets/images/mongoDB.png'
import linkImg from '../assets/images/linkedin.png'
import moraImg from '../assets/images/moratuwa.png'
import iitImg from '../assets/images/ieeeiit.png'
import colaImg from '../assets/images/cola.png'
import hultImg from '../assets/images/hultpz.png'

const Certificates = () => {
  const allCertificates = [
    {
      id: 1,
      title: 'Foundations of User Experience (UX) Design',
      category: 'Technical',
      issuingOrganization: 'Google',
      dateIssued: '2023-09-12',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/LKN9ZYZ4Z9WV', // Add your credential URL
      image: uxImg, // Placeholder image
    },
    {
      id: 2,
      title: 'IEEE Xtreme 17.0',
      category: 'Technical',
      issuingOrganization: 'IEEE',
      dateIssued: '2023-12',
      credentialURL: 'https://drive.google.com/file/d/162Cb0JKaNdJ_UUCz0vjN8x_4RdDtqwTK/view',
      image: x17Img,
    },
    {
      id: 3,
      title: 'Getting Started with MongoDB Atlas',
      category: 'Technical',
      issuingOrganization: 'MongoDB',
      dateIssued: '2024-04',
      credentialURL: 'https://learn.mongodb.com/c/t1Mk4LwOTo-H7DoXrhnZNg',
      image: mongoImg,
    },
    {
      id: 4,
      title: 'Java Object Oriented Programming',
      category: 'Technical',
      issuingOrganization: 'LinkedIn Learning',
      dateIssued: '2024-05',
      credentialURL: 'https://drive.google.com/file/d/10NZdOlfNHC2syi_-xZvEdSUdFjiDgYEK/view',
      image: linkImg,
    },
    {
        id: 5,
        title: 'Introduction to Python Development',
        category: 'Technical',
        issuingOrganization: 'University of Moratuwa',
        dateIssued: '2024-05',
        credentialURL: 'https://drive.google.com/file/d/178-_qIr7M0suSPriS02FOic7KPRZ4A4i/view',
        image: moraImg,
    },
    {
        id: 6,
        title: 'Get Ready for Generative AI',
        category: 'Technical',
        issuingOrganization: 'Linkedin Learning',
        dateIssued: '2024-06',
        credentialURL: 'https://www.linkedin.com/learning/certificates/c3b1e41fc8d560baf65bac402ea2a522eb2bda7f0dc4f43ca300809e87bac47f?u=76664938',
        image: linkImg,
    },
    {
        id: 7,
        title: 'UI UX Designing Competition',
        category: 'Non-Technical',
        issuingOrganization: 'IEEE Computer Society Student Branch Chapter of IIT',
        dateIssued: '2024-08',
        credentialURL: 'https://www.linkedin.com/in/nethu-hettihewa-b84897224/details/certifications/1727615415335/single-media-viewer/?type=IMAGE&profileId=ACoAADhfLtQBKiVFz2lbanTmt7dx3IzVq2hHUVc',
        image: iitImg,
    },
    {
        id: 8,
        title: 'Angular: Building Interface',
        category: 'Technical',
        issuingOrganization: 'Linkedin Learning',
        dateIssued: '2024-10',
        credentialURL: 'https://www.linkedin.com/in/nethu-hettihewa-b84897224/details/certifications/1727615415335/single-media-viewer/?type=IMAGE&profileId=ACoAADhfLtQBKiVFz2lbanTmt7dx3IzVq2hHUVc',
        image: linkImg,
    },
    {
        id: 9,
        title: 'Learning Spring with Spring-boot',
        category: 'Technical',
        issuingOrganization: 'Linkedin Learning',
        dateIssued: '2024-11',
        credentialURL: 'https://www.linkedin.com/learning/certificates/5c72a5b332ae5a6526eaf7d6025232cc94ce721ec468d475c0f55fbf16291b08?u=76664938',
        image: linkImg,
    },
    {
        id: 10,
        title: 'Backend Web Development with .NET',
        category: 'Technical',
        issuingOrganization: 'Linkedin Learning',
        dateIssued: '2025-04',
        credentialURL: 'https://www.linkedin.com/learning/certificates/e23b639820a4cc290798cd6a360ce07d845a140b7dc314029fc5ec829204eb7a?u=76664938',
        image: linkImg,
    },
    {
        id: 11,
        title: 'Finalist - Waste Management Innovation Challenge',
        category: 'Non-Technical',
        issuingOrganization: 'The Coca-Cola Foundation',
        dateIssued: '2024-04',
        credentialURL: 'https://drive.google.com/file/d/1lCB7pdX3MF1yePypZ1-tmfwd9jZEO7To/view?usp=sharing',
        image: colaImg,
    },
    {
        id: 12,
        title: 'Designer - Volunteer',
        category: 'Non-Technical',
        issuingOrganization: 'Microsoft Learn Student Ambassadors Program',
        dateIssued: '2024-03',
        credentialURL: 'https://drive.google.com/file/d/1ae2F2sOTXeCBMOTeiDGg2u3MjsR8-qGU/view?usp=sharing',
        image: iitImg,
    },
    {
      id: 13,
      title: 'Pitchathon - Qualifier',
      category: 'Non-Technical',
      issuingOrganization: 'Hult Prize',
      dateIssued: '2024-03',
      credentialURL: 'https://drive.google.com/file/d/1KsgRdKjlGHKL91CxY5tYeuvpYxrenpTR/view?usp=sharing',
      image: hultImg,
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