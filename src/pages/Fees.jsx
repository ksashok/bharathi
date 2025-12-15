import EnrolmentForm from '../components/EnrolmentForm';

const Fees = () => {
    return (
        <div className="container section">
            <div className="text-center mb-4">
                <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Join Us</span>
                <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem', fontWeight: '800' }}>Fees & <span className="gradient-text">Enrolment</span></h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>

                {/* Left Column: Form */}
                <div>
                    <EnrolmentForm />
                </div>

                {/* Right Column: Info & Fees */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-card">
                        <h2 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Why Enrol Online?</h2>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Secure your spot instantly</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Choose your preferred campus</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Quick and easy process</li>
                        </ul>
                    </div>

                    <div className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(255, 94, 58, 0.1) 0%, rgba(10, 25, 47, 0.5) 100%)', borderColor: 'var(--primary)', borderWidth: '1px' }}>
                        <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>Term Fee Structure</h2>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                        <th style={{ textAlign: 'left', padding: '0.8rem 0', color: 'var(--accent)' }}>Year Level</th>
                                        <th style={{ textAlign: 'right', padding: '0.8rem 0', color: 'var(--accent)' }}>Term Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { level: 'Kinder to A7', fee: '$90' },
                                        { level: 'Pre VCE', fee: '$110' },
                                        { level: 'TFL', fee: '$110' },
                                        { level: 'Advanced PVCE', fee: '$160' },
                                        { level: 'VCE U 1&2', fee: '$160' },
                                        { level: 'VCE U 3&4', fee: '$200' },
                                    ].map((row, i) => (
                                        <tr key={row.level} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '0.8rem 0' }}>{row.level}</td>
                                            <td style={{ textAlign: 'right', padding: '0.8rem 0', fontWeight: 'bold' }}>{row.fee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Annual Event Levy</span>
                                <span style={{ fontWeight: 'bold' }}>$10</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Lesson Materials</span>
                                <span style={{ fontWeight: 'bold' }}>$10</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'white' }}>Concessions</h3>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', listStyleType: 'disc', paddingLeft: '1.2rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-highlight)' }}>15% Off:</strong> For 2+ children or unemployed parents (one discount max).
                                </li>
                                <li style={{ marginBottom: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-highlight)' }}>3rd Sibling:</strong> Pay 50% fee (youngest child).
                                </li>
                                <li style={{ marginBottom: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-highlight)' }}>4th Sibling:</strong> Free.
                                </li>
                                <li style={{ marginBottom: '0.5rem' }}>
                                    Special concession available for financial hardship.
                                </li>
                            </ul>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                                * All concessions are at the discretion of management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fees;
