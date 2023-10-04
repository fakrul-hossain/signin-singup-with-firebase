import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import { FaEye,FaEyeSlash } from 'react-icons/fa';

import React, { useState } from "react";
import auth from "../../Firebase/firebase.config";
import { NavLink } from "react-router-dom";

const Register = () => {

const [registerError,setRegisterError] = useState('')
const [success,setSuccess] = useState('')
const [showPassword,setShowPassword] = useState(false)


  const handleRegister = (e) => {
    e.preventDefault();
    console.log('from submitted');
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const accepted = e.target.terms.checked;

console.log(accepted);

     // reset error
     setRegisterError('');
     setSuccess('');
    //password validation
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer')
      return;
    }  else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should have at least one uppercase characters.')
      return;
    }
    else if (!accepted) {
      setRegisterError('Please accept our terms and condition')
      return
    }

   
    // create user
    createUserWithEmailAndPassword(auth, email, password,name)
    .then(result =>{
      console.log(result.user);
      setSuccess('Successfully Register')
      // update profile 
      updateProfile(result.user, {
        displayName: name,
        photoURL : "https://lh3.googleusercontent.com/a/ACg8ocJG5BH6r8X2HL8tHBTq6hUvhHybotlsLcfPuX1BbzxwJvY=s96-c-rg-br100"
      })
      .then(() =>{
        Swal.fire('Profile Updated')
      })
      // send verification
      sendEmailVerification(result.user)
      .then(() =>{
        Swal.fire('Check your email and verify your account')
      })
      .catch()
    })
    .catch(error =>{
      setRegisterError('You have already use this email')
    })
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="md:w-3/6 mx-auto shadow-xl p-12 rounded-md mt-6"
      >
        <h1 className="text-center font-bold text-3xl text-green-500">
          Register
        </h1>
        <div className="mb-6">
          <label className="block  mb-2 text-[16px] font-medium text-black">
            {" "}
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block  mb-2 text-[16px] font-medium text-black">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block  mb-2 text-[16px] font-medium text-black">
            Password
          </label>
        <div className="relative">
        <input
            required
            placeholder="Enter your password"
            type={showPassword ? "text" :"password"}
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-white cursor-pointer absolute top-[32%] right-[7%]" onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
        </div>
        <div className="flex gap-3 md:ml-1 md:mt-3">
          <input type="checkbox" name="terms" id="terms" />
          <label className="text-[16px] font-semibold text-purple-600" htmlFor="terms">Accept Terms and Condition</label>
        </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        {
          registerError && <p className="mt-2 text-[18px] font-semibold text-red-500">{registerError}</p>
        }
        {
          success && <p className="mt-2 text-[18px] font-bold text-green-500">{success}
          
          </p>
        }
         <p className="font-bold cursor-pointer text-green-500 underline">
          <NavLink to='/login'>Already Register Please Login</NavLink>
        </p>
      </form>
   
    </div>
  );
};

export default Register;
