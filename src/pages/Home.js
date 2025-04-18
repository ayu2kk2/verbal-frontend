import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5001/api/doctors')
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
        <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            {/* SEO Optimization */}
            <Helmet>
                <title>OrthoCare | Orthopedic Specialists in Kalyan</title>
                <meta name="description" content="Orthopedic specialists in Kalyan providing expert bone and joint care." />
                <meta name="keywords" content="orthopedic, bone care, joint health, orthopedic specialists in Kalyan" />
            </Helmet>

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
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="container py-5">
                <h2 className="text-center mb-5" style={{ color: '#003366', fontWeight: '700' }}>
                    Orthopedic Specialists in Kalyan
                </h2>

                <div className="row">
                    {doctors.map(doctor => (
                        <div className="col-md-4 mb-4" key={doctor._id}>
                            <DoctorCard doctor={doctor} onClick={() => handleDoctorClick(doctor)} />
                        </div>
                    ))}
                </div>

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
                                        <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                                        <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
                                        <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
                                        <p><strong>Consultation Fee:</strong> {selectedDoctor.consultation_fee}</p>
                                        <p><strong>Location:</strong> {selectedDoctor.clinic_address}</p>
                                        <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-backdrop fade show"></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
