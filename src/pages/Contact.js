
//new again
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


  const API = process.env.REACT_APP_API_URL;

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const result = await emailjs.send(
//       'service_7yxiu7e',       // replace
//       'template_8li5g7c',      // replace
//       formData,                // the form data
//       'iO8QiaZje2w5HZ4Lu'        // replace
//     );

//     console.log(result.text);
//     setStatusMessage('✅ Message sent successfully!');
//     setFormData({ name: '', email: '', phone: '', message: '' });

//   } catch (error) {
//     console.error('Email sending error:', error);
//     setStatusMessage('❌ Failed to send message. Try again later.');
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Send Email via EmailJS
    await emailjs.send(
      'service_7yxiu7e',
      'template_8li5g7c',
      formData,
      'iO8QiaZje2w5HZ4Lu'
    );

    // Save to MongoDB via backend
    const response = await fetch(`${API}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('📦 Backend response:', data); // ✅ Add this

    if (!response.ok) {
      throw new Error(data.message || 'Failed to save to DB');
    }

    setStatusMessage('✅ Message sent and saved successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });

  } catch (error) {
    console.error('❌ Submission error:', error); // ✅ See error details here
    setStatusMessage('❌ Failed to send or save message. Try again later.');
  }
};



  
  
  

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm" style={{ backgroundColor: '#003366' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img
              src="/images/ocare.png"
              alt="Ocare Logo"
              className="rounded-circle shadow-sm"
              style={{ height: '40px', width: '40px', objectFit: 'cover', marginRight: '10px' }}
            />
            OrthoCare Kalyan
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Image */}
      <div className="container-fluid p-0">
        <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
          <img
            src="/images/contact.jpg"
            alt="Contact Us"
            className="w-100 h-100"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#003366' }}>Get in Touch with Us</h2>

        <div className="row align-items-center g-4">
          {/* Image */}
          <div className="col-lg-6 text-center">
            <img 
              src="/images/hospital.jpg" 
              alt="Clinic Front" 
              className="img-fluid rounded shadow" 
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} 
            />
          </div>

          {/* Form */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#003366', border: 'none' }}>
                Send Message
              </button>
              {statusMessage && (
                <div className="alert alert-info text-center mt-3 mb-0">{statusMessage}</div>
              )}
            </form>
          </div>
        </div>

        {/* WhatsApp Buttons */}
        <div className="text-center mt-5">
          <h4 className="mb-3" style={{ color: '#003366' }}>Need Help Fast?</h4>
          <a
            href="https://wa.me/919999999999?text=Hi%20I%20would%20like%20to%20get%20more%20information."
            className="btn btn-success me-2 mb-2"
            style={{ padding: '10px 25px', fontSize: '16px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="tel:+919999999999"
            className="btn btn-outline-success mb-2"
            style={{ padding: '10px 25px', fontSize: '16px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            📞 Call Our Team
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-5 shadow rounded overflow-hidden">
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

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>OrthoCare Kalyan</h5>
              <p>Your trusted partner in orthopedic care. We provide top-notch services for bone and joint health.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
                <li><Link className="text-white text-decoration-none" to="/blog">Blog</Link></li>
                <li><Link className="text-white text-decoration-none" to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact</h5>
              <p>123 Ortho Street, Kalyan, MH</p>
              <p>Email: care@orthocarekalyan.com</p>
              <p>Phone: +91 99999 99999</p>
            </div>
          </div>
          <hr className="border-top border-light" />
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} OrthoCare Kalyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
