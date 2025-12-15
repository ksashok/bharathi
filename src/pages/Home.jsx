import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Glows */}
                <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 94, 58, 0.15) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px', color: 'var(--accent)' }}>
                        EST. 30 YEARS OF EXCELLENCE
                    </span>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.1, color: 'white' }}>
                        Let's Play <span className="gradient-text">Tamil!</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem', color: 'var(--text-main)', opacity: 0.9 }}>
                        Join Bharathi Academy to explore our rich language and culture through a fun, engaging, and world-class curriculum.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/fees" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Start Enrolment
                        </Link>
                        <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section - Floating Stats/Info */}
            <section className="section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <div style={{ marginTop: '-5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        <div className="glass-card text-center">
                            <h3 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '800', textShadow: '0 0 20px var(--primary-glow)' }}>30+</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '1px' }}>YEARS EXPERIENCE</p>
                        </div>
                        <div className="glass-card text-center">
                            <h3 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '0.5rem', fontWeight: '800' }}>7</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '1px' }}>CAMPUSES</p>
                        </div>
                        <div className="glass-card text-center">
                            <h3 style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: '800', textShadow: '0 0 20px var(--accent-glow)' }}>ACNC</h3>
                            <p style={{ color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '1px' }}>REGISTERED</p>
                        </div>
                    </div>

                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Global Leaders in Tamil Education</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                            We are committed to preserving our heritage while embracing modern teaching methodologies. Our "Let's Play Tamil" approach makes learning natural and enjoyable for students of all ages.
                        </p>
                    </div>
                </div>
            </section>

            {/* Campuses Preview */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Find Us</span>
                            <h2 style={{ fontSize: '3rem', color: 'white' }}>Our Campuses</h2>
                        </div>
                        <Link to="/locations" className="btn btn-outline">
                            View All Timings &rarr;
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { name: 'Berwick', time: 'Sundays, 10.00am - 12.45pm' },
                            { name: 'Clayton', time: 'Sundays, 1.30pm - 4.00pm' },
                            { name: 'Cranbourne', time: 'Saturdays, 10.00am - 12.45pm' },
                            { name: 'Dandenong', time: 'Sundays, 10.15am - 1.00pm' },
                            { name: 'East Burwood', time: 'Sundays, 10.15am - 1.00pm' },
                            { name: 'Pakenham', time: 'Saturdays, 1.45pm - 4.30pm' },
                            { name: 'South Morang', time: 'Sundays, 10.15am - 1.00pm' }
                        ].map((campus) => (
                            <Link key={campus.name} to="/locations" className="glass-card" style={{ padding: '2rem', display: 'block', transition: 'transform 0.2s', textDecoration: 'none' }}>
                                <div style={{ width: '50px', height: '50px', background: 'rgba(255, 94, 58, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>
                                    📍
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{campus.name}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{campus.time}</p>
                            </Link>
                        ))}</div>
                </div>
            </section>

            {/* Events Preview */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-4">
                        <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>What's Happening</span>
                        <h2 style={{ fontSize: '3rem', color: 'white' }}>Latest News & Events</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
                        <div className="glass-card" style={{ padding: 0 }}>
                            <div style={{ height: '250px', background: 'linear-gradient(45deg, #1f2937, #111827)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                                <span>Event Image Placeholder</span>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <span style={{ display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(255, 94, 58, 0.15)', color: 'var(--primary)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '1px' }}>ATHLETICS</span>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Annual Athletics Meet</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Join us for a day of sports, fun, and community spirit at our annual meet.</p>
                                <Link to="/events" style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '0.5px' }}>READ MORE &rarr;</Link>
                            </div>
                        </div>
                        <div className="glass-card" style={{ padding: 0 }}>
                            <div style={{ height: '250px', background: 'linear-gradient(45deg, #1f2937, #111827)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                                <span>Event Image Placeholder</span>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <span style={{ display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(0, 229, 255, 0.15)', color: 'var(--accent)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '1px' }}>CULTURE</span>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Theatre Performance</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Our students showcase their drama skills in a spectacular end-of-year show.</p>
                                <Link to="/events" style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '0.5px' }}>READ MORE &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
