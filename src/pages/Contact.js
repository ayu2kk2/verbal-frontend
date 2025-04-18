import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the form data using EmailJS
    emailjs.send(
      'service_7yxiu7e',     
      'template_8li5g7c',     
      formData, 
      'iO8QiaZje2w5HZ4Lu'       
    )
    .then((result) => {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clearing thr form
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      setStatusMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">OrthoCare Kalyan</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#003366', fontWeight: '700' }}>Contact Us</h2>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#003366', border: 'none' }}>
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div className="alert alert-info text-center mt-3" role="alert">
            {statusMessage}
          </div>
        )}

        {/* WhatsApp Chat Button */}
        <div className="text-center mt-4">
          <a
            href="https://wa.me/919999999999?text=Hi%20I%20would%20like%20to%20get%20more%20information."
            className="btn btn-success"
            style={{ padding: '10px 20px', fontSize: '18px', marginRight: '10px' }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>

          {/* WhatsApp Call Button */}
          <a
            href="tel:+919999999999"
            className="btn btn-success"
            style={{ padding: '10px 20px', fontSize: '18px' }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            📞 Call on WhatsApp
          </a>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-5">
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160983873!2d72.74109983902492!3d19.207681931152422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796b7f6e44e3f%3A0xe9536ad86bb3e50e!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615995970585!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
