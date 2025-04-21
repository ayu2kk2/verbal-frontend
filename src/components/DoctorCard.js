// import React from 'react';

// const DoctorCard = ({ doctor, onClick }) => {
//   return (
//     <div
//       className="card h-100 border-0 shadow-sm"
//       onClick={() => onClick(doctor)}
//       style={{ cursor: 'pointer', borderRadius: '12px' }}
//     >
//       <img
//         src={doctor.image || '/images/defaultdoc.jpg'}
//         alt={doctor.name}
//         className="card-img-top"
//         style={{ height: '230px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
//       />
//       <div className="card-body">
//         <h5 className="card-title" style={{ color: '#003366', fontWeight: 600 }}>{doctor.name}</h5>
//         <p className="card-text mb-1 text-muted">{doctor.specialization}</p>
//         <p className="card-text mb-1"><strong>Experience:</strong> {doctor.experience} yrs</p>
//         <p className="card-text mb-1"><strong>Rating:</strong> {doctor.rating} / 5</p>
//         <p className="card-text text-muted"><small>{doctor.location}</small></p>
//       </div>
//     </div>
//   );
// };

// export default DoctorCard;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/doctors`)
      .then(res => setDoctors(res.data))
      .catch(err => console.error('Error fetching doctors:', err));
  }, []);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div style={{ backgroundColor: '#f7f9fc' }}>
      <Helmet>
        <title>OrthoCare | Orthopedic Specialists in Kalyan</title>
        <meta name="description" content="Orthopedic specialists in Kalyan providing expert bone and joint care." />
        <link rel="icon" type="image/png" href="/images/ocare.png" />
      </Helmet>

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
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: '500px', overflow: 'hidden' }}>
          {['slide1.jpg', 'slide2.jpg', 'slide3.jpg'].map((img, idx) => (
            <div
              key={img}
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
              data-bs-interval="5000"
              style={{ height: '100%' }}
            >
              <img
                src={`/images/${img}`}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div
                className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp"
                style={{
                  bottom: '40px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <h3 className="text-white">Expert Orthopedic Care</h3>
                <p className="text-light mb-0">Your bone health is our priority</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <section className="py-5" style={{ backgroundColor: '#e6f2ff' }}>
        <div className="container text-center animate__animated animate__fadeInDown">
          <h2 className="fw-bold" style={{ color: '#003366' }}>Welcome to OrthoCare</h2>
          <p className="lead">Trusted orthopedic specialists dedicated to your health, mobility, and comfort.</p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-5" style={{ backgroundColor: '#fdf5e6' }}>
        <div className="container">
          <div className="row align-items-center animate__animated animate__fadeInLeft">
            <div className="col-md-6 mb-4">
              <div className="overflow-hidden rounded shadow-sm">
                <img
                  src="/images/facility.jpg"
                  alt="Our Facility"
                  className="img-fluid hover-zoom"
                  style={{
                    borderRadius: '10px',
                    transition: 'transform 0.5s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3 style={{ color: '#003366' }}>Modern Facilities & Technology</h3>
              <p>Our clinic is equipped with state-of-the-art technology to ensure accurate diagnosis and effective treatment.</p>
              <p>We offer a wide range of orthopedic services including joint replacement, physiotherapy, sports injury management, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="container py-5" style={{ backgroundColor: '#f0fff0' }}>
        <h2 className="text-center mb-5 animate__animated animate__fadeInUp" style={{ color: '#003366', fontWeight: '700' }}>Meet Our Specialists</h2>
        <div className="row">
          {doctors.map(doctor => (
            <div className="col-md-4 mb-4" key={doctor._id}>
              <DoctorCard doctor={doctor} onClick={() => handleDoctorClick(doctor)} />
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content shadow">
                <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
                  <h5 className="modal-title">{selectedDoctor.name}</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <img src={selectedDoctor.image || "/images/default-doctor.jpg"} alt={selectedDoctor.name} className="img-fluid rounded mb-3" />
                  <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                  <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
                  <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
                  <p><strong>Consultation Fee:</strong> ₹{selectedDoctor.consultation_fee}</p>
                  <p><strong>Location:</strong> {selectedDoctor.clinic_address}</p>
                  <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

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

export default Home;
