import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import avatar from '../assets/img/avatar.jpg';

import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useUser } from "../component/userContext";

const RegisterPage = () => {
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
    .catch((err) =>{
      console.error(err);
    })
  }

  const handleGoogleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const password2 = e.target.password2.value

    if(!name  || !email || !password || !password2){
      return alert("Silahkan lengkapi Regsitrasi.")
    }

    if(name.length < 4){
      return alert("Nama harus lebih dari 4 karakter")
    }else if(name.length > 26){
      return alert("Nama harus kurang dari 26 karakter")
    }

    if(password !== password2){
      return alert("Password harus sama.")
    }

    if(password.length < 6){
      return alert("Password harus lebih dari 6 karakter.")
    }

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      updateProfile(result.user, {
        photoURL: avatar
      })
      setUser(result.user);
      navigate("/");
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
    return (
      <div className="container" id="registerpage">
          <section className="vh-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="text-black">
                    <div className="p-md-5 p-lg-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                          <h1 className="text-center fw-bold mb-2 mx-1 mx-md-4 mt-4">Daftar</h1>
                          <p className="text-center mb-4 mx-1 mx-md-4 mt-2">Nikmati berbagai Manfaat dengan Mendaftar!</p>
                          <form className="mx-1 mx-md-4 mt-1" autoComplete='off' onSubmit={handleGoogleRegister}>

                            <div className="d-flex flex-row align-items-center mb-3">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="name">Nama</label>
                                <input type="text" id="name" className="form-control" required/>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-3">
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
                                <input type="password" id="password" className="form-control" required/>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-3">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="password2">Repeat your password</label>
                                <input type="password" id="password2" className="form-control" required/>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-3 mx-3">
                              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required/>
                              <label className="form-check-label" htmlFor="form2Example3">
                                I agree all statements in <Link to='/termsconditon' className="termservice">Terms &amp; Conditions</Link>
                              </label>
                            </div>

                            <div className="justify-content-center mx-3">
                              <button type='submit' className="registerbtn btn btn-primary btn-lg w-100">Daftar</button>
                              <button 
                                className="signup-google btn btn-primary btn-lg w-100 mt-2"
                                type='button'
                                onClick={handleGoogleLogin}
                              >
                                <i className="bi bi-google"></i>
                                Daftar dengan Google
                              </button>
                            </div>

                            <div className="text-center">
                              <span className="d-inline">
                                Sudah punya akun?
                                <Link to='/login' className='d-inline text-decoration-none"'>
                                  Masuk Sekarang
                                </Link>
                                </span>
                            </div>

                          </form>

                        </div>
                        <div className="bannerslider col-md-10 col-lg-6 col-xl-7 mt-lg-1 order-1 order-lg-2 d-flex align-items-center">
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
  
  export default RegisterPage;
  