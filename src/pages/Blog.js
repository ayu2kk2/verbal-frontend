// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';  


// const Blog = () => {
//     const [selectedBlog, setSelectedBlog] = useState(null);

//     const blogs = [
//         {
//             id: 1,
//             title: '5 Tips to Keep Your Bones Strong',
//             excerpt: 'A healthy diet and lifestyle are key to strong bones...',
//             content: 'Bone health is crucial for overall well-being. Eating a balanced diet rich in calcium and vitamin D, exercising regularly, and maintaining a healthy weight can help keep your bones strong and reduce the risk of fractures.',
//             publishedDate: '2023-12-10',
//         },
//         {
//             id: 2,
//             title: 'When Should You See an Orthopedic Specialist?',
//             excerpt: 'Learn the signs that indicate you need to visit an orthopedic doctor...',
//             content: 'If you’re experiencing persistent pain, swelling, or discomfort in your joints, bones, or muscles, it may be time to see an orthopedic specialist. This blog helps you identify when a visit is necessary and what to expect.',
//             publishedDate: '2023-12-15',
//         },
//         {
//             id: 3,
//             title: 'The Importance of Joint Care for Seniors',
//             excerpt: 'Joint health is especially important for seniors to maintain independence...',
//             content: 'As we age, joints become more prone to wear and tear. Maintaining flexibility, strength, and stability is essential to reduce discomfort and increase mobility. This blog explores exercises, lifestyle changes, and treatments to keep seniors’ joints in top shape.',
//             publishedDate: '2024-01-05',
//         },
//         {
//             id: 4,
//             title: 'Common Orthopedic Injuries and How to Prevent Them',
//             excerpt: 'Learn about common orthopedic injuries and ways to prevent them...',
//             content: 'Injuries such as sprains, fractures, and dislocations are common in sports and daily activities. Proper warm-up, using the right techniques, and strengthening muscles can help prevent these injuries. This blog breaks down the most common orthopedic injuries and ways to avoid them.',
//             publishedDate: '2024-02-01',
//         },
//         {
//             id: 5,
//             title: 'How Physical Therapy Can Help with Recovery',
//             excerpt: 'Physical therapy is an essential part of orthopedic recovery...',
//             content: 'Physical therapy plays a key role in helping patients recover from orthopedic surgeries and injuries. It helps restore movement, reduce pain, and improve strength. This blog discusses the benefits of physical therapy for orthopedic conditions.',
//             publishedDate: '2024-03-10',
//         }
//     ];

//     const openModal = (blog) => {
//         setSelectedBlog(blog);
//     };

//     const closeModal = () => {
//         setSelectedBlog(null);
//     };

//     return (
//         <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
//             {/* Helmet for SEO Meta Tags */}
//             <Helmet>
//                 <title>Orthopedic Blog | OrthoCare Kalyan</title>
//                 <meta name="description" content="Latest blog posts about orthopedic health, joint care, bone strength, and recovery tips from the experts at OrthoCare Kalyan." />
//                 <meta name="keywords" content="orthopedic, bone health, joint care, physical therapy, injury prevention, recovery, Kalyan" />
//                 <meta name="author" content="OrthoCare Kalyan" />
//                 <meta property="og:title" content="Orthopedic Blog | OrthoCare Kalyan" />
//                 <meta property="og:description" content="Explore our blog for tips on orthopedic health, joint care, and more. Get expert advice from OrthoCare Kalyan." />
//                 <meta property="og:image" content="path_to_image.jpg" />
//                 <meta property="og:url" content="https://yourwebsite.com/blog" />
//                 <meta property="og:type" content="website" />
//             </Helmet>

//             {/* Fixed Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
//                 <div className="container">
//                     <Link className="navbar-brand fw-bold" to="/">OrthoCare Kalyan</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{ color: '#fff' }}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/blog" style={{ color: '#fff' }}>Blog</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact" style={{ color: '#fff' }}>Contact Us</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Blog Content */}
//             <div className="container py-5" style={{ marginTop: '80px' }}>
//                 <h1 className="text-center text-3xl font-bold mb-5" style={{ color: '#003366' }}>
//                     Orthopedic Blog
//                 </h1>
//                 <p className="text-center text-lg text-gray-700 mb-5">
//                     Welcome to our orthopedic blog! Here we share the latest information, health tips, and expert advice related to bone and joint care.
//                 </p>

//                 <div className="row">
//                     {blogs.map(blog => (
//                         <div className="col-md-4 mb-4" key={blog.id}>
//                             <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//                                 <div className="card-body p-4">
//                                     <h5 className="card-title text-xl font-semibold" style={{ color: '#003366' }}>
//                                         {blog.title}
//                                     </h5>
//                                     <p className="card-text text-sm text-gray-600">
//                                         {blog.excerpt}
//                                     </p>
//                                     <button 
//                                         className="btn btn-primary mt-2" 
//                                         onClick={() => openModal(blog)}>
//                                         Read More
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Modal */}
//                 {selectedBlog && (
//                     <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//                         <div className="modal-dialog modal-dialog-centered" role="document">
//                             <div className="modal-content shadow" style={{ borderRadius: '10px' }}>
//                                 <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
//                                     <h5 className="modal-title">{selectedBlog.title}</h5>
//                                     <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <p><strong>Published On:</strong> {selectedBlog.publishedDate}</p>
//                                     <p>{selectedBlog.content}</p>
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button className="btn btn-secondary" onClick={closeModal}>Close</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Blog;


// Blog.js new 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogs = [
        {
            id: 1,
            title: '5 Tips to Keep Your Bones Strong',
            excerpt: 'A healthy diet and lifestyle are key to strong bones...',
            content: 'Bone health is crucial for overall well-being. Eating a balanced diet rich in calcium and vitamin D, exercising regularly, and maintaining a healthy weight can help keep your bones strong and reduce the risk of fractures.',
            publishedDate: '2023-12-10',
            image: '/images/strong.jpg',
        },
        {
            id: 2,
            title: 'When Should You See an Orthopedic Specialist?',
            excerpt: 'Learn the signs that indicate you need to visit an orthopedic doctor...',
            content: 'If you’re experiencing persistent pain, swelling, or discomfort in your joints, bones, or muscles, it may be time to see an orthopedic specialist. This blog helps you identify when a visit is necessary and what to expect.',
            publishedDate: '2023-12-15',
            image: '/images/orthodoc.jpg',
        },
        {
            id: 3,
            title: 'The Importance of Joint Care for Seniors',
            excerpt: 'Joint health is especially important for seniors to maintain independence...',
            content: 'As we age, joints become more prone to wear and tear. Maintaining flexibility, strength, and stability is essential to reduce discomfort and increase mobility.',
            publishedDate: '2024-01-05',
            image: '/images/senior.jpg',
        },
        {
            id: 4,
            title: 'Common Orthopedic Injuries and How to Prevent Them',
            excerpt: 'Learn about common orthopedic injuries and ways to prevent them...',
            content: 'Injuries such as sprains, fractures, and dislocations are common in sports and daily activities. Proper warm-up, using the right techniques, and strengthening muscles can help prevent these injuries.',
            publishedDate: '2024-02-01',
            image: '/images/cure.png',
        },
        {
            id: 5,
            title: 'How Physical Therapy Can Help with Recovery',
            excerpt: 'Physical therapy is an essential part of orthopedic recovery...',
            content: 'Physical therapy plays a key role in helping patients recover from orthopedic surgeries and injuries. It helps restore movement, reduce pain, and improve strength.',
            publishedDate: '2024-03-10',
            image: '/images/therapy.jpg',
        },
        {
            id: 6,
            title: 'Why Ignoring Joint Pain Can Be Risky',
            excerpt: 'Ignoring joint pain can lead to long-term damage—early care makes all the difference.',
            content: `Joint pain might seem like a minor inconvenience at first, but ignoring it can lead to more serious issues like arthritis or long-term mobility problems.Pain is your body’s way of saying something’s wrong. If it doesn’t go away with rest or keeps coming back, it’s time to consult an orthopedic specialist. Early treatment can prevent damage and keep you active and pain-free.Don’t wait until the pain gets worse. Your joints deserve attention now.`,
            publishedDate: '2024-3-11',
            image: '/images/ignore.png',
        }
    ];

    const openModal = (blog) => setSelectedBlog(blog);
    const closeModal = () => setSelectedBlog(null);

    return (
        <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            <Helmet>
                <title>Orthopedic Blog | OrthoCare Kalyan</title>
                <meta name="description" content="Latest blog posts about orthopedic health, joint care, bone strength, and recovery tips from the experts at OrthoCare Kalyan." />
                <meta name="keywords" content="orthopedic, bone health, joint care, physical therapy, injury prevention, recovery, Kalyan" />
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Blog Section */}
            <div className="container py-5">
                <h1 className="text-center mb-4 fw-bold" style={{ color: '#003366' }}>Orthopedic Blog</h1>
                <p className="text-center mb-5 text-muted">
                    Stay informed with expert insights, bone health tips, and orthopedic recovery strategies.
                </p>

                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <div className="card h-100 shadow-sm border-0">
                                <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: '#003366' }}>{blog.title}</h5>
                                    <p className="card-text text-muted">{blog.excerpt}</p>
                                    <button className="btn btn-primary" onClick={() => openModal(blog)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Subscribe CTA */}
                <div className="bg-white mt-5 p-4 rounded shadow-sm text-center">
                    <h4 className="mb-3" style={{ color: '#003366' }}>Subscribe to our Health Newsletter</h4>
                    <input type="email" placeholder="Enter your email" className="form-control d-inline w-50 me-2 mb-2" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>

            {/* Modal */}
            {selectedBlog && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content shadow">
                                <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
                                    <h5 className="modal-title">{selectedBlog.title}</h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p><strong>Published:</strong> {selectedBlog.publishedDate}</p>
                                    <p>{selectedBlog.content}</p>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={closeModal}>Close</button>
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

export default Blog;
