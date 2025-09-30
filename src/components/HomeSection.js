import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h1 className="fw-bold">Welcome to Group 2's Website</h1>
            <p className="lead mb-4">
              We are passionate IT students dedicated to creating innovative solutions 
              and mastering cutting-edge technologies. Join us on our journey through 
              the world of software development and digital innovation.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src={process.env.PUBLIC_URL + '/welcome.jpg'}
              alt="Welcome" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;