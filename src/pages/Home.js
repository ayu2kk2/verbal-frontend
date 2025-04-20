// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import DoctorCard from '../components/DoctorCard';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const API = process.env.REACT_APP_API_URL;

// const Home = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [selectedDoctor, setSelectedDoctor] = useState(null);

//     useEffect(() => {
//         axios.get(`${API}/`)
//             .then(res => setDoctors(res.data))
//             .catch(err => console.error(err));
//     }, []);

//     const handleDoctorClick = (doctor) => {
//         setSelectedDoctor(doctor);
//     };

//     const closeModal = () => {
//         setSelectedDoctor(null);
//     };

//     return (
//         <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
//             {/* SEO Optimization */}
//             <Helmet>
//                 <title>OrthoCare | Orthopedic Specialists in Kalyan</title>
//                 <meta name="description" content="Orthopedic specialists in Kalyan providing expert bone and joint care." />
//                 <meta name="keywords" content="orthopedic, bone care, joint health, orthopedic specialists in Kalyan" />
//             </Helmet>

//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
//                 <div className="container">
//                     <Link className="navbar-brand fw-bold" to="/">OrthoCare Kalyan</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/blog">Blog</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Content */}
//             <div className="container py-5">
//                 <h2 className="text-center mb-5" style={{ color: '#003366', fontWeight: '700' }}>
//                     Orthopedic Specialists in Kalyan
//                 </h2>

//                 <div className="row">
//                     {doctors.map(doctor => (
//                         <div className="col-md-4 mb-4" key={doctor._id}>
//                             <DoctorCard doctor={doctor} onClick={() => handleDoctorClick(doctor)} />
//                         </div>
//                     ))}
//                 </div>

//                 {selectedDoctor && (
//                     <>
//                         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//                             <div className="modal-dialog modal-dialog-centered" role="document">
//                                 <div className="modal-content shadow">
//                                     <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
//                                         <h5 className="modal-title">{selectedDoctor.name}</h5>
//                                         <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
//                                     </div>
//                                     <div className="modal-body">
//                                         <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
//                                         <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
//                                         <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
//                                         <p><strong>Consultation Fee:</strong> {selectedDoctor.consultation_fee}</p>
//                                         <p><strong>Location:</strong> {selectedDoctor.clinic_address}</p>
//                                         <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="modal-backdrop fade show"></div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;

// Home.js new
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
    axios.get(`${API}/`)
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
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
                   <li className="nav-item"><Link className="nav-link " to="/contact">Contact Us</Link></li>
                 </ul>
               </div>
             </div>
           </nav>

      {/* Hero Slider */}
      {/* <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {['slide1.png', 'slide2.png', 'slide3.png'].map((img, idx) => (
  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
    <img
      src={`/images/${img}`}
      className="d-block w-100"
      alt={`Slide ${idx + 1}`}
      style={{ maxHeight: '500px', objectFit: 'cover' }}
    />
    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
      <h3 className="text-white">Expert Orthopedic Care</h3>
      <p>Your bone health is our priority</p>
    </div>
  </div>
))}

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div> */}
      {/* Hero Slider */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height: '500px', overflow: 'hidden' }}>
    {['slide1.jpg', 'slide2.jpg', 'slide3.jpg'].map((img, idx) => (
      <div
        key={img}
        className={`carousel-item ${idx === 0 ? 'active' : ''}`}
        data-bs-interval="5000" // Optional: Autoplay delay in ms
        style={{ height: '100%' }}
      >
        <img
          src={`/images/${img}`}
          className="d-block w-100"
          alt={`Slide ${idx + 1}`}
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <div
          className="carousel-caption d-none d-md-block"
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
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold" style={{ color: '#003366' }}>Welcome to OrthoCare</h2>
          <p className="lead">Trusted orthopedic specialists dedicated to your health, mobility, and comfort.</p>
        </div>
      </section>

      {/* Facilities or About */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2">
              <img src="/images/facility.jpg" alt="Our Facility" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-6">
              <h3 style={{ color: '#003366' }}>Modern Facilities & Technology</h3>
              <p>Our clinic is equipped with state-of-the-art technology to ensure accurate diagnosis and effective treatment.</p>
              <p>We offer a wide range of orthopedic services including joint replacement, physiotherapy, sports injury management, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="container py-5">
        <h2 className="text-center mb-5" style={{ color: '#003366', fontWeight: '700' }}>Meet Our Specialists</h2>
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
