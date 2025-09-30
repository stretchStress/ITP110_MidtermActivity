import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">About Us</h2>
            <p className="lead">Passionate IT Students on a Journey of Discovery</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-code fa-3x text-primary"></i>
                </div>
                <h5 className="card-title">Code & Create</h5>
                <p className="card-text">
                  We're passionate about turning ideas into functional code. From web development 
                  to algorithms, we're constantly learning and building innovative solutions 
                  that solve real-world problems through technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-users fa-3x text-primary"></i>
                </div>
                <h5 className="card-title">Collaborate & Learn</h5>
                <p className="card-text">
                  We believe in the power of teamwork. Through group projects 
                  and study sessions, we collaborate to overcome challenges and enhance 
                  our skills while building lasting professional relationships
                  that we can use in the Industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-laptop-code fa-3x text-primary"></i>
                </div>
                <h5 className="card-title">Grow & Innovate</h5>
                <p className="card-text">
                  We're committed to continuous learning in the ever-evolving tech landscape. 
                  From mastering new frameworks to exploring emerging technologies, we're 
                  preparing ourselves for successful careers in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional IT Student Focus Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0">
              <div className="card-body text-center">
                <h4 className="card-title mb-4">Our Recent Subjects</h4>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <span className="badge bg-primary p-2">React.js</span>
                  </div>
                  <div className="col-md-3 mb-3">
                    <span className="badge bg-primary p-2">Php</span>
                  </div>
                  <div className="col-md-3 mb-3">
                    <span className="badge bg-primary p-2">Java</span>
                  </div>
                  <div className="col-md-3 mb-3">
                    <span className="badge bg-primary p-2">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;