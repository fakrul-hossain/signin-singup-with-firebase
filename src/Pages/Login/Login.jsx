import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../Firebase/firebase.config';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

  const [registerError,setRegisterError] = useState('')
const [success,setSuccess] = useState('')
const emailRef = useRef(null)


  const handleLogin = e =>{
    e.preventDefault()
    const password = e.target.password.value
    const email = e.target.email.value
    console.log(email,password);

    setRegisterError('');
    setSuccess('');
signInWithEmailAndPassword(auth,email,password)
    .then(res =>{
      console.log(res.user);
      if (res.user.emailVerified) {
        setSuccess('Successfully Login')
      }
      else{
        Swal.fire(
          'Not Verified Email',
          'Please Verified Your Email',
          'question'
        )
      }
    })
    .catch(err=>{
      console.log(err)
      setRegisterError('You password or email address invalid')
    })
  }

  const handleForgetPassword = () =>{
    const email = emailRef.current.value
    if (!email) {
      console.log('please provide a email', emailRef.current.value);
      return;
    }
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      console.log('please write a valid email');
      return;
    }

  // send validation email
    
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      Swal.fire('Check your email and update your password')
    })
    .catch(error=>{
      console.log(error);
    })

  }



    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" name='email' placeholder="Type your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Type your password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {
          registerError && <p className="mt-2 text-[18px] font-semibold text-red-500">{registerError}</p>
        }
        {
          success && <p className="mt-2 text-[18px] font-bold text-green-500">{success}
          
          </p>
        }
        <p className='font-bold cursor-pointer text-green-500 underline'>
          <NavLink to='/signIn'> New to this website, Please Register</NavLink>
        </p>
      </form>
    </div>
  </div>
</div>



        </div>
    );
};

export default Login;