import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="bg-white shadow-lg py-3">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="https://i.postimg.cc/9MhJ5bx9/logo.png" alt="kozshop" width="60" height="60" className="me-2 rounded-circle shadow-4-strong"/>
                    <h5>Koz's Shop</h5>
                    <p className="fs-6">Platform online untuk pengisian ulang kredit game secara elektronik.</p>
                </div>
                <div className="col-md-6 text-end">
                    <h6>Follow Us</h6>
                    <ul className="list-unstyled fs-6 mb-0">
                    <li><a href="YOUR_FACEBOOK" target="_blank" style={{ color: '#0B8C75' }}><i className="bi bi-facebook"></i> Facebook</a></li>
                    <li><a href="YOUR_INSTAGRAM" target="_blank" style={{ color: '#0B8C75' }}><i className="bi bi-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="fs-6">&copy; 2023 Koz's Shop. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="fs-6">
                            <Link to='/termscondition' style={{ color: '#0B8C75' }}>Terms &amp; Conditions</Link> | <Link to='/privacypolicy' style={{ color: '#0B8C75' }}>Privacy Policy</Link>
                        </p>
                    </div>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;
