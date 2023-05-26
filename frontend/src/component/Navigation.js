import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { useUser } from "../component/userContext";
import { Dropdown } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getAuth } from 'firebase/auth';

const Navigation = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        const homeSection = document.querySelector('#home');
        navigate('/');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }

    const navigateToProduct = () => {
        const homeSection = document.querySelector('#product');
        navigate('/');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
          }
    }

    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    const { user } = useUser();
    const [showDropdown, setShowDropdown] = useState(false);
    const isLoggedIn = user !== null;

    const handleDropdownToggle = (isOpen) => {
        setShowDropdown(isOpen);
    };
    
    const { setUser } = useUser();
    const auth = getAuth();

    const handleLogout = () => {
        auth.signOut().then(() => {
          setUser(null);
        });
    };

    return(
        <nav className="navbar-example2 navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <img src="https://i.postimg.cc/9MhJ5bx9/logo.png" alt="kozshop" width="45" height="45" className="me-2 rounded-circle shadow-4-strong"/>
                    Koz's Shop
                </Link>
                <div className="ms-auto me-2 d-lg-flex align-items-center d-lg-none">
                    <button className="notifIcon">
                        <i className="bi bi-bell position-relative">
                            <div className="circleBadge position-absolute top-0 end-0"></div>
                        </i>
                    </button>
                </div>
                <button onClick={toggleCollapse} className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link to='/#home' className='nav-link mx-2' onClick={navigateToHome}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/#product' className='nav-link mx-2' onClick={navigateToProduct}>
                                Product
                            </Link>
                        </li>
                        <NavDropdown
                            className='mx-2'
                            title="Calculator"
                            menuVariant="white"
                        >
                            <NavDropdown.Item>Win-Rate MLBB</NavDropdown.Item>
                            <NavDropdown.Item>
                                Magic Wheel
                            </NavDropdown.Item>
                            <NavDropdown.Item>Zodiac</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                    <div className="d-flex align-items-center btnWrapper mt-lg-0 mt-5">
                        <div className="ms-auto d-lg-flex align-items-center d-none">
                            <button className="notifIcon">
                                <i className="bi bi-bell position-relative">
                                <div className="circleBadge position-absolute top-0 end-0"></div>
                                </i>
                            </button>
                        </div>
                        {isLoggedIn ? (
                            <Dropdown onToggle={handleDropdownToggle} className='w-100'>
                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                <img src={user.photoURL} alt={user.displayName} className="rounded-circle me-2" style={{ height: '30px' }} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu show={showDropdown}>
                                <Dropdown.Item onClick={() => navigate('/profile')}>
                                <i className="bi bi-person-circle" /> Profile
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right" /> Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <button onClick={() => navigate('/login')} className="w-100 mx-2 secondaryBtn">
                            Masuk
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;