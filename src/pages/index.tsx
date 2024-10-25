import React from 'react'
import { Cookie } from '@/components/Cookie'
import { Message } from '@/components/Message'
import { useState } from 'react'
import { useEffect } from 'react'
import getFortune from '@/scripts/getMessage'

const Index = () => {
  const [rolled, setRolled] = useState(false)
  const [message, setMessage] = useState("You haven't rolled a cookie yet...")

  const roll = async () => {
    const newMessage = await getFortune()
    setMessage(newMessage)
    setRolled(true)
  }

  return (
    <div className='flex flex-col w-[100vw] h-[100vh]'>
      <Cookie mode={rolled} />
      <Message message={message} />
      <button className='m-auto bg-blue-500 rounded-md p-2 text-white font-semibold capitalize' onClick={roll}>Roll a cookie</button>
    </div>
  )
}

export default Index