import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-3xl font-medium text-gray-800 '>Subscribe Now To Get 20% OFF</p>
      <p className='text-gray-400 mt-3'>Yo</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter
