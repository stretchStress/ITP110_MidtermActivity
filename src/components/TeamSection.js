import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Carille Zapata",
      role: "Web Developer",
      image: "/carille.jpeg",
      description: "Passionate IT student specializing in web development with React and Node.js.",
      email: "zapatacarille13@gmail.com",
      github: "https://github.com/Ellirac",
      skills: ["React", "JavaScript", "Php", "MySQL"]
    },
    {
      name: "Team Member 2",
      role: "Add Role", 
      image: "/member2.jpg",
      description: "Description here...",
      email: "member2@student.edu",
      github: "#",
      skills: ["Skill1", "Skill2"]
    },
    {
      name: "Team Member 3",
      role: "Add Role",
      image: "/member3.jpg", 
      description: "Description here...",
      email: "member3@student.edu",
      github: "#",
      skills: ["Skill1", "Skill2"]
    },
    {
      name: "Zoen Aldueza",
      role: "Frontend Developer", 
      image: "/zoen.jpg",
      description: "I’m an aspiring frontend developer learning to build clean, responsive, and user-friendly websites.",
      email: "alduezazoen77@gmail.com",
      github: "https://github.com/ZAA-ZAA",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      name: "Lawrence Mindanao",
      role: "Web Developer",
      image: "/mindanao.png",
      description: "An ispiring IT student with a hopes of growing in the field of web development. Specializes in full-stack development.",
      email: "mindanaolawrence86@gmail.com",
      github: "https://github.com/stretchStress",
      skills: ["React", "Laravel", "Java", "MySQL", "C++"]
    },
    {
      name: "Team Member 6",
      role: "Add Role",
      image: "/member6.jpg",
      description: "Description here...",
      email: "member6@student.edu",
      github: "#",
      skills: ["Skill1", "Skill2"]
    },
    {
      name: "Team Member 7",
      role: "Add Role",
      image: "/member7.jpg",
      description: "Description here...",
      email: "member7@student.edu",
      github: "#",
      skills: ["Skill1", "Skill2"]
    }
  ];

  return (
    <section id="team" className="team-section py-3 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-3">
            <h3 className="fw-bold mb-2">Meet Our Team</h3>
            <p className="text-muted small">The 7 developers behind Group 2</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-3">
              <div className="card h-100 shadow-sm team-card border-0">
                <div className="card-body text-center p-2">
                  <img 
                    src={process.env.PUBLIC_URL + member.image} 
                    alt={member.name}
                    className="rounded-circle mb-2"
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      objectFit: 'cover' 
                    }}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=667eea&color=fff&size=70`;
                    }}
                  />
                  <h6 className="card-title fw-bold mb-1 small">{member.name}</h6>
                  <p className="card-text text-primary mb-1 small">{member.role}</p>
                  <p className="card-text small mb-2 text-muted" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
                    {member.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="badge bg-light text-dark me-1 mb-1" 
                        style={{ fontSize: '0.65rem' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Contact Links - Only Email and GitHub */}
                  <div className="d-flex justify-content-center gap-3">
                    <a href={`mailto:${member.email}`} className="text-dark" title="Email">
                      <i className="fas fa-envelope small"></i>
                    </a>
                    <a href={member.github} className="text-dark" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github small"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;