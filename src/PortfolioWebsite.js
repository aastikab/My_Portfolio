import React from 'react';
import profilePicture from './profile-picture.jpg';
import technologyImage from './Technology-Image.png';
import codingImage from './Coding_Image.png';
import DailyBlogs from './DailyBlogs';
import GuessTheNumber from './GuessTheNumber';

const PortfolioWebsite = () => {
  const sections = [
    {
      id: "home",
      title: "Aastika Banstola",
      subtitle: "Building My Digital Vision",
      background: technologyImage,
    },
    {
      id: "about",
      title: "About Me",
      content: (
        <>
          <img src={profilePicture} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '2rem' }} />
          <p>
            I am a computer science student at Fisk University, passionate about innovation and technology.
            My goal is to create digital solutions that make a difference in people's lives.
          </p>
        </>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      content: (
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Software Development Extern, NextGenChoice</h3>
          <p>May 2024 — July 2024</p>
          <p>
            Improved flagship products by redesigning user authentication and data processing capabilities,
            increasing functionality by 20% on consumer satisfaction.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      content: <p>Coming soon...</p>,
      background: codingImage,
    },
    {
      id: "blogs",
      title: "Daily Blogs",
      content: <DailyBlogs />, // Use the DailyBlogs component here
    },
    {
      id: "message",
      title: "Message Me",
      content: (
        <div style={{ textAlign: 'center' }}>
          <p>If you'd like to get in touch, please feel free to email me:</p>
          <a href="mailto:aastikabanstola@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
            aastikabanstola@gmail.com
          </a>
        </div>
      ),
    },
    {
      id: "game",
      title: "Fun Game",
      content: <GuessTheNumber />, // Use the GuessTheNumber component here
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
          <li>(318) 605-8126</li>
          <li>abanstola07@my.fisk.edu</li>
          <li><a href="https://linkedin.com/in/aastika-" style={{ color: '#fff' }}>linkedin.com/in/aastika-</a></li>
          <li><a href="https://github.com/aastikab" style={{ color: '#fff' }}>github.com/aastikab</a></li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#fff', position: 'relative' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1rem 5%', background: 'rgba(0, 0, 0, 0.8)', zIndex: 1000 }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AB.</span>
        <div>
          {sections.map(section => (
            <a key={section.id} href={`#${section.id}`} style={{ color: '#fff', textDecoration: 'none', margin: '0 15px' }}>{section.title}</a>
          ))}
        </div>
      </nav>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            position: 'absolute',
            top: `${index * 100}vh`,
            left: 0,
            right: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: section.background ? `url(${section.background})` : 'none',
            backgroundColor: section.backgroundColor || '#000',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '0 5%',
            textAlign: 'center',
            color: section.textColor || '#fff',
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            {section.title}
          </h1>
          {section.subtitle && (
            <p style={{ fontSize: '1.5rem' }}>{section.subtitle}</p>
          )}
          {section.content}
        </section>
      ))}
    </div>
  );
};

export default PortfolioWebsite;
