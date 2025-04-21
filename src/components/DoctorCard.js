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
    <div style={{ backgroundColor: '#f0f4f8' }}>
      <Helmet>
        <title>OrthoCare | Orthopedic Specialists in Kalyan</title>
        <meta name="description" content="Orthopedic specialists in Kalyan providing expert bone and joint care." />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-lg" style={{ backgroundColor: '#003366' }}>
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
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: '500px', overflow: 'hidden' }}>
          {['slide1.jpg', 'slide2.jpg', 'slide3.jpg'].map((img, idx) => (
            <div
              key={img}
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
              data-bs-interval="4000"
              style={{ height: '100%' }}
            >
              <img
                src={`/images/${img}`}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
                style={{ height: '100%', objectFit: 'cover', filter: 'brightness(80%)' }}
              />
              <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
                <h3 className="text-white fw-bold">Expert Orthopedic Care</h3>
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
      <section className="py-5 bg-white animate__animated animate__fadeIn">
        <div className="container text-center">
          <h2 className="fw-bold text-primary">Welcome to OrthoCare</h2>
          <p className="lead text-secondary">Trusted orthopedic specialists dedicated to your health, mobility, and comfort.</p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-5 bg-light animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2">
              <img src="/images/facility.jpg" alt="Our Facility" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary">Modern Facilities & Technology</h3>
              <p>Our clinic is equipped with state-of-the-art technology to ensure accurate diagnosis and effective treatment.</p>
              <p>We offer a wide range of orthopedic services including joint replacement, physiotherapy, sports injury management, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="container py-5 animate__animated animate__fadeInUp">
        <h2 className="text-center mb-5 text-primary fw-bold">Meet Our Specialists</h2>
        <div className="row">
          {doctors.map(doctor => (
            <div className="col-md-4 mb-4" key={doctor._id}>
              <DoctorCard doctor={doctor} onClick={handleDoctorClick} />
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content shadow-lg animate__animated animate__fadeInDown">
                <div className="modal-header bg-primary text-white">
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
