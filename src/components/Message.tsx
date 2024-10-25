import React from 'react'

export const Message = ({message}:{message:string}) => {
  return (
    <div className='flex justify-center items-center self-center w-full'>
      <p className='text-center'>
        {message}
      </p>
    </div>
  )
}

