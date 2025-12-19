import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import '../index.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* Top Bar */}
            <div style={{ background: 'linear-gradient(90deg, var(--bg-body), var(--secondary))', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', padding: '0.5rem 0', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
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
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', position: 'relative' }}>

                    <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ background: 'white', padding: '5px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                            <img src="/logo.png" alt="Bharathi Academy Logo" style={{ height: '40px', width: 'auto' }} />
                        </div>
                        <div style={{ lineHeight: '1.2' }}>
                            <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-highlight)' }}>Bharathi Academy</span>
                            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Tamil Language School</span>
                        </div>
                    </Link>

                    {/* Hamburger Button for Mobile */}
                    <button
                        onClick={toggleMenu}
                        style={{
                            display: 'none', // hidden by default, shown in media query
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-highlight)',
                            fontSize: '1.8rem',
                            cursor: 'pointer',
                        }}
                        className="mobile-menu-btn"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>

                    {/* Navigation */}
                    <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
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
                                        onClick={closeMenu}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'var(--primary)' : 'var(--text-main)',
                                            fontWeight: isActive ? '700' : '500',
                                            fontSize: '0.95rem',
                                            textShadow: isActive ? '0 0 10px var(--primary-glow)' : 'none',
                                            transition: 'color 0.2s',
                                            display: 'block',
                                            padding: '0.5rem 0'
                                        })}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => { toggleTheme(); closeMenu(); }}
                                    style={{
                                        background: 'var(--bg-glass)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '50px',
                                        width: '50px',
                                        height: '28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '4px',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}
                                    aria-label="Toggle Theme"
                                >
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: theme === 'dark' ? 'var(--primary)' : '#FFD700',
                                        transform: theme === 'dark' ? 'translateX(22px)' : 'translateX(0)',
                                        transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), background 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                    }}>
                                        {theme === 'dark' ? (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                        )}
                                    </div>
                                </button>
                            </li>
                            <li>
                                <Link to="/fees" onClick={closeMenu} className="btn btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.9rem' }}>
                                    Enrol Now
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    
                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: var(--bg-card);
                        backdrop-filter: blur(20px);
                        border-bottom: 1px solid var(--border-color);
                        padding: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-in-out, padding 0.3s ease;
                        flex-direction: column;
                    }
                    
                    .nav-menu.active {
                        max-height: 500px; /* Arbitrary large height to fit content */
                        padding: 1rem 0;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    }

                    .nav-list {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem !important;
                    }
                }

                @media (min-width: 769px) {
                    .nav-menu {
                        display: block !important;
                        max-height: none !important;
                        padding: 0 !important;
                        position: static;
                        background: transparent;
                        box-shadow: none;
                        border: none;
                    }
                    
                    .nav-list {
                        display: flex;
                        gap: 2.5rem;
                        align-items: center;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
