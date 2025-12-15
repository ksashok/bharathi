const locations = [
    {
        name: 'Berwick',
        time: 'Sundays, 10.00 am to 12.45 pm',
        address: 'Kambrya College, 68 Bemersyde Drive, Berwick',
        contacts: [
            { role: 'Campus Principal', name: 'Senthuren Kularasan', phone: '0405 762 754', email: 'senthuren.kularasan@bharathi.org.au' },
            { role: 'Associate Principal', name: 'Gayathry Sathasivam', phone: '0425 614 215', email: 'gaya.sathasivam@bharathi.org.au' },
            { role: 'Associate Principal', name: 'Nilani P', phone: '0450 557 024', email: 'nilanip@gmail.com' }
        ]
    },
    {
        name: 'Clayton',
        time: 'Sundays, 1.30 pm to 4.00 pm',
        address: 'Westall Secondary College, 88 Rosebank Ave, Clayton South',
        contacts: [
            { role: 'Campus Principal', name: 'Rahula Ravi', phone: '0402 906 389', email: 'rahuleswary.raveendiran@bharathi.org.au' }
        ]
    },
    {
        name: 'Cranbourne',
        time: 'Saturdays, 10.00 am to 12.45 pm',
        address: 'Cranbourne Secondary College – Entry from Clarendon St.',
        contacts: [
            { role: 'Campus Principal', name: 'Saravanan Krishnaraj', phone: '0402 632 362', email: 'saravanan.krishnaraj@bharathi.org.au' }
        ]
    },
    {
        name: 'Dandenong',
        time: 'Sundays, 10.15 am to 1.00 pm',
        address: 'Dandenong High School – Dandenong (Entry from James Street)',
        contacts: [
            { role: 'Campus Principal', name: 'V Parthiban', phone: '0449 826 776', email: 'vivekanandan.parthiban@bharathi.org.au' }
        ]
    },
    {
        name: 'East Burwood',
        time: 'Sundays, 10.15 am to 1.00 pm',
        address: 'Forest Hill College, Hawthorn Rd (Gate 2), Burwood East',
        contacts: [
            { role: 'Campus Principal', name: 'Latha Seeniraj', phone: '0450 370 111', email: 'latha.seeniraj@bharathi.org.au' }
        ]
    },
    {
        name: 'Pakenham',
        time: 'Saturdays, 1.45 pm to 4.30 pm',
        address: 'Beaconhills College, Pakenham Road, Pakenham',
        contacts: [
            { role: 'Coordinating Manager', name: 'Para Paranthaman', phone: '0417 139 629', email: 'paranthaman.vellupillai@bharathi.org.au' }
        ]
    },
    {
        name: 'South Morang',
        time: 'Sundays, 10.15 am to 1.00 pm',
        address: 'The Lakes South Morang College, Middle Years Campus, 80 Jardier Terrace, South Morang',
        contacts: [
            { role: 'Campus Associate Principal', name: 'Varsha Jeyaharan', phone: '0424 596 594', email: 'varsha.jeyaharan@bharathi.org.au' }
        ]
    },
    {
        name: 'Online Campus (Worldwide)',
        time: 'Flexible / Based on Class',
        address: 'Online Classrooms',
        contacts: [
            { role: 'Curriculum & Online Campus Manager', name: 'Thanuja Sudarsan', phone: '+61 450 455 671', email: 'thanuja.sudarsan@bharathi.org.au' },
            { role: 'Online Campus Coordinator', name: 'Rubika Arnold Jeyanthan', phone: '+94 77 728 6170', email: '' }
        ]
    }
];

const Locations = () => {
    return (
        <div className="container section">
            <div className="text-center mb-4">
                <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Where We Are</span>
                <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem', fontWeight: '800' }}>Campus Locations</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                    We run classes at 7 + 1 Online distinct locations across Melbourne and Worldwide. Please choose the campus nearest to you.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {locations.map((loc) => (
                    <div key={loc.name} className="glass-card" style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem 2rem' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gradient-brand)' }}></div>
                        <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem', marginTop: '0.5rem' }}>{loc.name}</h2>

                        <div style={{ margin: '1.5rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <p className="mb-4" style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', marginTop: '-3px' }}>📍</span>
                                <span>{loc.address}</span>
                            </p>
                            <p style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>🕒</span>
                                <span style={{ color: 'var(--text-highlight)' }}>{loc.time}</span>
                            </p>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                {loc.contacts.map((contact, idx) => (
                                    <div style={{ fontSize: '0.9rem' }}>
                                        {contact.phone && <div style={{ marginBottom: '0.3rem' }}>📞 {contact.phone}</div>}
                                        {contact.email && <div><a href={`mailto:${contact.email}`} style={{ color: 'var(--accent)' }}>✉️ {contact.email}</a></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {!loc.name.includes('Online') && (
                            <a href={`https://maps.google.com/?q=${loc.address}`} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Get Directions
                            </a>
                        )}
                        {loc.name.includes('Online') && (
                            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                Join Online
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;
