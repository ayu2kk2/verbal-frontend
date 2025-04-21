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
            content: 'Bone health is crucial for overall well-being. Eating a balanced diet rich in calcium and vitamin D can significantly improve bone density and prevent issues like osteoporosis. Include dairy, leafy greens, and fortified foods in your meals to get the nutrients your bones need.\n\nRegular exercise also plays a huge role in keeping your bones strong. Weight-bearing and resistance exercises, such as walking, running, or lifting weights, help stimulate bone formation and reduce bone loss as we age. Staying active even into your later years is key.\n\nAvoid habits that harm bone health, like smoking and excessive alcohol consumption. Getting regular checkups and bone density tests, especially after age 50, can help you take early action to maintain strong and healthy bones.',
            publishedDate: '2023-12-10',
            image: '/images/strong.jpg',
        },
        {
            id: 2,
            title: 'When Should You See an Orthopedic Specialist?',
            excerpt: 'Learn the signs that indicate you need to visit an orthopedic doctor...',
            content: 'If you’re experiencing persistent joint, bone, or muscle pain, it could be a sign of an underlying orthopedic issue. Pain that doesn’t go away after rest, over-the-counter medication, or physical therapy deserves medical attention.\n\nSwelling, stiffness, or a decreased range of motion can also be signs that something is wrong. If these symptoms affect your ability to walk, work, or perform daily tasks, it’s best to see a specialist. Ignoring such issues could lead to long-term damage.\n\nAn orthopedic doctor can diagnose the cause of your symptoms and offer treatment options ranging from physical therapy to minimally invasive surgery. Early intervention often leads to quicker recovery and better outcomes.',
            publishedDate: '2023-12-15',
            image: '/images/orthodoc.jpg',
        },
        {
            id: 3,
            title: 'The Importance of Joint Care for Seniors',
            excerpt: 'Joint health is especially important for seniors to maintain independence...',
            content: 'As we age, the cartilage that cushions our joints tends to wear down, leading to discomfort, stiffness, and conditions like osteoarthritis. This makes joint care particularly important for seniors looking to maintain mobility and independence.\n\nSimple activities like walking, swimming, and stretching can help keep joints flexible and strong. Combining movement with a balanced diet rich in anti-inflammatory foods can support joint health and reduce pain.\n\nIt’s also important for seniors to avoid falls by using assistive devices when needed and keeping living spaces safe. Regular checkups with an orthopedic doctor can ensure that any joint issues are caught early and managed properly.',
            publishedDate: '2024-01-05',
            image: '/images/senior.jpg',
        },
        {
            id: 4,
            title: 'Common Orthopedic Injuries and How to Prevent Them',
            excerpt: 'Learn about common orthopedic injuries and ways to prevent them...',
            content: 'Orthopedic injuries like sprains, fractures, tendonitis, and dislocations are common, especially in active individuals or those with demanding physical jobs. These injuries can disrupt daily life and often take weeks or months to heal.\n\nTo prevent injuries, it’s important to warm up before exercise and use proper form during physical activity. Wearing the right footwear, staying hydrated, and incorporating rest days into your routine can also reduce your risk of injury.\n\nFor athletes or fitness enthusiasts, strength training and flexibility exercises are key to preventing overuse injuries. If you do get injured, seeking early orthopedic care can help you recover fully and avoid chronic problems.',
            publishedDate: '2024-02-01',
            image: '/images/cure.png',
        },
        {
            id: 5,
            title: 'How Physical Therapy Can Help with Recovery',
            excerpt: 'Physical therapy is an essential part of orthopedic recovery...',
            content: 'Physical therapy is a vital part of the recovery process after an orthopedic injury or surgery. It helps restore mobility, improve strength, and reduce pain through guided exercises and therapeutic techniques.\n\nTherapists design personalized treatment plans to target specific areas of weakness or stiffness. These plans often include stretches, strengthening routines, manual therapy, and even electrical stimulation to accelerate healing.\n\nConsistent therapy not only speeds up recovery but can also prevent future injuries by improving body mechanics and posture. For long-term results, patients are encouraged to follow home exercise programs and stay active under professional guidance.',
            publishedDate: '2024-03-10',
            image: '/images/therapy.jpg',
        },
        {
            id: 6,
            title: 'Why Ignoring Joint Pain Can Be Risky',
            excerpt: 'Ignoring joint pain can lead to long-term damage—early care makes all the difference.',
            content: 'Joint pain might seem like a minor inconvenience at first, but it’s often a sign that something is wrong beneath the surface. Ignoring it can lead to chronic inflammation, reduced mobility, and conditions like arthritis that become harder to manage over time.\n\nMany people try to push through the pain or self-medicate, which can worsen the condition. Early consultation with an orthopedic specialist allows for accurate diagnosis and the chance to begin effective treatment while the problem is still manageable.\n\nTaking joint pain seriously ensures you maintain your quality of life. Whether it’s physical therapy, medication, or lifestyle adjustments, timely care can help you avoid surgery and keep you active and pain-free for years to come.',
            publishedDate: '2024-3-11',
            image: '/images/ignore.png',
        }
    ];
    

    const openModal = (blog) => setSelectedBlog(blog);
    const closeModal = () => setSelectedBlog(null);

    return (
        <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
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
                            <div className="card h-100 shadow-lg border-0 transition-transform" style={{ borderRadius: '12px', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', transition: 'opacity 0.3s ease' }} />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: '#003366' }}>{blog.title}</h5>
                                    <p className="card-text text-muted">{blog.excerpt}</p>
                                    <button className="btn btn-primary" onClick={() => openModal(blog)} style={{ transition: 'transform 0.2s ease' }}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra: Subscribe Newsletter */}
                <div className="bg-white mt-5 p-4 rounded shadow-sm text-center">
                    <h4 className="mb-3" style={{ color: '#003366' }}>Subscribe to our Health Newsletter</h4>
                    <input type="email" placeholder="Enter your email" className="form-control d-inline w-50 me-2 mb-2" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>

            {/* Modal */}
            {selectedBlog && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ transition: 'opacity 0.3s ease' }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content shadow-lg" style={{ borderRadius: '15px', transition: 'transform 0.3s ease' }}>
                                <div className="modal-header" style={{ backgroundColor: '#003366', color: '#fff' }}>
                                    <h5 className="modal-title">{selectedBlog.title}</h5>
                                    <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="text-center mb-3">
                                        <img src={selectedBlog.image} className="img-fluid rounded" alt={selectedBlog.title} style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '15px', transition: 'transform 0.3s ease' }} />
                                    </div>
                                    <p><strong>Published:</strong> {selectedBlog.publishedDate}</p>
                                    <p>{selectedBlog.content}</p>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" style={{ transition: 'opacity 0.3s ease' }}></div>
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
