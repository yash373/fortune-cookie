import React from 'react'

export const Cookie = ({mode}: {mode: boolean}) => {
    return (
        <div className='flex justify-center items-center w-full py-10'>
            {!mode && <img className='flex self-center h-[50%]' src="https://t3.ftcdn.net/jpg/01/25/22/42/360_F_125224222_7nzpmSZUPkYxOqHtBaJpEJNetCLtYruV.jpg" alt="closed cookie" />}
            {mode && <div className='flex text-3xl my-auto h-[50vh] text-center self-center font-semibold'> <p className='my-auto'> OMG!!! I opened my cookie </p> </div>}
        </div>
    )
}
