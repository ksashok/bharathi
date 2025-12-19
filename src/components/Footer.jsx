import '../index.css';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--secondary)', color: 'var(--text-main)', padding: '4rem 0 2rem', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-highlight)', fontWeight: '800' }}>Bharathi Academy</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            "Playing Tamil! Learning Tamil can be fun."<br />
                            Join us to learn our language and culture through our unique curriculum.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="/about" style={{ color: 'var(--text-main)' }}>About Us</a></li>
                            <li><a href="/locations" style={{ color: 'var(--text-main)' }}>Locations</a></li>
                            <li><a href="/fees" style={{ color: 'var(--text-main)' }}>Enrolment</a></li>
                            <li><a href="/events" style={{ color: 'var(--text-main)' }}>Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h3>
                        <p style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>📞 +61 1300 933 922</p>
                        <p style={{ color: 'var(--text-main)' }}>✉️ info@bharathi.org.au</p>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <p>&copy; {new Date().getFullYear()} Bharathi Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
