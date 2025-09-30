import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Contact Us</h2>
            <p className="lead">Get in touch with us</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 text-center">
            <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
            <h5>Address</h5>
            <p>University of Cabuyao (PnC) <br />Cabuyao City, Laguna 4025</p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-phone fa-2x text-primary mb-3"></i>
            <h5>Phone</h5>
            <p>+63 966 - 478 - 3889</p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
            <h5>Email</h5>
            <p>group2@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;