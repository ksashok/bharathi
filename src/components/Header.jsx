import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../index.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            {/* Top Bar */}
            <div style={{ background: 'linear-gradient(90deg, var(--bg-body), var(--secondary))', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', padding: '0.5rem 0', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <span>📞 +61 433 354 401</span>
                    <span>✉️ info@bharathi.org.au</span>
                </div>
            </div>

            {/* Main Header - Sticky & Glass */}
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'var(--bg-glass)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border-color)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>

                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ background: 'white', padding: '5px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                            <img src="/logo.png" alt="Bharathi Academy Logo" style={{ height: '45px', width: 'auto' }} />
                        </div>
                        <div style={{ lineHeight: '1.2' }}>
                            <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-highlight)' }}>Bharathi Academy</span>
                            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tamil Language School</span>
                        </div>
                    </Link>

                    <nav>
                        <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/locations', label: 'Campuses' },
                                { path: '/fees', label: 'Fees & Enrolment' },
                                { path: '/events', label: 'News' }
                            ].map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'var(--primary)' : 'var(--text-main)',
                                            fontWeight: isActive ? '700' : '500',
                                            fontSize: '0.95rem',
                                            textShadow: isActive ? '0 0 10px var(--primary-glow)' : 'none'
                                        })}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid var(--text-muted)',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        fontSize: '1.2rem',
                                        color: 'var(--text-main)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label="Toggle Theme"
                                >
                                    {theme === 'dark' ? '☀️' : '🌙'}
                                </button>
                            </li>
                            <li>
                                <Link to="/fees" className="btn btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.9rem' }}>
                                    Enrol Now
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
