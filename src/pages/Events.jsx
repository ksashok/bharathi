const Events = () => {
    return (
        <div className="container section">
            <div className="text-center mb-4">
                <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Community</span>
                <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: '800' }}>News & Events</h1>
            </div>

            <div style={{ display: 'grid', gap: '2.5rem' }}>
                {/* Event 1 */}
                <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', padding: '0', overflow: 'hidden' }}>
                    <div style={{ background: 'linear-gradient(45deg, #1f2937, #111827)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                        Image Placeholder
                    </div>
                    <div style={{ padding: '3rem' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px' }}>UPCOMING</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Annual Athletics Meet</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Our annual athletics meet brings together students from all campuses for a day of friendly competition and physical activity.
                            It is a great way to build team spirit and celebrate sportsmanship.
                        </p>
                        <button className="btn btn-outline">View Event Details</button>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', padding: '0', overflow: 'hidden' }}>
                    <div style={{ background: 'linear-gradient(45deg, #1f2937, #111827)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                        Image Placeholder
                    </div>
                    <div style={{ padding: '3rem' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px' }}>LATE 2025</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Theatre Performance</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Students from all levels participate in our grand theatre production, showcasing their Tamil language skills through drama, dance, and music.
                        </p>
                        <button className="btn btn-outline">View Event Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
