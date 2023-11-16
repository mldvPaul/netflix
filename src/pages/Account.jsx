import React from 'react'
import SavedShows from '../components/savedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/2cda6362-3a82-440d-9992-e7aedf879b15/DE-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[15%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

      </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
