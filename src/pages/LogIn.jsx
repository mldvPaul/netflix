import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/2cda6362-3a82-440d-9992-e7aedf879b15/DE-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/'/>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 rounded text-white'>
               <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 m-2 rounded bg-gray-700' type="email" placeholder='Email' autoComplete='email'/>
                        <input className='p-3 m-2 rounded bg-gray-700' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 mx-2 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type='checkbox'/>Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600 mr-2'>
                                New to Netflix?
                            </span>
                            <Link to='/signup'>Sign Up</Link>
                        </p>
                    </form>
                </div> 
            </div>
        </div>
  </div>
  )
}

export default LogIn
