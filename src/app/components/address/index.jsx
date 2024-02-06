import React from 'react'
import { PiMapPinLineBold } from "react-icons/pi";
function Address() {
  return (
    <div className='flex items-center justify-between container mx-auto py-6 mb-4  px-6'>
     <div className='flex items-center'>
     <PiMapPinLineBold  className='me-4'/>
     <p>Sulaimaniyah Dist, 455 Riyad Saud...</p>
     </div>
     <p><a href="#" className='text-primary'>Change</a></p>
    </div>
  )
}

export default Address