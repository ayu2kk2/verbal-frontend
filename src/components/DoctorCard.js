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


import React from 'react';

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div
      className="card h-100 border-0 shadow-sm"
      onClick={() => onClick(doctor)}
      style={{
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.classList.add('shadow-lg');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.classList.remove('shadow-lg');
      }}
    >
      <img
        src={doctor.image || '/images/defaultdoc.jpg'}
        alt={doctor.name}
        className="card-img-top"
        style={{
          height: '230px',
          objectFit: 'cover',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
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
