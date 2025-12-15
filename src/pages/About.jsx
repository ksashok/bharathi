const About = () => {
    return (
        <div className="container section">
            <div className="text-center mb-4">
                <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Our History</span>
                <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: '800' }}>About Bharathi Academy</h1>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-main)' }}>
                <div className="glass-card" style={{ marginBottom: '3rem', padding: '3rem' }}>
                    <p className="mb-4">
                        Bharathi Academy is acknowledged as a global leader in teaching Tamil. We are a not-for-profit school, registered with the <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Australian Charities and Not-for-profits Commission (ACNC)</span>, with over <span style={{ fontWeight: '700', color: 'white' }}>30 years</span> of successful track record.
                    </p>
                    <p className="mb-4">
                        Our mission is to foster the learning of the Tamil language and culture in a fun and engaging environment. We cater to students of all ages, from young children to VCE students and adults.
                    </p>
                    <p>
                        We offer classes across 7 campuses in Melbourne and provide online courses for students globally. Our curriculum is designed to be interactive (<span style={{ fontStyle: 'italic', fontWeight: '700', color: 'var(--primary)' }}>"Let's Play Tamil!"</span>) to ensure students enjoy the process of learning.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="glass-card" style={{ background: 'var(--gradient-brand)', color: 'white', border: 'none' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '800' }}>Why Choose Us?</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li className="mb-4" style={{ display: 'flex', gap: '10px' }}><span>✓</span> Experienced and dedicated teachers.</li>
                            <li className="mb-4" style={{ display: 'flex', gap: '10px' }}><span>✓</span> Comprehensive curriculum covering language, literature, and culture.</li>
                            <li style={{ display: 'flex', gap: '10px' }}><span>✓</span> Preparation for VCE examinations.</li>
                        </ul>
                    </div>
                    <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                        <div style={{ width: '100%', height: '100%', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#374151' }}>
                            Image Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
