import React, { useContext } from 'react'

import { AuthContext } from './Context'

export const ContextComponent = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext)

  return (
    <>
      <button className='btn' onClick={toggleLogin}>
        Login
      </button>
      <div className='text'>{isLoggedIn.toString()}</div>
    </>
  )
}
