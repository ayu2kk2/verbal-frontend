
import React from 'react';

const DoctorCard = ({ doctor, onClick }) => {
    return (
        <div
            className="card h-100 border-0 shadow-sm"
            onClick={() => onClick(doctor)}
            style={{ cursor: 'pointer', borderRadius: '12px' }}
        >
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#003366', fontWeight: 600 }}>{doctor.name}</h5>
                <p className="card-text mb-1 text-muted">{doctor.specialization}</p>
                <p className="card-text mb-1"><strong>Experience:</strong> {doctor.experience} yrs</p>
                <p className="card-text mb-1"><strong>Rating:</strong> {doctor.rating} / 5</p>
                <p className="card-text text-muted"><small>{doctor.location}</small></p>
            </div>
        </div>
    );
};

export default DoctorCard;


