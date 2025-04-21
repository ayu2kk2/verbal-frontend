// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser'; 
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
//   const [statusMessage, setStatusMessage] = useState('');
//   const API = process.env.REACT_APP_API_URL;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // Send Email via EmailJS
//     await emailjs.send(
//       'service_7yxiu7e',
//       'template_8li5g7c',
//       formData,
//       'iO8QiaZje2w5HZ4Lu'
//     );

//     // Saving to MongoDB through backend
//     const response = await fetch(`${API}/api/contact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     console.log('Backend response:', data);

//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to save to DB');
//     }

//     setStatusMessage('✅ Message sent successfully!');
//     setFormData({ name: '', email: '', phone: '', message: '' });

//   } catch (error) {
//     console.error('Submission error:', error); // we can see error details here
//     setStatusMessage('Failed to send message. Try again later.');
//   }
// };



//   return (
//     <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm" style={{ backgroundColor: '#003366' }}>
//         <div className="container">
//           <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
//             <img
//               src="/images/ocare.png"
//               alt="Ocare Logo"
//               className="rounded-circle shadow-sm"
//               style={{ height: '40px', width: '40px', objectFit: 'cover', marginRight: '10px' }}
//             />
//             OrthoCare Kalyan
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
//               <li className="nav-item"><Link className="nav-link active" to="/contact">Contact Us</Link></li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Header Image */}
//       <div className="container-fluid p-0">
//         <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
//           <img
//             src="/images/contact.jpg"
//             alt="Contact Us"
//             className="w-100 h-100"
//             style={{ objectFit: 'cover', objectPosition: 'center' }}
//           />
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="container py-5">
//         <h2 className="text-center mb-5 fw-bold" style={{ color: '#003366' }}>Get in Touch with Us</h2>

//         <div className="row align-items-center g-4">
//           {/* Image */}
//           <div className="col-lg-6 text-center">
//             <img 
//               src="/images/hospital.jpg" 
//               alt="Clinic Front" 
//               className="img-fluid rounded shadow" 
//               style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} 
//             />
//           </div>

//           {/* Form */}
//           <div className="col-lg-6">
//             <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Phone</label>
//                 <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Message</label>
//                 <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required />
//               </div>
//               <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#003366', border: 'none' }}>
//                 Send Message
//               </button>
//               {statusMessage && (
//                 <div className="alert alert-info text-center mt-3 mb-0">{statusMessage}</div>
//               )}
//             </form>
//           </div>
//         </div>

//         {/* WhatsApp Buttons */}
//         <div className="text-center mt-5">
//           <h4 className="mb-3" style={{ color: '#003366' }}>Need Help Fast?</h4>
//           <a
//             href="https://wa.me/919999999999?text=Hi%20I%20would%20like%20to%20get%20more%20information."
//             className="btn btn-success me-2 mb-2"
//             style={{ padding: '10px 25px', fontSize: '16px' }}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             💬 Chat on WhatsApp
//           </a>
//           <a
//             href="tel:+919999999999"
//             className="btn btn-outline-success mb-2"
//             style={{ padding: '10px 25px', fontSize: '16px' }}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             📞 Call Our Team
//           </a>
//         </div>

//         {/* Google Map */}
//         <div className="mt-5 shadow rounded overflow-hidden">
//           <iframe
//             title="clinic-location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160983873!2d72.74109983902492!3d19.207681931152422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796b7f6e44e3f%3A0xe9536ad86bb3e50e!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615995970585!5m2!1sen!2sin"
//             width="100%"
//             height="350"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white pt-5 pb-3 mt-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <h5>OrthoCare Kalyan</h5>
//               <p>Your trusted partner in orthopedic care. We provide top-notch services for bone and joint health.</p>
//             </div>
//             <div className="col-md-4 mb-4">
//               <h5>Quick Links</h5>
//               <ul className="list-unstyled">
//                 <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
//                 <li><Link className="text-white text-decoration-none" to="/blog">Blog</Link></li>
//                 <li><Link className="text-white text-decoration-none" to="/contact">Contact Us</Link></li>
//               </ul>
//             </div>
//             <div className="col-md-4 mb-4">
//               <h5>Contact</h5>
//               <p>123 Ortho Street, Kalyan, MH</p>
//               <p>Email: care@orthocarekalyan.com</p>
//               <p>Phone: +91 99999 99999</p>
//             </div>
//           </div>
//           <hr className="border-top border-light" />
//           <p className="text-center mb-0">&copy; {new Date().getFullYear()} OrthoCare Kalyan. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);
  const API = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_7yxiu7e',
        'template_8li5g7c',
        formData,
        'iO8QiaZje2w5HZ4Lu'
      );

      const response = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to save to DB');
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
      setShowToast(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  useEffect(() => {
    if (showToast && toastRef.current) {
      const bsToast = new window.bootstrap.Toast(toastRef.current);
      bsToast.show();
    }
  }, [showToast]);

  return (
    <div className="bg-light d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/images/ocare.png" alt="Logo" className="rounded-circle me-2" height="40" width="40" />
            OrthoCare Kalyan
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead">We’d love to hear from you – reach out with any questions, feedback, or appointment requests.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-6 d-flex flex-column justify-content-center fade show">
            <img src="/images/hospital.jpg" alt="Clinic" className="img-fluid rounded shadow mb-4" />
            <div className="bg-primary text-white p-4 rounded shadow-sm">
              <h4>Clinic Info</h4>
              <p className="mb-1">📍 123 Ortho Street, Kalyan, MH</p>
              <p className="mb-1">📧 care@orthocarekalyan.com</p>
              <p className="mb-1">📞 +91 99999 99999</p>
              <p className="mb-0">🕒 Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm border border-2 border-primary fade show">
              <h4 className="text-primary mb-4">Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  ✉️ Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="text-center mt-5 fade show">
          <h4 className="text-primary mb-3">Need Help Fast?</h4>
          <a href="https://wa.me/919999999999" className="btn btn-success me-2 mb-2" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
          <a href="tel:+919999999999" className="btn btn-outline-success mb-2" target="_blank" rel="noopener noreferrer">
            📞 Call Now
          </a>
        </div>

        {/* Map */}
        <div className="mt-5 rounded overflow-hidden shadow-sm border border-1 border-secondary fade show">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160983873!2d72.74109983902492!3d19.207681931152422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796b7f6e44e3f%3A0xe9536ad86bb3e50e!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615995970585!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Toast Notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1055 }}>
        <div
          ref={toastRef}
          className="toast text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">✅ Your message was sent successfully!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-1">OrthoCare Kalyan - Dedicated to your joint health and mobility.</p>
          <p className="mb-0">&copy; {new Date().getFullYear()} OrthoCare Kalyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
