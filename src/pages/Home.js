// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import DoctorCard from '../components/DoctorCard';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const API = process.env.REACT_APP_API_URL;

// const Home = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

// useEffect(() => {
//     axios.get(`${API}/api/doctors`)
//       .then(res => setDoctors(res.data))
//       .catch(err => console.error('Error fetching doctors:', err));
//   }, []);
  

//   const handleDoctorClick = (doctor) => {
//     setSelectedDoctor(doctor);
//   };

//   const closeModal = () => {
//     setSelectedDoctor(null);
//   };

//   return (
//     <div style={{ backgroundColor: '#f0f4f8' }}>
//       <Helmet>
//         <title>OrthoCare | Orthopedic Specialists in Kalyan</title>
//         <meta name="description" content="Orthopedic specialists in Kalyan providing expert bone and joint care." />
//       </Helmet>

//       {/* Navbar */}
//        <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm" style={{ backgroundColor: '#003366' }}>
//              <div className="container">
//                  <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
//                  <img
//                    src="/images/ocare.png"
//                    alt="Ocare Logo"
//                    className="rounded-circle shadow-sm"
//                    style={{ height: '40px', width: '40px', objectFit: 'cover', marginRight: '10px' }}
//                  />
//                  OrthoCare Kalyan
//                </Link>
//                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                  <span className="navbar-toggler-icon"></span>
//                </button>
//                <div className="collapse navbar-collapse" id="navbarNav">
//                  <ul className="navbar-nav ms-auto">
//                    <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
//                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
//                    <li className="nav-item"><Link className="nav-link " to="/contact">Contact Us</Link></li>
//                  </ul>
//                </div>
//              </div>
//            </nav>

//       <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner" style={{ height: '500px', overflow: 'hidden' }}>
//     {['slide1.jpg', 'slide2.jpg', 'slide3.jpg'].map((img, idx) => (
//       <div
//         key={img}
//         className={`carousel-item ${idx === 0 ? 'active' : ''}`}
//         data-bs-interval="5000" // it is optional, its for Autoplay delay in ms
//         style={{ height: '100%' }}
//       >
//         <img
//           src={`/images/${img}`}
//           className="d-block w-100"
//           alt={`Slide ${idx + 1}`}
//           style={{ height: '100%', objectFit: 'cover' }}
//         />
//         <div
//           className="carousel-caption d-none d-md-block"
//           style={{
//             bottom: '40px',
//             background: 'rgba(0, 0, 0, 0.5)',
//             padding: '20px',
//             borderRadius: '10px',
//           }}
//         >
//           <h3 className="text-white">Expert Orthopedic Care</h3>
//           <p className="text-light mb-0">Your bone health is our priority</p>
//         </div>
//       </div>
//     ))}
//   </div>

//   <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>



//       {/* Welcome Section */}
//       <section className="py-5 bg-white">
//         <div className="container text-center">
//           <h2 className="fw-bold" style={{ color: '#003366' }}>Welcome to OrthoCare</h2>
//           <p className="lead">Trusted orthopedic specialists dedicated to your health, mobility, and comfort.</p>
//         </div>
//       </section>

//       {/* Facilities or About */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-2">
//               <img src="/images/facility.jpg" alt="Our Facility" className="img-fluid rounded shadow-sm" />
//             </div>
//             <div className="col-md-6">
//               <h3 style={{ color: '#003366' }}>Modern Facilities & Technology</h3>
//               <p>Our clinic is equipped with state-of-the-art technology to ensure accurate diagnosis and effective treatment.</p>
//               <p>We offer a wide range of orthopedic services including joint replacement, physiotherapy, sports injury management, and more.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Meet the Doctors */}
//       <section className="container py-5">
//         <h2 className="text-center mb-5" style={{ color: '#003366', fontWeight: '700' }}>Meet Our Specialists</h2>
//         <div className="row">
//           {doctors.map(doctor => (
//             <div className="col-md-4 mb-4" key={doctor._id}>
//               <DoctorCard doctor={doctor} onClick={() => handleDoctorClick(doctor)} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Doctor Modal */}
//       {selectedDoctor && (
//         <>
//           <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//             <div className="modal-dialog modal-dialog-centered" role="document">
//               <div className="modal-content shadow">
//                 <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
//                   <h5 className="modal-title">{selectedDoctor.name}</h5>
//                   <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
//                 </div>
//                 <div className="modal-body">
//                   <img src={selectedDoctor.image || "/images/default-doctor.jpg"} alt={selectedDoctor.name} className="img-fluid rounded mb-3" />
//                   <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
//                   <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
//                   <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
//                   <p><strong>Consultation Fee:</strong> ₹{selectedDoctor.consultation_fee}</p>
//                   <p><strong>Location:</strong> {selectedDoctor.clinic_address}</p>
//                   <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="modal-backdrop fade show"></div>
//         </>
//       )}

//       {/* Footer */}
//       <footer className="bg-dark text-white pt-5 pb-3 mt-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <h5>OrthoCare Kalyan</h5>
//               <p>Dedicated to providing world-class orthopedic services to improve your mobility and comfort.</p>
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
//               <p>Phone: +91 98765 43210</p>
//             </div>
//           </div>
//           <hr className="border-top border-light" />
//           <p className="text-center mb-0">&copy; {new Date().getFullYear()} OrthoCare Kalyan. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    <div style={{ backgroundColor: '#eef3f7' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm" style={{ backgroundColor: '#003366' }}>
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
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="overflow-hidden" style={{ maxHeight: '300px' }}>
        <img src="/images/contact.jpg" className="img-fluid w-100" alt="Contact" style={{ objectFit: 'cover' }} />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary animate__animated animate__fadeInDown">We'd love to hear from you!</h2>
          <p className="text-muted">Reach out for consultations, follow-ups, or general inquiries.</p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <img src="/images/hospital.jpg" alt="Clinic" className="img-fluid rounded shadow" />
          </div>

          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded" noValidate>
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
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required />
              </div>
              <button className="btn btn-primary w-100" type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <h4 className="mb-3 text-primary">Quick Support</h4>
          <a href="https://wa.me/919999999999" className="btn btn-success me-2 mb-2" target="_blank" rel="noopener noreferrer">
            💬 Chat on WhatsApp
          </a>
          <a href="tel:+919999999999" className="btn btn-outline-success mb-2" target="_blank" rel="noopener noreferrer">
            📞 Call Our Team
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-5 shadow rounded overflow-hidden animate__animated animate__fadeInUp">
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

      {/* Toast Notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div ref={toastRef} className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">✅ Your message was sent successfully!</div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>OrthoCare Kalyan</h5>
              <p>Dedicated to providing world-class orthopedic services to improve your mobility and comfort.</p>
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
              <p>Phone: +91 98765 43210</p>
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
