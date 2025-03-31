import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT '} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-27'>
          <img className='w-full max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p>COMING</p>
            <p>SOON</p>
          </div>
        </div>
    </div>
  )
}

export default Contact
