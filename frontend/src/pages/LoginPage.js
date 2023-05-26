import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';

import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { useUser } from "../component/userContext";

const LoginPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();

  const { setUser } = useUser();
  const handleGoogleLogin = () => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err)=>{
        console.error(err);
      })
  }

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
      navigate("/");
    })
    .catch((err) => {
      alert("Terjadi Kesalahan")
    })
  }

  return (
    <div className="container" id="loginpage">
        <section className="login">
        <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="text-black">
                    <div className="p-md-2 p-lg-5">
                      <div className="row justify-content-center">
                        <div className="mt-4 col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                          <h1 className="text-center fw-bold mb-2 mx-1 mx-md-4 mt-2">Selamat Datang</h1>
                          <p className="text-center mb-4 mx-1 mx-md-4 mt-2">Selamat datang kembali! mohon masukkan kredensial Anda.</p>

                          <form className="mx-1 mx-md-4" autoComplete='off' onSubmit={handleEmailPasswordLogin}>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" required/>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-3">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" required />
                              </div>
                            </div>
                            <div className="text-center mb-3">
                              <a href="#" className="text-decoration-none forgotpass">Lupa Password?</a>
                            </div>

                            <div className="justify-content-center mx-3 mb-1 mb-lg-1">
                              <button type='submit' className="registerbtn btn btn-primary btn-lg w-100">Masuk</button>
                              <button 
                                className="signup-google btn btn-primary btn-lg w-100 mt-2"
                                type='button'
                                onClick={handleGoogleLogin}
                              >
                                <i className="bi bi-google"></i>
                                Masuk dengan Google
                              </button>
                            </div>

                            <div className="text-center mb-4 mb-lg-4">
                              <span className="d-inline">
                                Belum punya akun?
                                <Link to='/register' className="d-inline text-decoration-none">
                                  Daftar Gratis
                                </Link>
                                </span>
                            </div>

                          </form>
                        </div>

                        <div className="bannerslider d-flex align-items-center col-md-10 col-lg-6 col-xl-6 order-1 order-lg-2 ">
                          <Carousel fade activeIndex={index} onSelect={handleSelect} indicators={false}>
                            <Carousel.Item>
                              <img className="d-block w-100" src={banner1} alt="First slide" />
                              <Carousel.Caption>
                                <h6>Pastikan transaksi lancar dan akses fitur menarik, top up sekarang!</h6>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img className="d-block w-100" src={banner2} alt="Second slide" />
                              <Carousel.Caption>
                                <h6>Jangan ketinggalan kesempatan, segera TopUp dan dapatkan bonusnya!</h6>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default LoginPage;
